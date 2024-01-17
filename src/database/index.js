import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connecté à mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
