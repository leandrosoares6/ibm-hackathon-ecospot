const Car = require('./Car')

module.exports = {
  async index(req, res){
    const car = await Car.findAll()

        return res.json(car)
  },

  async Storage(req, res){
    const { make, model, validate } = req.body

    const car = await Car.create({ make, model, validate })

    return res.json(car)
  }
}