const express = require('express');
const router = express.Router();
const Account = require('./accounts-model')
const { checkAccountId, checkAccountNameUnique, checkAccountPayload} = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Account.getAll()
    res.json(data)
  } catch(err) {
    next({ status: 422, message: 'something wrong happened in the get request!'})
  }
})

router.get('/:id', 
checkAccountId, 
async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Account.getById(req.params.id)
    res.json(data)
  } catch(err) {
    next(err)
  }
})

router.post('/', 
checkAccountPayload, 
checkAccountNameUnique, 
async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Account.create(req.body)
    res.json(data)
  }catch(err) {
    next(err)
  }
})

router.put('/:id', 
checkAccountId, 
checkAccountPayload, 
checkAccountNameUnique, 
async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Account.updateById(req.params.id, req.body)
    res.json(data)
  }catch(err) {
    next(err)
  }
});

router.delete('/:id',
 checkAccountId,
  async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = Account.deleteById(req.params.id)
    res.json(data)
  }catch(err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
