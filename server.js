const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const app = express();

//dotenv.config({ path : './config.env'});


// connect Mongodb Compass

mongoose.connect('mongodb+srv://vivek:vivek123@cluster0-a1rol.mongodb.net/terasol?retryWrites=true&w=majority', {
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


app.listen(process.env.PORT || 4567, () =>{
      console.log("App is running on Port 3000")
});