const db = require('../database/index')

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization
    const cases = await db('incidents').where('ong_id', ong_id).select('*')

    return res.json(cases)
  },
}
