const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const options = {
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    credentials: true,
    optionSuccessStatus: 200,
}

//middlewares
app.use(cors(options));
app.use(express.json());


app.get('/', (req, res) => {
    return res.send('admission form data is collecting')
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});