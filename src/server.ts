import { app } from "./app";

app.listen(process.env.PORT || 3333, () => {
  if (process.env.NODE_ENV == "dev") {
    console.log("Server is running in development mode");
  } else {
    console.log("Server is running in production mode");
  }
});
