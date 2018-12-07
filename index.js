const express = require('express')
const app = express()
const port = 3000
const jsonwebtoken = require('jsonwebtoken')
const jwt = require('express-jwt')

require('dotenv').config()

const secretKey = process.env.SECRET_KEY

app.get('/categories', (req, res)=> {
    res.send([
        {
            id: 1,
            title: 'sport'
        },
        {
            id: 2,
            title: 'lifestyle'
        },
    ])
})


app.get(
    '/products', 
    jwt({secret: secretKey}),
    (req, res)=>{
        res.send('bisa diakses')
    }
)

app.post('/login', (req, res)=> {
    //get from FORM
    const email = "jono@gmail.com"
    const password = "something"

    //validate the password from table users
    
    jsonwebtoken.sign({email: "jono@gmail.com"}, secretKey, (err, token)=>{
        res.send({
            user: {
                email: email
            },
            token: token 
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})