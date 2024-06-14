const mongoose=require('mongoose')

const authSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    // email: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  { timestamps: true },
  {
    versionKey: false,
  }
);

const authModel=new mongoose.model("auth",authSchema)
module.exports=authModel;