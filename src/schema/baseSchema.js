export class BaseSchema {
  id;

  constructor() {
    this.id = 0;
  }

  createInstance(data) {
    if (!data.name) throw new Error("Schema requred name field");
    if (!data.email) throw new Error("Schema requred email field");

    this.id++;
    return JSON.stringify({
      name: data.name,
      email: data.email,
      createdAt: Date.now(),
      id: this.id,
    });
  }

  /* toWritableResult() {
    const result = {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
    };
    return JSON.stringify(result);
  } */
}
