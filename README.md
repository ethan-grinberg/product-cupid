# ProductCupid
ADV492 Project

# Contributing

## Local Set Up
- Cd into the repository
  - `git clone https://github.com/ethanbg2/ProductCupid.git`
  - `cd ProductCupid`
- Set up a local virtual environment called env
  - `python -m venv env`
- activate virtual env
  - `env\Scripts\activate` (for Windows)
- Then install the current packages:
  - `pip install -r requirements.txt`

## Making Changes
- `git pull` to get anyone else's changes locally
- `env\Scripts\activate` activate virtual env (for Windows)
- `pip install -r requirements.txt` to get any new packages someone else installed
- `pip freeze > requirements.txt` if you add a new package to the virtual environment
- `flask --app app --debug run` to run the app locally in debug mode

## Publishing Changes
Once you commit and push your changes they will be reflected on https://ethangrin.pythonanywhere.com/ by the end of the day
  - changes are pulled into the webserver automatically every day at 23:00 UTC
