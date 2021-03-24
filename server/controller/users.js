const getUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Get Users")
}

const getUserId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Get User ID")
}

const creatUser = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Creat User")
}

const updateUserId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Update User ID")
}

const deleteUserId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Delete User ID")
}

module.exports = { getUsers, getUserId, creatUser, updateUserId, deleteUserId }