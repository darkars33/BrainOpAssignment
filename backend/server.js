const express = require('express');
const dotenv = require('dotenv');
const connectToMongodb = require('./db/connectToMongodb');
const authRoute = require('./routes/auth.route');

const app = express();
const PORT = 5000;
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
          res.send('Hello World');
});

app.use('/api/users', authRoute);

app.listen(PORT, () => {
          connectToMongodb();
          console.log(`Server is running on port ${PORT}`);
})
