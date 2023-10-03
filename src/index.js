require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
	return res.json('PRIMEIRO DEPLOY')
})
    app.listen(process.env.PORT, () => {
        console.log(`API ESTÁ RODANDO NA PORTA: ${process.env.PORT}`);
    });