const db = require('../database/index')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query

    const [counter] = await db('incidents').count()

    const cases = await db('incidents')
      .join('ongs', 'ong_id', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ])

    res.header('X-Total-Count', counter.count)

    return res.json(cases)
  },

  async store(req, res) {
    const { title, description, value } = req.body
    const ong_id = req.headers.authorization

    await db('incidents').insert({
      title,
      description,
      value,
      ong_id,
    })

    return res.json({ title, description, value, ong_id })
  },

  async update(req, res) {
    const { id } = req.params
    const ong_id = req.headers.authorization
    const { title, description, value } = req.body

    const ch_incidents = await db('incidents')
      .where('id', id)
      .select('ong_id')
      .first()

    if (!ch_incidents.ong_id || ch_incidents.ong_id !== ong_id) {
      return res.status(400).json({ error: `Falha ao localizar o caso${id}` })
    }

    await db('incidents').where('id', id).update({
      title,
      description,
      value,
    })

    return res.json({ title, description, value })
  },
  async delete(req, res) {
    const ong_id = req.headers.authorization
    const { id } = req.params

    const incident = await db('incidents')
      .where('id', id)
      .select('ong_id')
      .first()

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ err: 'Não autorizado!' })
    }

    await db('incidents').where('id', id).delete()
    return res.json({ message: 'Registro apagado com sucesso!' })
  },
}
