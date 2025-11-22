const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')
const { v4: uuidv4 } = require('uuid')

app.use(cors())
app.use(express.json()) // req.body

// that is routing!
// app.get('/todos', (req, res) => {
//     res.send('Hello Marta!')
// })

// get all todos
app.get('/todos/:userEmail', async (req, res) => {
    const userEmail = req.params.userEmail
    try {
        const toDos = await pool.query('SELECT * FROM todos WHERE user_email=$1', [userEmail])
        res.json(toDos.rows)
    } catch (error) {
        console.error(error)
    }
})
// create a new todo, todos is an endpoint; get request might be as well
app.post('/todos', async (req, res) => {
    const { user_email, title, progress, date } = req.body
    console.log("To sa dane z server.js: ", req.body)
    const id = uuidv4()
    // generuje nam unikalne id
    try {
        const newToDo = await pool.query(`INSERT INTO todos (id, user_email, title, progress, date) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [id, user_email, title, progress, date]
        )
        res.json(newToDo.rows)
    } catch (error) {
        console.error(error)
    }
})
// edit a todo
app.put('/todos/:id', async (req, res) => {
    const { id } = req.params
    const { user_email, title, progress, date } = req.body
    try {
        const editToDo = await pool.query('UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5',
            [user_email, title, progress, date, id]
        )
        res.json("Todo was updated successfully!")
    } catch (error) {
        console.error(error)
    }
})
// delete a todo
app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteToDo = await pool.query('DELETE FROM todos WHERE id = $1', [id])
        res.json("Todo was deleted successfully : ", deleteToDo)
    } catch (error) {
        console.error(error)
    }
})

// sign up
app.post('/signup', async (req, res) => {
    const { email, password } = req.body
    try {

    } catch (error) {
        console.error(error)
    }
})

// log in
app.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {

    } catch (error) {
        console.error(error)
    }
})
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))