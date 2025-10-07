const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()

// that is routing!
app.get('/', (req, res) => {
    res.send('Hello Marta!')
})
// get all todos
app.get('/todos', async (req, res) => {
    try {
        //await
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))