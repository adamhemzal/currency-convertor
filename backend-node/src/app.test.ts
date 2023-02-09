import request from 'supertest';
import app from "./app";


describe("GET /", () => {
  test("should respond with 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  test("should respond with content-type JSON", async () => {
    const response = await request(app).get("/");
    expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
  });

  test("should respond with the data containing properties data & rates", async () => {
    const response = await request(app).get("/");
    expect(response.body).toHaveProperty("date");
    expect(response.body).toHaveProperty("rates");
    expect(response.body.date).toBeDefined();
    expect(response.body.rates).toBeDefined();
  });
});