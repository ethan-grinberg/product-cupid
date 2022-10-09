from flask import Flask, send_from_directory
from flask import session
from random import randint

from get_data import get_rand_items

app = Flask(__name__,static_folder="build/",static_url_path='')
# app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route("/")
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/products")
def products():
    # if not "items" in session:
    #     session["curr_best"] = None
    #     session['items'] = []
    return get_rand_items()

@app.route("/products/<int:prod_id>/<order>")
def favorite_product(prod_id, order):
    order = int(order)
    return get_rand_items(favorite=prod_id, order=order)


if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)
