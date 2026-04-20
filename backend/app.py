from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

DATA_FILE = os.path.join(os.path.dirname(__file__), 'data.json')

def load_data():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/api/garden-data', methods=['GET'])
def get_garden_data():
    try:
        data = load_data()
        return jsonify({
            'success': True,
            'data': data['garden_data']
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/hour-detail', methods=['GET'])
def get_hour_detail():
    try:
        hour = request.args.get('hour', type=int)
        if hour is None or hour < 0 or hour > 23:
            return jsonify({
                'success': False,
                'error': 'Invalid hour parameter (0-23)'
            }), 400
        
        data = load_data()
        hour_data = next((item for item in data['garden_data'] if item['hour'] == hour), None)
        
        if hour_data:
            return jsonify({
                'success': True,
                'data': hour_data
            })
        else:
            return jsonify({
                'success': False,
                'error': 'Hour data not found'
            }), 404
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
