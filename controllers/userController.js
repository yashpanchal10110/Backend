import userModels from '../models/userModels.js'
export const registerController =async (req, res) => {
    try {
        const { name, email, password, Address, city, country, phone } = req.body;
        if (!name || !email || !password || !Address || !city || !country || !phone) {
            return res.status(500).send({
                success: false,
                message: "Please Provide all the fileds",
            });
        }

        const user = await userModels.create({
            name, email, password, Address, city, country, phone
        });
        res.status(201).send({
            success: true,
            message: "User Created Successfully",
            user,
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            msessage: "error in register api",
            error,
        });
    }
};



//login

export const loginController = async (req,res) => {
    try {
        const {email,password}=req.body

        if(!email || !password){
            return res.status(500).send({
                success:false,
                message: "please add email or pasword"
            })
        }

        //check user
        const user = await userModels.findOne({email})
        //user validation 
        if (!user){
            res.status(404).send({
              success:false,
              message: "user not found"

            })
        }

        //check password
        const isMatch = await user.comparePassword(password)
        //vaidation

        if(!isMatch){
            return res.status(500).send({
                success:false,
                message:"invalid credentials"
            })
        }
        res.status(200).send({
            success: true,
            message: "login successfull",
            user,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: "false",
            message: "error in login api",
            error
        })
    }
};

