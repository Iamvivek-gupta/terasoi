const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const app = express();

dotenv.config({ path : './config.env'});


// connect Mongodb Compass

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology : true
}).then(con =>{
    //console.log(con.connections);
    console.log("databas connected")
}).catch(error =>{
    console.log(error);
});


// 1) MIDDLEWARE
app.use(morgan('dev'));

app.use(express.json());

app.use((req,res,next) =>{
    console.log('hallo from Middleware!!!!');
    next();
})



// 2) ROUTE HANDLERS


// 3) ROUTES
app.use('/api/v1/users', userRouter);

// 4) START SERVERS
 const port = 4567;

app.listen(port, () =>{
      console.log(`App is running on Port ${port}...`)
});