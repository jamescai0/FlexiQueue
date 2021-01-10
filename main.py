from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route("/daldongane")
def test_link():
    return render_template('daldongane.html')


if __name__ == "__main__":
    app.run(debug=True)
