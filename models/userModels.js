import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'name is required']
    },
    email:{
        type: String,
        required: [true, 'email is required'],
    },
    password:{
        type: String,
        required: [true, 'password is required'],
        minLength:[6, 'Length is greater then 6 character ']
    },
    Address:{
        type: String,
        require:[true,'Address is Required']
    },
     
    city:{
        type: String,
        require:[true,'city is Required']
    },

    country:{
        type: String,
        require:[true,'country is Required']
    },
    profilepic:{
        type: String,
    },
    phone:{
        type: Number,
        require:[true , 'phone number is required']
    }

},{timestamp:true});

//hash function
userSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password,10);
});

userSchema.methods.comparePassword = async function (plainpassword){
    return await bcrypt.compare(plainpassword,this.password);
};
 


export const userModels= mongoose.model("Users", userSchema);
export default userModels; 