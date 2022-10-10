from flask import Flask, send_from_directory
from flask import jsonify

from get_data import get_rand_items
from get_data import get_categories

app = Flask(__name__,static_folder="build/",static_url_path='')

@app.route("/")
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/products/", defaults={'category': None})
@app.route("/products/<category>")
def products(category):
    response =  get_rand_items(category=category)
    response = jsonify(response)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/products/<int:prod_id>/<order>/", defaults={'category': None})
@app.route("/products/<int:prod_id>/<order>/<category>")
def favorite_product(prod_id, order, category):
    response = get_rand_items(favorite=prod_id, order=order, category=category)
    response = jsonify(response)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/categories")
def categories():
    return get_categories()

if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)
