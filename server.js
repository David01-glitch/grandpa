import express from 'express'
import compression from 'compression'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

app.use(compression())
app.use(express.static(path.join(__dirname, 'dist'), { maxAge: '7d' }))

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Grandpa's Workshop running on port ${PORT}`)
})
