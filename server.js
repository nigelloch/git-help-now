const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
const sequelize = require('./config/connection');
=======
const sequelize = require("./config/connection");
>>>>>>> bae5b7774b013495fb0774e258d4b40104ad5a37
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public/')));

app.use(require('./controllers'));
=======
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));
>>>>>>> bae5b7774b013495fb0774e258d4b40104ad5a37

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
