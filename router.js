const express = require('express')
const router = express.Router();
// require('express-group-routes')

router.group("/api/v1", (router) => {
    router.get("/contacts", (req, res)=>{
        
    })
})

module.exports = router