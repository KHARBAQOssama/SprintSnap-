const request = require("supertest");
const cookieParser = require("cookie-parser");
const express = require("express");
const Project = require("../../../src/models/project.model");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/project", require("../../../src/routes/project.router"));

describe("Update Project", () => {
  it("should require the authentication", async () => {
    const body = {};
    const response = await request(app)
      .patch("/project/1234")
      .set("Cookie", ``)
      .send(body);
    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Forbidden");
  });

  it("should check if the project found", async () => {
    const body = {};
    Project.findById = jest.fn().mockResolvedValue(null);
    jwt.verify = jest.fn().mockReturnValue({ _id: '12345' });
    const response = await request(app)
      .patch("/project/65fb81834bb15d7b3c92b820")
      .set("Cookie", `accessToken=token`)
      .send(body);
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("project not found");
  });

  it("should verify the project owner", async () => {
    const body = {};
    Project.findById = jest.fn().mockResolvedValue({ owner: '34567' });
    jwt.verify = jest.fn().mockReturnValue({ _id: '12345' });
    const response = await request(app)
      .patch("/project/65fb81834bb15d7b3c92b820")
      .set("Cookie", `accessToken=token`)
      .send(body);
    expect(response.statusCode).toBe(403);
    expect(response.body.message).toBe("can not edit this project");
  });

  // it("should verify the project owner", async () => {
  //   const body = {};
  //   Project.findById = jest.fn().mockResolvedValue({ owner: 12345 });
  //   jwt.verify = jest.fn().mockReturnValue({ _id: 12345 });
  //   const response = await request(app)
  //     .patch("/project/65fb81834bb15d7b3c92b820")
  //     .set("Cookie", `accessToken=token`)
  //     .send(body);
  //     console.log(response);
  //   expect(response.statusCode).toBe(403);
  //   expect(response.body.message).toBe("can not edit this project");
  // });

  it("should verify that required fields are full", async () => {
    const body = {};

    Project.findById = jest.fn().mockResolvedValue({ owner: '12345' });
    jwt.verify = jest.fn().mockReturnValue({ _id: '12345' });

    const response = await request(app)
      .patch("/project/65fb81834bb15d7b3c92b820")
      .set("Cookie", `accessToken=token`)
      .send(body);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(Array.isArray(response.body.errors)).toBeTruthy();
  });
});
