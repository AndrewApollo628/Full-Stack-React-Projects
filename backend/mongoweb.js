import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'
const dbName = 'ch2'
const client = new MongoClient(url)

try {
  await client.connect()
  console.log('Sucessfully Connected to MongoDB')
} catch (error) {
  console.error('Error Connecting to MongoDB', error)
}

const server = createServer(async (req, res) => {
  const db = client.db(dbName)
  const users = db.collection('users')
  const userList = await users.find().toArray()
  console.log('userList:', userList)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(userList))
})

const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
