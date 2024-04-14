const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb')
// require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
const uri = process.env.MONGODB_URI
const socksOptions = {
  proxyHost: '127.0.0.1',
  proxyPort: 1080
}

const client = new MongoClient(uri, socksOptions, {
  serverApi: ServerApiVersion.v1,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const dbName = 'hansproject'
const collectionName = 'hansdata'

app.get('/search/:character', async (req, res) => {
  const characterInput = req.params.character

  try {
    await client.connect()
    const database = client.db(dbName)
    const collection = database.collection(collectionName)

    const result = await collection.findOne({ character: characterInput })
    if (result) {
      res.json(result)
    } else {
      res.status(404).send('Character not found')
    }
  } catch (error) {
    console.error('An error occurred:', error)
    res.status(500).send('Error connecting to the database')
  } finally {
    await client.close()
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
