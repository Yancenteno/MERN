const express = require('express')
const app = express()
const port = 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const { faker } = require('@faker-js/faker');

const newUser = []
const newCompany = []

const createUser = () => {
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        userId: faker.string.uuid()
    }
    return user
}

const createCompany = () => {
    const company = {
        companyId: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return company
}



app.get("/api/user/company", (req, res) => {
    const addUser = createUser();
    const addCompany = createCompany();
    res.json({ addUser, addCompany });
})


app.get("/api/users/new", (req, res) => {
    const addUser = createUser();
    newUser.push(addUser);
    res.json(newUser);
});


app.get("/api/companies/new", (req, res) => {
    const addCompany = createCompany();
    newCompany.push(addCompany);
    res.json(newCompany)
})








app.listen(port, () => console.log(`>>SERVER ONLINE`))