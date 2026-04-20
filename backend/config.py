from flask import Flask
from flask_cors import CORS
import redis
import os
import pymysql

# 初始化pymysql
pymysql.install_as_MySQLdb()

app = Flask(__name__)
CORS(app)

# Redis配置
app.config['REDIS_HOST'] = 'localhost'
app.config['REDIS_PORT'] = 6379
app.config['REDIS_DB'] = 0

try:
    redis_client = redis.Redis(
        host=app.config['REDIS_HOST'],
        port=app.config['REDIS_PORT'],
        db=app.config['REDIS_DB'],
        decode_responses=True
    )
    redis_client.ping()
except:
    redis_client = None
    print("Warning: Redis connection failed, caching disabled")

def get_redis_client():
    return redis_client