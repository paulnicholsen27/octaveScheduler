import requests
import json 

questions = []

for _ in range(5):
    req = requests.get("https://opentdb.com/api.php?amount=50")
    questions += req.json()["results"]

print(len(questions)


# # import ipdb; ipdb.set_trace()
with open("trivia_questions.py", "w") as f:
    f.write(json.dumps(questions))