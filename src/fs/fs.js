import fs from "node:fs/promises";

export class BdFs {
  #filename;

  constructor(filename) {
    this.#filename = filename;
  }

  async write(data) {
    try {
      await fs.writeFile(this.#filename, data, { flag: "a" });
    } catch (err) {
      console.error(err);
    }
  }

  async read() {}
  async get() {}
}
