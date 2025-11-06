const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')
const {v4: uuidv4} = require('uuid')

app.use(cors())

// that is routing!
// app.get('/todos', (req, res) => {
//     res.send('Hello Marta!')
// })

// get all todos
app.get('/todos/:userEmail', async (req, res) => {
    const userEmail = req.params.userEmail
    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email=$1', [userEmail])
        res.json(todos.rows)
    } catch (error) {
        console.error(error)
    }
})
// create a new todo, todos is an endpoint; get request might be as well
app.post('/todos', (req, res) => {
    const {user_email, title, progress, date} = req.body
    console.log("To sa dane z server.js: ", req.body)
    uuidv4()  // generuje nam unikalne id
    try {
        pool.query(`INSERT INTO todos (id, user_email, title, progress, date) VALUES ($1, $2, $3, $4, $5)`
        [id, user_email, title, progress, date]
        )
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))