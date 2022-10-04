from flask import Flask, send_from_directory

app = Flask(__name__,static_folder='client/build',static_url_path='')

@app.route("/")
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/test")
def test():
    return {"test": ["test1", "test2", "test3"]}

if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)
