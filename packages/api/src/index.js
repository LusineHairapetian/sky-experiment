const express = require('express');
const cors = require('cors');
const authMiddleware = require('./middlewares/auth');
const IndexController = require('./controllers');
const apiRoutes = require('./routes/api');

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());

app.get('/', IndexController.get);

//app.use(authMiddleware);
app.use('/api', apiRoutes);

app
  .listen(PORT, () => console.debug(`Server is now running on http://localhost:${PORT}/`));
