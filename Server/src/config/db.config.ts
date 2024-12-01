import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const dbHost = process.env.DB_HOST

const connectionString = `mongodb+srv://${username}:${password}@${dbHost}/${dbName}?retryWrites=true&w=majority`

const options = {
    autoIndex: false,
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000,
    family: 4 
  };

export const db = mongoose.connect(connectionString, options)
.then(res => {
    if(res){
        console.log(`Database connection succeffully to ${dbName}`)
    }
    
}).catch(err => {
    console.log(err)
})