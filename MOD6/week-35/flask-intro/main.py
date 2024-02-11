# Basic flask application setup

# Start by importing flask package:

from flask import Flask

app = Flask(__name__)

# The path for the route is the parameter passed to the app.route decorator


@app.route('/')
def hello():
    return '<h1>Hello world!</h1>'

# Start application:
# pipenv run flask run
