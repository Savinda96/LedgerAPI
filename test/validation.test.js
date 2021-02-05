const expect = require("chai").expect;
const validate = require("../helpers/validationparm");

//Testing ledger service module

describe("validate.js tests", () => {
  describe(" Testing invalid amount", () => {
    it("Invalid amount works", () => {
      ans = {
        start: "2020-03-31T00:00:00.000Z",
        end: "2020-06-29T00:00:00.000Z",
        amount: "5s5",
        fq: "MONTHLY",
        timezone: "Indian/Maldives",
      };
      expect(
        validate.validationParams.bind(
          validate,
          ans.start,
          ans.end,
          ans.amount,
          ans.timezone,
          ans.fq
        )
      ).to.throw("Invalid amount is given");
    });
  });

  describe(" Testing invalid timezone", () => {
    it("Invalid timezone works", () => {
      ans = {
        start: "2020-03-31T00:00:00.000Z",
        end: "2020-06-29T00:00:00.000Z",
        amount: "555",
        fq: "MONTHLY",
        timezone: "ff/ll",
      };
      expect(
        validate.validationParams.bind(
          validate,
          ans.start,
          ans.end,
          ans.amount,
          ans.timezone,
          ans.fq
        )
      ).to.throw("Invalid timezone");
    });
  });

  describe(" Testing start date", () => {
    it("Invalid start date works", () => {
      ans = {
        start: "2020-03-35T00:00:00.000Z",
        end: "2020-06-29T00:00:00.000Z",
        amount: "555",
        fq: "MONTHLY",
        timezone: "Indian/Maldives",
      };
      expect(
        validate.validationParams.bind(
          validate,
          ans.start,
          ans.end,
          ans.amount,
          ans.timezone,
          ans.fq
        )
      ).to.throw("Start date is invalid");
    });
  });

  describe(" Testing end date", () => {
    it("Invalid end date works", () => {
      ans = {
        start: "2020-03-35T00:00:00.000Z",
        end: "2020-06-45T00:00:00.000Z",
        amount: "555",
        fq: "MONTHLY",
        timezone: "Indian/Maldives",
      };
      expect(
        validate.validationParams.bind(
          validate,
          ans.start,
          ans.end,
          ans.amount,
          ans.timezone,
          ans.fq
        )
      ).to.throw("Start date is invalid");
    });
  });

  describe(" Testing placement of days", () => {
    it("Invalid start and end date works", () => {
      ans = {
        start: "2020-03-31T00:00:00.000Z",
        end: "2020-02-02T00:00:00.000Z",
        amount: "555",
        fq: "MONTHLY",
        timezone: "Indian/Maldives",
      };
      expect(
        validate.validationParams.bind(
          validate,
          ans.start,
          ans.end,
          ans.amount,
          ans.timezone,
          ans.fq
        )
      ).to.throw("End date is before start date");
    });
  });

  describe(" Testing frequency", () => {
    it("Testing frequency works", () => {
      ans = {
        start: "2020-03-31T00:00:00.000Z",
        end: "2020-06-02T00:00:00.000Z",
        amount: "555",
        fq: "MONTHsadLY",
        timezone: "Indian/Maldives",
      };
      expect(
        validate.validationParams.bind(
          validate,
          ans.start,
          ans.end,
          ans.amount,
          ans.timezone,
          ans.fq
        )
      ).to.throw("Invalid Frequency");
    });
  });
});
