const { faker } = require("@faker-js/faker");
const request = require("supertest");
const express = require("express");
const cookieParser = require("cookie-parser");
const User = require("../../../src/models/user.model");
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/auth", require("../../../src/routes/auth.router"));

let email = faker.internet.email();
let first_name = faker.person.fullName();
let last_name = faker.person.fullName();

// const cookies = {
//   accessToken: "the-access-token-value",
//   refreshToken: "the-refresh-token-value",
// };

describe("register function", () => {
  it("should return a 400 response if any required field is missing", async () => {
    const body = {};
    const response = await request(app).post("/auth/register").send(body);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(Array.isArray(response.body.errors)).toBeTruthy();
  });

  it("should return a 400 response if the passwords are not the same", async () => {
    const body = {
      email,
      first_name,
      last_name,
      password: "password123",
      password_confirmation: "password456",
    };
    const response = await request(app).post("/auth/register").send(body);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(Array.isArray(response.body.errors)).toBeTruthy();
  });

  it("should return a 409 response if Email already token", async () => {
    User.findOne = jest.fn().mockResolvedValue({ email: true });
    const body = {
      email,
      first_name,
      last_name,
      password: "password123",
      password_confirmation: "password123",
    };
    const response = await request(app).post("/auth/register").send(body);
    expect(response.statusCode).toBe(409);
    expect(response.body).toEqual({ message: "This email is already taken!" });
  });
});
