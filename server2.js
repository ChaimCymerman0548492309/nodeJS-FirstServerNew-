import express from 'express';
import usersRouter from './usersRouter';
import people from './data'

const app = express();

app.use(express.json());

const port = 3000;


app.use('/api/users', usersRouter)





app.listen(port, () => {
    console.log(`Server is up and running on port:${people}`);
});

console.log(people)










const people = [
    { id: uuidv4(), email: 'john@example.com', password: "1111" },
    { id: uuidv4(), email: 'jane@example.com', password: "2222" },
    { id: uuidv4(), email: 'bob@example.com', password: "3333" }
  ];
  
  export {people}
  console.log(people[0])
  


