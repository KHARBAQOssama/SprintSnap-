const { faker } = require("@faker-js/faker");

const request = require("supertest");
const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const teamControllerInstance = require("../../../src/controllers/team.controller");
const ProjectService = require("../../../src/services/project.service");

const pService = new ProjectService();
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/project", require("../../../src/routes/project.router"));

describe("Create Project", () => {
  it("should require the authentication", async () => {
    const body = {};
    const response = await request(app)
      .post("/project")
      .set("Cookie", ``)
      .send(body);
    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Forbidden");
  });

  it("should verify that required fields are full", async () => {
    const body = {};

    jwt.verify = jest.fn().mockReturnValue({ _id: "65f8d2e837ef8171ce86a78d" });
    const response = await request(app)
      .post("/project")
      .set("Cookie", `accessToken=token`)
      .send(body);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(Array.isArray(response.body.errors)).toBeTruthy();
  });

  it("should create the project", async () => {
    const body = {
      name: "project",
      description: "project Description",
      task_status: ["to do", "in progress", "done"],
      cover: "cover",
      icon: "icon",
    };

    jwt.verify = jest.fn().mockReturnValue({ _id: '123' });
    teamControllerInstance.create = jest.fn().mockResolvedValue({});
    pService.create = jest.fn().mockResolvedValue({ _id: '123456' });

    const response = await request(app)
      .post("/project")
      .set("Cookie", `accessToken=token`)
      .send(body);
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("project created successfully");
  });
});
