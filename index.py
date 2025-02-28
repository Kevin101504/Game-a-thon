from flask import Flask, render_template, request
import requests

app = Flask(__name__)

API_KEY = "MJRDyiPrBGw7aWrNRhP5IdEmZ0UY2E6CzAETyPbp"
QUIZ_API_URL = "https://quizapi.io/api/v1/questions"

@app.route("/")
def home():
    return "Welcome to the Quiz App! Go to /quiz to start."

@app.route("/quiz")
def quiz():
    # Fetch quiz questions
    params = {
        "apiKey": API_KEY,
        "limit": 5,  # Number of questions
        "category": "code",  # Change category if needed
        "difficulty": "Easy"  # Options: Easy, Medium, Hard
    }
    
    response = requests.get(QUIZ_API_URL, params=params)

    if response.status_code == 200:
        questions = response.json()
        return render_template("quiz.html", questions=questions)
    else:
        return f"Error fetching quiz: {response.status_code}"

if __name__ == "__main__":
    app.run(debug=True)

