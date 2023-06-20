from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("API_KEY")

app = Flask(__name__)
CORS(app)

@app.route('/search-symbol', methods=['POST'])
def search_symbol_endpoint():
    symbol = request.json['symbol']
    url = f"https://www.alphavantage.co/query?function=OVERVIEW&symbol={symbol}&apikey={api_key}"
    res = requests.get(url)
    if res.status_code == 200:
        data = res.json()
        return jsonify(data)
    else:
        return jsonify({'error': 'Request failed with status code: ' + str(res.status_code)})

if __name__ == '__main__':
    app.run()