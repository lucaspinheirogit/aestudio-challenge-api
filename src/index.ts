import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import controller from '@libstack/router'

require('./modules')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(controller.router)

app.listen(5000, () => console.log('Server running, HTTP=5000'))
