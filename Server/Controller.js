require('dotenv').config()

module.exports = {

  formData: (req, res) => {
    console.log('backend hit!')
    const db = req.app.get('db')
    console.log(req.body)
    res.status(200).send(req.body)
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }
  
}