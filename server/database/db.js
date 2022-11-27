import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.wnzub9z.mongodb.net/mernStack?retryWrites=true&w=majority`;
  try {
    mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
   console.log("Database Connected ")
  } catch (error) {
    console.log("error while connecting", error);
  }
};

export default Connection
