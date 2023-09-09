const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

const users = [
    {
        name: "rod",
        age: 28,
    },
]

// UPDATE - listar usuarios para o front end
app.get('/usuarios', (request, response) => {
    response.json(users)
})

// CREATE  - gravar informacao no servidor
app.post('/usuarios', (request, response) => {
    console.log(request.body)

    const newUser = request.body

    users.push(newUser)

    response.status(201).json(newUser)
})

app.listen(3333,  console.log('server online.'))