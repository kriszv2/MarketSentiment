from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("API_KEY")

app = Flask(__name__)
CORS(app)

# Get the price of the stock stated in the api call
@app.route('/get-price', methods=['POST'])
def get_price_of_symbol():
    symbol = request.json['symbol']
    url = f"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={api_key}"
    res = requests.get(url)
    if res.status_code == 200:
        data = res.json()
        return jsonify(data)
    else:
        return jsonify({'error': 'Request failed with status code: ' + str(res.status_code)})
# Get the general data of the stock stated in the api call 
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
# Get the sma of the stock stated in the api call
@app.route('/get-sma', methods=['POST'])
def get_sma_of_symbol():
    symbol = request.json['symbol']
    interval = request.json['interval']
    time_period = request.json['time_period']
    url = f"https://www.alphavantage.co/query?function=SMA&symbol={symbol}&interval={interval}&time_period={time_period}&series_type=open&apikey={api_key}"
    res = requests.get(url)
    if res.status_code == 200:
        data = res.json()
        return jsonify(data)
    else:
        return jsonify({'error': 'Request failed with status code: ' + str(res.status_code)})


if __name__ == '__main__':
    app.run()