const models = require("../models/user-models");

module.exports = {

/**
 * 회원가입
 */
createUser: async (email:string) =>{
  console.log("회원가입 서비스")
  const result = await models.userCreate(email);
  return result;
},

};
