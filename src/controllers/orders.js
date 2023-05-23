const { Contact } = require('../../models/contact')
const { NotFound } = require('http-errors')

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await Contact.findById(contactId)
    if (!result) {
      throw new NotFound(`Contact with id=${contactId} not found`)
    }
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = getById

const getAll = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}, '-createdAt -updatedAt')
    res.json(contacts)
  } catch (error) {
    next(error)
  }
}

module.exports = { getAll, getById }
