const bcrypt = require('bcryptjs')


const Helper = {
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  },

  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword)
  },

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  
}


module.exports = Helper