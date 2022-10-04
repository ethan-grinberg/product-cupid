# ProductCupid
ADV492 Project

# Tech Stack
- python `Flask` backend
- `react.js` front end
- deployment on `heroku`

# Contributing

## Local Set Up
- Cd into the repository
  - `git clone https://github.com/ethanbg2/ProductCupid.git`
  - `cd product-cupid`
- Set up a local virtual environment called env
  - `python -m venv env`
- activate virtual env
  - `env\Scripts\activate` (for Windows)
- Then install the current packages:
  - `pip install -r requirements.txt`
- Install node.js dependencies
  -  `npm install`

## Making Changes
- `git pull` to get anyone else's changes locally
- `env\Scripts\activate` activate virtual env (for Windows)
- `pip install -r requirements.txt` to get any new packages someone else installed
- `pip freeze > requirements.txt` if you add a new package to the virtual environment
- `python app.py` to run the server locally in debug mode at port `5000`
- `npm run build` to update and run the front end with back end
  - Or just run `npm start` to see front end without build at port `3000`

## Publishing Changes
Once you commit and push your changes they will be live on https://product-cupid.herokuapp.com/