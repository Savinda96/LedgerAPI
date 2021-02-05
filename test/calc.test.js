const expect = require("chai").expect;
const service = require("../ledger.service");
const daymal = require("date-fns");

//Testing the calculater module

describe("service.js tests", () => {
  describe(" weekly frequency check", () => {
    it("weekly frequency works", async () => {
      ans = {
        start: "2020-03-02T00:00:00.000Z",
        end: "2020-03-29T00:00:00.000Z",
        amount: "555",
        fq: "WEEKLY",
        timezone: "Indian/Maldives",
      };
      actualResults = [
        {
          start: daymal.parseISO("2020-03-02T00:30:00.000Z"),
          end: daymal.parseISO("2020-03-09T00:30:00.000Z"),
          amount: "555",
        },
        {
          start: daymal.parseISO("2020-03-09T00:30:00.000Z"),
          end: daymal.parseISO("2020-03-16T00:30:00.000Z"),
          amount: "555",
        },
        {
          start: daymal.parseISO("2020-03-16T00:30:00.000Z"),
          end: daymal.parseISO("2020-03-23T00:30:00.000Z"),
          amount: "555",
        },
        {
          start: daymal.parseISO("2020-03-23T00:30:00.000Z"),
          end: daymal.parseISO("2020-03-29T00:30:00.000Z"),
          amount: "475.71",
        },
      ];
      const result = await service.ledgerCalculator(ans);

      expect(result).to.eql(actualResults);
    });
  });

  describe(" Monthly - end frequency check", () => {
    it("monthly - end frequency works", async () => {
      ans = {
        start: "2020-03-31T00:00:00.000Z",
        end: "2020-06-29T00:00:00.000Z",
        amount: "555",
        fq: "MONTHLY",
        timezone: "Indian/Maldives",
      };
      actualResults = [
        {
          start: daymal.parseISO("2020-03-31T00:30:00.000Z"),
          end: daymal.parseISO("2020-04-30T00:30:00.000Z"),
          amount: "2411.61",
        },
        {
          start: daymal.parseISO("2020-04-30T00:30:00.000Z"),
          end: daymal.parseISO("2020-05-30T00:30:00.000Z"),
          amount: "2411.61",
        },
        {
          start: daymal.parseISO("2020-05-30T00:30:00.000Z"),
          end: daymal.parseISO("2020-06-29T00:30:00.000Z"),
          amount: "2378.57",
        },
      ];
      const result = await service.ledgerCalculator(ans);

      expect(result).to.eql(actualResults);
    });
  });

  describe(" Monthly - mid frequency check", () => {
    it("monthly - mid frequency works", async () => {
      ans = {
        start: "2020-04-04T00:00:00.000Z",
        end: "2020-06-29T00:00:00.000Z",
        amount: "555",
        fq: "MONTHLY",
        timezone: "Indian/Maldives",
      };
      actualResults = [
        {
          start: daymal.parseISO("2020-04-04T00:30:00.000Z"),
          end: daymal.parseISO("2020-05-04T00:30:00.000Z"),
          amount: "2411.61",
        },
        {
          start: daymal.parseISO("2020-05-04T00:30:00.000Z"),
          end: daymal.parseISO("2020-06-04T00:30:00.000Z"),
          amount: "2411.61",
        },
        {
          start: daymal.parseISO("2020-06-04T00:30:00.000Z"),
          end: daymal.parseISO("2020-06-29T00:30:00.000Z"),
          amount: "1982.14",
        },
      ];
      const result = await service.ledgerCalculator(ans);

      expect(result).to.eql(actualResults);
    });
  });

  describe(" fortnightly frequency check", () => {
    it("fortnightly frequency works", async () => {
      ans = {
        start: "2020-03-02T00:00:00.000Z",
        end: "2020-03-29T00:00:00.000Z",
        amount: "555",
        fq: "FORTNIGHTLY",
        timezone: "Indian/Maldives",
      };
      actualResults = [
        {
          start: daymal.parseISO("2020-03-02T00:30:00.000Z"),
          end: daymal.parseISO("2020-03-16T00:30:00.000Z"),
          amount: 1110,
        },
        {
          start: daymal.parseISO("2020-03-16T00:30:00.000Z"),
          end: daymal.parseISO("2020-03-29T00:30:00.000Z"),
          amount: "1030.71",
        },
      ];
      const result = await service.ledgerCalculator(ans);

      expect(result).to.eql(actualResults);
    });
  });
});
