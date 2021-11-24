import { app } from "./app";

const logo = `
 ██████  ██   ██  █████  ██    ██ ██████  ███████ ██    ██ 
██    ██ ██  ██  ██   ██  ██  ██  ██   ██ ██      ██    ██ 
██    ██ █████   ███████   ████   ██   ██ █████   ██    ██ 
██    ██ ██  ██  ██   ██    ██    ██   ██ ██       ██  ██  
 ██████  ██   ██ ██   ██    ██    ██████  ███████   ████   
powered by: Jonatha Gomes
`;

app.listen(process.env.PORT || 3333, () => {
  console.log(logo);
  if (process.env.NODE_ENV == "dev") {
    console.log("Server is running in development mode");
  } else {
    console.log("Server is running in production mode");
  }
});
