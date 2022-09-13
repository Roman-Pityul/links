const config = require('config')
const shortid = require('shortid')
const Link = require('../models/Link')

class linkController {
  async generate(req, res) {
    try {

      const baseUrl = config.get('baseUrl')
      const { from } = req.body

      const code = shortid.generate()

      const existing = await Link.findOne({ from: from, owner: req.user.userId })

      if (existing) {
        return res.json({ link: existing })
      }

      const to = baseUrl + '/api/t/' + code

      const link = new Link({
        code, to, from, owner: req.user.userId
      })

      await link.save()

      res.status(201).json({ link })
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  }

  async getLinks(req, res) {
    try {
      const links = await Link.find({ owner: req.user.userId })
      res.json(links)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  }

  async getOneLink(req, res) {
    try {
      const link = await Link.findById(req.params.id)
      res.json(link)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })

    }
  }
}

module.exports = new linkController()