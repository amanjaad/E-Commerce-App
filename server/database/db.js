import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.yrqzd.mongodb.net:27017,ecommerceweb-shard-00-01.yrqzd.mongodb.net:27017,ecommerceweb-shard-00-02.yrqzd.mongodb.net:27017/ECOMMERCEFCLONE?ssl=true&replicaSet=atlas-621f9o-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database Is Connected Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
export default Connection;
