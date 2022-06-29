const express = require('express')
const cors = require('cors')
const operationRoutes = require('./routes/operations.routes')

const app = express();
app.use(cors());
app.use(express.json());
app.use(operationRoutes);
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(4000)
console.log("🚀 Server funciona!");