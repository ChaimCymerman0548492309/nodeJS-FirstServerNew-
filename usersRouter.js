// import express from 'express';
// import Joi from 'joi';
// const router = express.Router();



// const validateUser = (user) => {
//   const schema = Joi.object({
//     email: Joi.string().email().required(),
//     password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/).required()
//   });

//   return schema.validate(user);
// };


// app.post('/register', (req, res) => {
//   const { error } = validateUser(req.body);

//   if (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }

  

//   res.status(201).json({ message: 'User registered successfully.' });
// });



// export default router;


