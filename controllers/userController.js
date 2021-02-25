const { isValidObjectId, Mongoose } = require('mongoose');
const User = require('./../models/userModels');
var mongo = require('mongodb');
var ObjectID = mongo.ObjectID;


exports.getAllUser = async (req, res) =>{
    try{
        // let query = User.find();
        // const users = await query; 
       

        res.status(200).json({
        status: 'success',
        result: "hallo world",
        // data: {
        //     users
        // }
    });
    } catch(err){
        res.status(400).json({
        status: 'fail',
        message: err
    });
    }
}


exports.createUser = async (req, res) => {
    try{
        var body = req.body;
        console.log(body);
        var newUser = await User.create(body);
        res.status(201).json({
            status: 'created',
            newUser: newUser
        })
    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}


exports.getOneUser = async (req, res) => {
    try{
        let user_id = req.params.id;
        var user = await User.findById({_id: new ObjectID(user_id)});
        res.status(200).json({
            status: 'success',
            userData: user
        }) 
    } catch(err){
        res.status(400).json({
            status : 'fail',
            error : err
        })
    }
}


exports.updateUser = async (req, res) => {
    try{
        let user_id = req.params.id;
        var user = await User.findByIdAndUpdate({_id: new ObjectID(user_id)}, req.body, {
              new: true,
              runValidators: true
          })
        res.status(200).json({
            status: 'success',
            updatedUser: user
        })  
   
    } catch(err){
        res.status(400).json({
            status : 'fail',
            error : err
        })
       }
}


exports.deleteUser = async (req, res) => {
    try{
        let user_id = req.params.id;
        var user = await User.deleteOne({_id: new ObjectID(user_id)});
        res.status(200).json({
            status: 'user deleted'
        }) 
    } catch(err){
        res.status(400).json({
            status : 'fail',
            error : err
        })
    }
}