function calculate() {
  // get table
  var table = document.getElementById("table");
  // get salary amount
  var salary = parseInt(document.getElementById("salary-amount").value);
  // get time of salary
  var time = document.getElementById("dropdown").value; //Hour, Daily, Weekly, Bi-Weekly, ...
  // get hours and days per week, holidays per year, and vacation days per year
  var hours = parseInt(document.getElementById("Hours per Week").value);
  var days = parseInt(document.getElementById("Days per Week").value);
  var holidays = parseInt(document.getElementById("Holidays per Year").value);
  var vacation = parseInt(document.getElementById("Vacation Days per Year").value);
  
  clearTable(table);
  
  if (time == "Hour") {
    var annual = hours * salary * 52;
    var annual_adjusted = parseInt((hours / days) * salary * ((52 * days) - holidays - vacation));
    var row = table.insertRow();
    var hourly_0 = row.insertCell().innerHTML = "Hourly";
    var hourly_1 = row.insertCell().innerHTML = annual / (52 * hours);
    var hourly_2 = row.insertCell().innerHTML = parseInt(annual_adjusted / (52 * hours));
    var row1 = table.insertRow();
    var daily_0 = row1.insertCell().innerHTML = "Daily";
    var daily_1 = row1.insertCell().innerHTML = annual / (52 * days);
    var daily_2 = row1.insertCell().innerHTML = parseInt(annual_adjusted / (52 * days));
    var row2 = table.insertRow();
    var weekly_0 = row2.insertCell().innerHTML = "Weekly";
    var weekly_1 = row2.insertCell().innerHTML = annual / 52;
    var weekly_2 = row2.insertCell().innerHTML = parseInt(annual_adjusted / 52);
    var row3 = table.insertRow();
    var monthly_0 = row3.insertCell().innerHTML = "Monthly";
    var monthly_1 = row3.insertCell().innerHTML = annual / 12;
    var monthly_2 = row3.insertCell().innerHTML = parseInt(annual_adjusted / 12);
    var row4 = table.insertRow();
    var quarterly_0 = row4.insertCell().innerHTML = "Quarterly";
    var quarterly_1 = row4.insertCell().innerHTML = annual / 4;
    var quarterly_2 = row4.insertCell().innerHTML = parseInt(annual_adjusted / 4);
    var row5 = table.insertRow();
    var annual_0 = row5.insertCell().innerHTML = "Annual";
    var annual_1 = row5.insertCell().innerHTML = annual;
    var annual_2 = row5.insertCell().innerHTML = parseInt(annual_adjusted);
  } else if (time == "Daily") {
    //
  } else if (time == "Weekly") {
    //
  } else if (time == "Monthly") {
    //
  } else if (time == "Quarterly") {
    //
  } else {
    //
  }
}

function clearTable(table) {
  var rows = table.rows;
  var i = rows.length;
  while (--i) {
    table.deleteRow(i);
  }
}