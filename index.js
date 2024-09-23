const express = require('express')
const app = express()
const port = 3000



// how to use public folder(in public file)
app.use(express.static('public'));



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res)=>{
    res.send("about us!!");
})

app.get('/blog', (req, res)=>{
    res.send("Hello blogs !!");
})

app.get('/blog/:slug', (req, res)=>{
    // fetch logic {slug} from the db

    console.log(req.params);
    console.log(req.query);
    res.send(`this is blog of ${req.params.slug}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
