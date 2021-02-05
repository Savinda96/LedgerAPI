const daymal = require("date-fns");
const { zonedTimeToUtc } = require("date-fns-tz");
const validation = require("./helpers/validationparm");
const calculation = require("./helpers/calculations");
module.exports = { ledgerCalculator };

async function ledgerCalculator(params) {
  var results = [];
  //Validation of parameters
  try {
    validation.validationParams(
      params.start,
      params.end,
      params.amount,
      params.timezone,
      params.fq
    );
  } catch (e) {
    throw e;
  }
  //Translating the times into UTC
  const startDate = zonedTimeToUtc(
    daymal.parseISO(params.start),
    params.timezone
  );
  const endDate = zonedTimeToUtc(daymal.parseISO(params.end), params.timezone);

  switch (params.fq) {
    case "WEEKLY":
      results = calculation.weeklyCalculator(
        7,
        startDate,
        endDate,
        params.amount
      );
      break;
    case "FORTNIGHTLY":
      results = calculation.weeklyCalculator(
        14,
        startDate,
        endDate,
        params.amount
      );
      break;
    case "MONTHLY":
      results = calculation.monthlyCalculator(
        startDate,
        endDate,
        params.amount
      );

      break;
  }

  return results;
}
