const config = require("../config");
console.log("config",config)
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const url=config.API_PREFIX+"greeting"

router.get('/', (req, res) => {
    Promise.all([
        fetch(url).then(function (response) { return response.json() })
    ]).then(response=> {
        console.log("response::::", response)
        res.send({
            content:response[0].content
        });
    }).catch(err=>{
        console.log("error::::", err)
    })


    // res.send({
    //     content:"Great! Application is successfully deployed, ReactJS!"
            
    // });
});

module.exports = router;
