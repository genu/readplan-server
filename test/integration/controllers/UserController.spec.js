var request = require("supertest");

describe("UserController", function() {
  it("should create a user", function(done) {
    request(sails.hooks.http.app)
      .post("/register")
      .send({identifier: "1@user.com", password: "pass1"})
      .expect(200)
      .end(function(err) {
        done(err);
      });
  });

  it("return an error if user already exists", function(done) {
    request(sails.hooks.http.app)
      .post("/register")
      .send({identifier: "1@user.com", password: "pass1"})
      .expect(400)
      .end(function(err) {
        done(err);
      });
  });

  describe("A loggedin user", function() {
    beforeEach(function() {});
    it("should login a user", function(done) {});

    it("should get a user's info", function() {
      // Create a user
      // Get their info
      request("/user/me");
    });
  });
});
