const daymal = require("date-fns");
const moment = require("moment-timezone");

module.exports = { validationParams };

function validationParams(start_date, end_date, amount, tz, fq) {
  if (moment.tz.zone(tz) == null) throw "Invalid timezone";

  if (isNaN(amount)) throw "Invalid amount is given";

  if (daymal.parseISO(start_date) == "Invalid Date")
    throw "Start date is invalid";

  if (daymal.parseISO(end_date) == "Invalid Date") throw "End date is invalid";

  if (daymal.isBefore(daymal.parseISO(end_date), daymal.parseISO(start_date)))
    throw "End date is before start date";

  freqency = "WEEKLY FORTNIGHTLY MONTHLY";

  if (!freqency.includes(fq)) throw "Invalid Frequency";
}
