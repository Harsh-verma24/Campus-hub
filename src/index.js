import dotenv from 'dotenv'
import ConnectDB from './db/db.js'
dotenv.config({
    path:"./.env"
})


ConnectDB()