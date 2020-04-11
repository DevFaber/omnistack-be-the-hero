const dbConnection = require('../database/index')

module.exports = {
  async store(req, res) {
    const { id } = req.body

    const ong = await dbConnection('ongs')
      .where('id', id)
      .select('name')
      .first()

    if (!ong) {
      return res.status(400).json({ error: 'ONG não encontrada' })
    }

    return res.json(ong)
  },
}
