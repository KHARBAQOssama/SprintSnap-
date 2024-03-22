const { faker } = require("@faker-js/faker");

const request = require("supertest");
const User = require("../../../src/models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/auth", require("../../../src/routes/auth.router"));

// jest.mock("../models");
const mockedUser = User;

jest.mock("bcryptjs");

jest.mock("jsonwebtoken");

let email = faker.internet.email();

describe("Authentication", () => {
  it("should verify that required fields are full", async () => {
    const body = {};
    const response = await request(app).post("/auth/login").send(body);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(Array.isArray(response.body.errors)).toBeTruthy();
  });

  it("should return the user not found", async () => {
    const body = {
      email,
      password: "password123",
    };
    mockedUser.findOne = jest.fn().mockResolvedValue(null);
    const response = await request(app).post("/auth/login").send(body);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("The email is incorrect!");
  });

  it("should verify that the password is incorrect", async () => {
    const body = {
      email,
      password: "password123",
    };
    mockedUser.findOne = jest.fn().mockResolvedValue({
      _id: faker.string.alphanumeric(),
      email,
      first_name: faker.person.fullName(),
      last_name: faker.person.fullName(),
      password: await bcrypt.hash("password", 10),
    });
    bcrypt.compare.mockResolvedValue(false);
    const response = await request(app).post("/auth/login").send(body);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Password is not correct");
  });

  it("should log in the user successfully", async () => {
    const body = {
      email,
      password: "password123",
    };
    const user = {
      _id: faker.string.alphanumeric(),
      email,
      first_name: faker.person.fullName(),
      last_name: faker.person.fullName(),
      password: await bcrypt.hash("password", 10),
    };

    mockedUser.findOne = jest.fn().mockResolvedValue(user);
    mockedUser.updateOne = jest.fn().mockResolvedValue(user);
    

    bcrypt.compare.mockResolvedValue(true);
    jwt.sign.mockReturnValue("mockedToken");
    const response = await request(app).post("/auth/login").send(body);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(expect.any(Object));
  });
});
