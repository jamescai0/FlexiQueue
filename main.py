from flask import redirect, url_for, request
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/index')
def returnIndex():
    return render_template('index.html')


@app.route("/daldongane")
def daldongane():
    return render_template('daldongane.html')


@app.route("/beijing")
def beijing():
    return render_template('beijing.html')


@app.route("/kinka")
def kinka():
    return render_template('kinka.html')

# login page


@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != 'admin' or request.form['password'] != 'admin':
            error = 'Invalid Credentials. Please try again.'
        else:
            return redirect(url_for('home'))
    return render_template('login.html', error=error)

# signup page


@app.route('/signup')
def signup():
    return render_template('signup.html')


if __name__ == "__main__":
    app.run(debug=True)