const express = require("express")
const router = express.Router()

router.get('/',(req,res) => {
    res.send('Hello from the API')
})

//routes.forEach((cur)=>router.use(cur.path,cur.route))
module.exports = router