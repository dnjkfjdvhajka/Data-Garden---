from config import app
from routes import api_routes

app.register_blueprint(api_routes)

if __name__ == '__main__':
    print("Starting Data Garden Backend Server...")
    print("API Endpoints:")
    print("  - GET /api/sensory-data")
    print("  - GET /api/sensory-data?hour=<0-24>")
    
    app.run(debug=True, host='127.0.0.1', port=5000)