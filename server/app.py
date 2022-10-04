from flask import Flask, send_from_directory
import os
from pathlib import Path


# ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = project_dir = Path(__file__).resolve().parents[1]

app = Flask(__name__,static_folder=os.path.join(os.getcwd(), "..", "client", "build"),static_url_path='')

@app.route("/")
def index():
    print(os.getcwd())
    print(app.static_folder)

    return send_from_directory(app.static_folder, 'index.html')

@app.route("/test")
def test():
    return {"test": ["test1", "test2", "test3"]}

if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)
