import mongoose from "mongoose";

const setupDatabase = () => {
  mongoose.connect(process.env.MONGO_CONNECTION_URL || "");

  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });

  mongoose.connection.on("error", (err) => {
    console.log("An database error as occurred");
    console.log(err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      process.exit(0);
    });
  });
};

export default setupDatabase;
