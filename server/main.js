const express =require('express')
const app = express()

app.use(express.json())

app.get()

app.post()

app.put()

app.patch()

app.delete()


const port = process.env.port || 3030
app.listen(port, () => console.log(`Server listening on port ${port} ...`))