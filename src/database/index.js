import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tiagzo:free@cluster0.b5pvpka.mongodb.net/dashboard?retryWrites=true&w=majority"
    );
    console.log("Connecté à mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
