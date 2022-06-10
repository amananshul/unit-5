const{Schema,model}=require('mongoose')


const UserSchema= new Schema({
    name:{ type:'string',min:3},
    username:"string",
    password:"string",
    email: 'string',
    password: 'string',
    mobile:'string',
    country:'string',
    gender:{
        type:'string',
        enum: ['male','female',"trans"]
    },

});
const User=model('User',UserSchema)
module.exports =User