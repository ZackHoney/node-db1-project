const db = require('../../data/db-config')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
 if(!req.body.name || !req.body.budget) {
  next({ status: 422, message: 'name and budget are required'})
 } else {
  next()
 }

}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const account = db('accounts').where('name', req.body.name)
  if(!account) {
    next({ status:404, message: 'name must be unique'})
  } else {
    next()
  }
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  const account = db('accounts').where('id', req.params.id)
  if(!account) {
    next({ status: 404, message: 'account not found'})
  } else {
    next()
  }
}
