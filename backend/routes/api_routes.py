from flask import Blueprint, jsonify, request
from config import get_redis_client
import json
import os
import pymysql

api_routes = Blueprint('api_routes', __name__)

def get_db_connection():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='123456',
        database='data_garden',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )

def get_cached_data(cache_key):
    redis_client = get_redis_client()
    if redis_client:
        try:
            cached_data = redis_client.get(cache_key)
            if cached_data:
                return json.loads(cached_data)
        except:
            pass
    return None

def set_cached_data(cache_key, data, expire_seconds=3600):
    redis_client = get_redis_client()
    if redis_client:
        try:
            redis_client.setex(cache_key, expire_seconds, json.dumps(data))
        except:
            pass

@api_routes.route('/api/sensory-data', methods=['GET'])
def get_sensory_data():
    try:
        hour = request.args.get('hour', type=int)
        
        # Validate hour parameter
        if hour is not None and (hour < 0 or hour > 24):
            return jsonify({
                'success': False,
                'error': 'Hour must be between 0 and 24'
            }), 400
        
        cache_key = f'sensory_data_{hour}' if hour is not None else 'sensory_data_all'
        cached_data = get_cached_data(cache_key)
        if cached_data:
            return jsonify({
                'success': True,
                'data': cached_data,
                'cached': True
            })
        
        connection = get_db_connection()
        cursor = connection.cursor()
        
        try:
            if hour is not None:
                cursor.execute("SELECT * FROM sensory_flower WHERE hour = %s", (hour,))
            else:
                cursor.execute("SELECT * FROM sensory_flower")
            
            results = cursor.fetchall()
            
            # Convert datetime objects to strings for JSON serialization
            for result in results:
                if 'record_date' in result and hasattr(result['record_date'], 'isoformat'):
                    result['record_date'] = result['record_date'].isoformat()
            
            set_cached_data(cache_key, results)
            
            return jsonify({
                'success': True,
                'data': results,
                'cached': False,
                'count': len(results)
            })
        finally:
            cursor.close()
            connection.close()
    except pymysql.MySQLError as e:
        return jsonify({
            'success': False,
            'error': f'Database error: {str(e)}'
        }), 500
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'Internal server error: {str(e)}'
        }), 500