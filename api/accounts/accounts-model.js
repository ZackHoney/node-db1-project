const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  const result = db('accounts')
  return result
}

async function getById(id) {
  // DO YOUR MAGIC
  const result = await db('accounts').where('id', id).first();
  return result;
}

async function create(account) {
  // DO YOUR MAGIC
  const [id] = await db('accounts').insert(account)
  const result = getById(id)
  return result;
}

async function updateById(id, account) {
  // DO YOUR MAGIC
  await db('accounts').update(account).where('id', id)
  const result = getById(id)
  return result;
}

async function deleteById(id) {
  // DO YOUR MAGIC
  const toBeDeleted = getById(id)
  await db('accounts').delete().where('id', id)
  return toBeDeleted
}



module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
