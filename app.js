const express = require('express')
const app = express()
const port = 3000

// handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use static
app.use(express.static('public'));

// get
app.get('/', (req, res) => {
  res.render('index')
})
//params
app.get('/:language', (req, res) => {
  res.render(`${req.params.language}`)
})

//listen
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})

