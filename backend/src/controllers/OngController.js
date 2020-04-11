const crypto = require('crypto')
const db = require('../database/index')

module.exports = {
  async index(req, res) {
    const ongs = await db('ongs').select('*')

    return res.json(ongs)
  },

  async store(req, res) {
    const id = crypto.randomBytes(4).toString('HEX')

    const { name, email, whatsapp, city, uf } = req.body

    await db('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return res.json({ id })
  },
}
