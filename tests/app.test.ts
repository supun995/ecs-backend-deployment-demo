import request from "supertest";
import app from "../src/app";

describe("API Endpoint Tests", () => {
  it("should respond to the ping on GET /api/ping", async () => {
    const res = await request(app).get("/api/ping");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Ping Success" });
  });
});
