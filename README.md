# The Smallest Starting Point

So, you want to build a full-stack JavaScript application with:

- An Express web server
- A PostgreSQL database
- A React front-end

And you want it to work locally as well as be easy to deploy?

We've got your back:

## Local Development

### Setting Up

First, clone this repo locally, then remove the current `.git` folder. Follow this up with making it a new git repo.

```bash
rm -rf .git

git init
```

Then go to GitHub, create a new repository, and add that remote to this local repo.

Then, run `npm install` to install all node modules.

You should decide on a name for your local testing database, and edit `db/index.js` changing the value of `DB_NAME`.

Once you decide on that name, make sure to run `createdb` from your command line so it exists (and can be connected to).

Finally you can run `npm run server:dev` to start the web server.

In a second terminal navigate back to the local repo and run `npm run client:dev` to start the react server. 

This is set up to run on a proxy, so that you can make calls back to your `api` without needing absolute paths. You can instead `axios.get('/api/posts')` or whatever without needing to know the root URL.

Once both dev commands are running, you can start developing... the server restarts thanks to `nodemon`, and the client restarts thanks to `react-scripts`.

### Project Structure

```bash
├── db
│   ├── index.js
│   └── init_db.js
├── index.js
├── package.json
├── public
│   └── index.html
├── routes
│   └── index.js
└── src
    ├── api
    │   └── index.js
    ├── components
    │   ├── App.js
    │   └── index.js
    └── index.js
```

Top level `index.js` is your Express Server. This should be responsible for setting up your API, starting your server, and connecting to your database.

Inside `/db` you have `index.js` which is responsible for creating all of your database connection functions, and `init_db.js` which should be run when you need to rebuild your tables and seed data.

Inside `/routes` you have `index.js` which is responsible for building the `apiRouter`, which is attached in the express server. This will build all routes that your React application will use to send/receive data via JSON.

Lastly `/public` and `/src` are the two puzzle pieces for your React front-end. `/public` contains any static files necessary for your front-end. This can include images, a favicon, and most importantly the `index.html` that is the root of your React application.

### Command Line Tools

In addition to `client:dev` and `server:dev`, you have access to `db:build` which (you will write to) rebuilds the database, all the tables, and ensures that there is meaningful data present.

## Deployment

### Setting up Heroku (once)

```bash
heroku create hopeful-project-name

heroku config:set PGSSLMODE=no-verify

heroku addons:create heroku-postgresql:hobby-dev
```

This creates a heroku project which will live at https://hopeful-project-name.herokuapp.com (note, you should change this to be relevant to your project).

It will also create a postgres database for you, on the free tier.


### Deploying

Once you've built the front-end you're ready to deploy, simply run `git push heroku master`. Note, your git has to be clean for this to work (which is why our two git commands live as part of getting ready to deploy, above).

This will send off the new code to heroku, will install the node modules on their server, and will run `npm start`, starting up your express server.

If you need to rebuild your database on heroku, you can do so right now with this command:

```bash
heroku run npm run db:build
```

Which will run `npm run db:build` on the heroku server.

Once that command runs, you can type `heroku open` to get a browser to open up locally with your full-stack application running remotely.
