const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors())

// that is routing!
// app.get('/todos', (req, res) => {
//     res.send('Hello Marta!')
// })

// get all todos
app.get('/todos/:userEmail', async (req, res) => {
    const userEmail = req.params.userEmail
    console.log(userEmail)
    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email=$1', [userEmail])
        res.json(todos.rows)
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))