// Import Faker and Express (Installed via terminal)
const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

// Class for User
class User {
  constructor() {
      this.id = faker.id;
      this.firstName = faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.phoneNumber = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
  } 
}
console.log(new User());

// Class for Company
class Company {
  constructor() {
      this.id = faker.id;
      this.companyName = faker.name.companyName
      this.address = {
          street: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          zipCode: faker.address.zipCode(),
          country: faker.address.country(),
      }
  }
}
console.log(new Company());

// Access POST data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Route to return new User
app.get('/api/users/new', (req,res) =>{
  var user = new User();
  res.json({
    results: user
  });
})

// Route to return new Company
app.get('/api/companies/new', (req,res) =>{
  var company = new Company();
  res.json({
    results: company
  });
})

// Route to return new User AND new Company
app.get('/api/user/company', (req, res) =>{
  var user = new User();
  var company = new Company();
  res.json({
    results: {
      user: user,
      company: company,
    }
  })
})

// Runs the server on specified port
app.listen( port, () => console.log(`Listening on port: ${port}`) );