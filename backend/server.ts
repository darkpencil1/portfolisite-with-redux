const express = require('express')
const path = require('path')
const app = express()
const client = require("../db")
const db = client.db()
const ObjectID = require('mongodb').ObjectId
var cors = require('cors')



app.use(cors());
app.use(express.json())

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('dist'))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../dist", "index.html"))
       
    })
}
  
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"))
   
})
app.post('/api', async (req, res)=>{
    try{
        const {
            file,
            body: {name}
        } = req
        
        await db.collection('customers').insertOne({"_id": new ObjectID(), ...req.body})
        res.status(200).json({success:true, msg: 'Data sent to database succesfully.'})
    }catch(err){
        res.status(400).json({success: false, msg: `Service currently unavailable, err: ${err}`})
    }
})


module.exports = app