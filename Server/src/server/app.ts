import express from 'express'
import { router } from '../routes/extractor.route'
import { db } from '../config/db.config'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()

const port = process.env.PORT || '3000'

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/extracted-datas', router)

db.then(() => {
    app.listen(port, () => console.log(`Server is listening on port ${port}`))
})