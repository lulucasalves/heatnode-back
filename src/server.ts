import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes'

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

const clientId = process.env.GITHUB_CLIENT_ID

app.get('/github', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}`)
})

app.get('/signin/callback', (req, res) => {
  const { code } = req.query

  console.log(code)
})

const port = 5000

app.listen(port, () => console.log(`Server is running on port ${port}!`))
