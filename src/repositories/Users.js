class Users {
  constructor(users = [{email : 'daniel@stationfive.com' , password : 'abc123'}]) {
    this.users = users;
  }

  findByEmailAndPassword(email,password) {
    return this.users.find(x=> x.email == email && x.password == password);
  }
}

module.exports = Users;