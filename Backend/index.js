import { app } from "./app.js";
import mongoose from "mongoose";

const port = process.env.DEVLOPMENT_PORT || "3000";
const enviroment = process.env.BACKEND_ENV || "DEVLOPMENT";
const database_url = process.env.DATABASE_URL;

const connection = async () => {
  try {
    await mongoose.connect(database_url, {
      serverSelectionTimeoutMS: 5000,
      retryWrites: true,
      maxPoolSize: 10,
    });
    console.log("✅connected to DataBase");
    return true;
  } catch (error) {
    console.log("failed to connect: error:- \n", error);
    process.exit(1);

    setTimeout(() => {
      connection();
    }, 5000);

    return false;
  }
};

mongoose.connection.on("connected", () => {
  console.log("connected the database");
});

mongoose.connection.on("disconnected", () => {
  console.log("disconnected the database");
});

mongoose.connection.on("reconnected", () => {
  console.log("reconnected the database");
});

mongoose.connection.on("error", (error) => {
  console.log("error the database:- \n", error);
});

const GentalShutDown = async () => {
  try {
    mongoose.connection.close(true);
    console.log("connection Closed");
    ServerConnection.close(() => {
      process.exit(1);
    });
  } catch (error) {
    console.log("Error:-\n", error);
    process.exit(1);
  }
};


process.on('SIGTERM',  GentalShutDown);
process.on('SIGINT',  GentalShutDown);


let Counter = 0;

const ServerConnection = async () => {
  try {
    const DB_status = await connection();
    if (!DB_status) console.log("connection error");
    const server = app.listen(port, () => {
      console.log("Server is ✅connected , har har mahadev");
    });

    return server;
  } catch (error) {
    console.log("❌Error in connection of server\n", error);
    process.exit(1);
    while (Counter < 5) {
      setTimeout(() => {
        ServerConnection();
        Counter++;
      }, 5000);
    }
  }

  global.Server = await ServerConnection();
};

await ServerConnection();

export { app };
