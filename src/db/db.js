import { BdFs } from "../fs/fs.js";
import { BaseSchema } from "../schema/baseSchema.js";

export class MockDb {
  collection;
  schema;

  constructor(name) {
    this.collection = new BdFs(`data/${name}`);
    this.schema = new BaseSchema();
  }

  /* static createCollection(name) {
    return new BdFs(`data/${name}`);
  } */
}
