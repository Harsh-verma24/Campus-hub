import dotenv from 'dotenv'
import ConnectDB from './db/db.js'
dotenv.config({
    path:"./.env"
})
import app from './app.js'


ConnectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server running at port : ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log(`Mongo db connection failed : ${err}`)
})