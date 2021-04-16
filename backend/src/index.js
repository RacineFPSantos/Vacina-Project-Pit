const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const Routes = require('./routes/patientRoutes');

const app = express();
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

app.get("/", (request, response) => {
  response.json({ message: "Hello World" });
})

app.use(Routes);

app.listen(3005, () => {
  console.log(`Rodando na porta 3005`)
})