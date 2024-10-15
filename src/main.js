import { app } from "./server.js";

console.log("Starting server");

app.listen(3001, () => {
  console.log("working");
});
