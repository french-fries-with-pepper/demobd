import express from "express";
import { MockDb } from "./db/db.js";
import { BaseSchema } from "./schema/baseSchema.js";

export const app = express();
const collection1 = new MockDb("users_1");
const collection2 = new MockDb("users_2");

app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage

app.post("/user1", (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const entity = collection1.schema.createInstance(body);
    collection1.collection.write(entity);
  } catch (err) {
    console.error(err);
  }
  res.send("hello world");
});

app.post("/user2", (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const entity = collection2.schema.createInstance(body);
    collection2.collection.write(entity);
  } catch (err) {
    console.error(err);
  }
  res.send("hello world");
});
