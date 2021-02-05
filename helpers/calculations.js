const daymal = require("date-fns");

const NODAYSWEEK = 7;
const NODAYSYEAR = 365;
const NOMONTHS = 12;

module.exports = { weeklyCalculator, monthlyCalculator };

function weeklyCalculator(freq, start_dt, end_dt, amount) {
  if (freq == 14) {
    amount = amount * 2;
  }
  const ledgerDetails = [];
  noDays = daymal.differenceInDays(end_dt, start_dt);

  noPeriods = Math.floor(noDays / freq);
  extraDays = noDays % freq;
  newstartDate = start_dt;

  for (i = 0; i < noPeriods; i++) {
    newendDate = daymal.addDays(newstartDate, freq);
    ledgerRecord = { start: newstartDate, end: newendDate, amount: amount };
    ledgerDetails.push(ledgerRecord);
    newstartDate = newendDate;
  }
  if (extraDays > 0) {
    price = ((amount / freq) * extraDays).toFixed(2);
    ledgerRecord = {
      start: newstartDate,
      end: daymal.addDays(newendDate, extraDays),
      amount: price,
    };
    ledgerDetails.push(ledgerRecord);
  }
  return ledgerDetails;
}

//------------------------------------------------------------------------------------------------------------------------------------
//Monthly calculation is done
function monthlyCalculator(start_dt, end_dt, amount) {
  noMonths = daymal.differenceInMonths(end_dt, start_dt);

  const ledgerDetails = [];

  if (noMonths == 0) {
    noDays = daymal.differenceInDays(end_dt, start_dt);
    price = ((amount / NODAYSWEEK) * noDays).toFixed(2);
    ledgerRecord = { start: start_dt, end: end_dt, amount: price };
    ledgerDetails.push(ledgerRecord);
    return ledgerDetails;
  }

  if (!daymal.isLastDayOfMonth(start_dt) && noMonths > 0) {
    newstartDate = new Date(start_dt);
    price = ((amount / NODAYSWEEK) * (NODAYSYEAR / NOMONTHS)).toFixed(2);
    for (i = 0; i < noMonths; i++) {
      newendDate = daymal.addMonths(newstartDate, 1);
      ledgerRecord = { start: newstartDate, end: newendDate, amount: price };
      ledgerDetails.push(ledgerRecord);
      newstartDate = new Date(newendDate);
    }

    noDays = daymal.differenceInDays(end_dt, newendDate);
    if (noDays > 0) {
      price = ((amount / NODAYSWEEK) * noDays).toFixed(2);
      ledgerRecord = { start: newendDate, end: end_dt, amount: price };
      ledgerDetails.push(ledgerRecord);
    }

    return ledgerDetails;
  } else if (daymal.isLastDayOfMonth(start_dt) && noMonths > 0) {
    newstartDate = new Date(start_dt);
    price = ((amount / NODAYSWEEK) * (NODAYSYEAR / NOMONTHS)).toFixed(2);

    for (i = 0; i < noMonths; i++) {
      newendDate = daymal.addMonths(newstartDate, 1);
      ledgerRecord = { start: newstartDate, end: newendDate, amount: price };
      ledgerDetails.push(ledgerRecord);

      newstartDate = new Date(newendDate);
    }

    noDays = daymal.differenceInDays(end_dt, newstartDate);
    if (noDays > 0) {
      price = ((amount / NODAYSWEEK) * noDays).toFixed(2);
      ledgerRecord = { start: newendDate, end: end_dt, amount: price };
      ledgerDetails.push(ledgerRecord);
    }

    return ledgerDetails;
  }
}
