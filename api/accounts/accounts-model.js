const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  const result = db('accounts')
  return result
}

const getById = id => {
  // DO YOUR MAGIC
  const result = db('accounts').where('id', id).first();
  return result;
}

const create = account => {
  // DO YOUR MAGIC
  const [id] = db('accounts').insert(account)
  const result = getById(id)
  return result;
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  db('accounts').update(account).where('id', id)
  const result = getById(id)
  return result;
}

const deleteById = id => {
  // DO YOUR MAGIC
  const toBeDeleted = getById(id)
  db('accounts').delete().where('id', id)
  return toBeDeleted
}



module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
