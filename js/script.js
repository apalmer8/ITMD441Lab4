var input = document.getElementById("location_box");

function getLoc() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPos);
  } else {
    input.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPos(position) {
  usrlocation = position.coords.latitude + "," + position.coords.longitude;
  console.log(usrlocation);
  document.getElementById("location_box").value = usrlocation;
}

function returnLoc() {
  var input = document.getElementById("location_box").value;

  var myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function () {
    if (myRequest.readyState === 4) {
      if (myRequest.status === 200)
        var wArray = JSON.parse(myRequest.responseText);
      parseData(wArray);
    } else if (myRequest.status === 400) {
      alert(
        "Invalid location \n Please Enter a valid location name/coordinates"
      );
    } else if (myRequest.status === 503)
      alert("Service is unavailable right now \n Please Try Again later");
  };

  let site = myRequest.open(
    "GET",
    "https://weatherdbi.herokuapp.com/data/weather/" + input,
    true
  );

  myRequest.send();

  function parseData(arr) {
    // current conditions
    usrRegion = arr.region;
    usrDayHr = arr.currentConditions.dayhour;
    usrTempCel = arr.currentConditions.temp.c;
    usrTempFah = arr.currentConditions.temp.f;
    usrPrecip = arr.currentConditions.precip;
    usrHumidity = arr.currentConditions.humidity;
    usrWindKM = arr.currentConditions.wind.km;
    usrWindMile = arr.currentConditions.wind.mile;
    usrComment = arr.currentConditions.comment;
    usrIcon = arr.currentConditions.iconURL;

    //Day 1
    Day1_date = arr.next_days[1].day;
    Day1_com = arr.next_days[1].comment;
    Day1_maxC = arr.next_days[1].max_temp.c;
    Day1_maxF = arr.next_days[1].max_temp.f;
    Day1_minC = arr.next_days[1].min_temp.c;
    Day1_minF = arr.next_days[1].min_temp.f;
    Day1_icon = arr.next_days[1].iconURL;

    //Day 2
    Day2_date = arr.next_days[2].day;
    Day2_com = arr.next_days[2].comment;
    Day2_maxC = arr.next_days[2].max_temp.c;
    Day2_maxF = arr.next_days[2].max_temp.f;
    Day2_minC = arr.next_days[2].min_temp.c;
    Day2_minF = arr.next_days[2].min_temp.f;
    Day2_icon = arr.next_days[2].iconURL;

    //Day 3
    Day3_date = arr.next_days[3].day;
    Day3_com = arr.next_days[3].comment;
    Day3_maxC = arr.next_days[3].max_temp.c;
    Day3_maxF = arr.next_days[3].max_temp.f;
    Day3_minC = arr.next_days[3].min_temp.c;
    Day3_minF = arr.next_days[3].min_temp.f;
    Day3_icon = arr.next_days[3].iconURL;

    //Day 4
    Day4_date = arr.next_days[4].day;
    Day4_com = arr.next_days[4].comment;
    Day4_maxC = arr.next_days[4].max_temp.c;
    Day4_maxF = arr.next_days[4].max_temp.f;
    Day4_minC = arr.next_days[4].min_temp.c;
    Day4_minF = arr.next_days[4].min_temp.f;
    Day4_icon = arr.next_days[4].iconURL;

    //Day 4
    Day4_date = arr.next_days[4].day;
    Day4_com = arr.next_days[4].comment;
    Day4_maxC = arr.next_days[4].max_temp.c;
    Day4_maxF = arr.next_days[4].max_temp.f;
    Day4_minC = arr.next_days[4].min_temp.c;
    Day4_minF = arr.next_days[4].min_temp.f;
    Day4_icon = arr.next_days[4].iconURL;

    //Day 5
    Day5_date = arr.next_days[5].day;
    Day5_com = arr.next_days[5].comment;
    Day5_maxC = arr.next_days[5].max_temp.c;
    Day5_maxF = arr.next_days[5].max_temp.f;
    Day5_minC = arr.next_days[5].min_temp.c;
    Day5_minF = arr.next_days[5].min_temp.f;
    Day5_icon = arr.next_days[5].iconURL;

    //Day 6
    Day6_date = arr.next_days[6].day;
    Day6_com = arr.next_days[6].comment;
    Day6_maxC = arr.next_days[6].max_temp.c;
    Day6_maxF = arr.next_days[6].max_temp.f;
    Day6_minC = arr.next_days[6].min_temp.c;
    Day6_minF = arr.next_days[6].min_temp.f;
    Day6_icon = arr.next_days[6].iconURL;

    //Day 7
    Day7_date = arr.next_days[7].day;
    Day7_com = arr.next_days[7].comment;
    Day7_maxC = arr.next_days[7].max_temp.c;
    Day7_maxF = arr.next_days[7].max_temp.f;
    Day7_minC = arr.next_days[7].min_temp.c;
    Day7_minF = arr.next_days[7].min_temp.f;
    Day7_icon = arr.next_days[7].iconURL;

    const icon = document.querySelector("#weather-icon");
    const icon1 = document.querySelector("#weather-icon1");
    const icon2 = document.querySelector("#weather-icon2");
    const icon3 = document.querySelector("#weather-icon3");
    const icon4 = document.querySelector("#weather-icon4");
    const icon5 = document.querySelector("#weather-icon5");
    const icon6 = document.querySelector("#weather-icon6");
    const icon7 = document.querySelector("#weather-icon7");

    // current weather conditions
    document.getElementById("Region").innerHTML = "Region: " + usrRegion;
    document.getElementById("DayHour").innerHTML = "Time: " + usrDayHr;
    document.getElementById("Temp").innerHTML =
      "Temperature: " + usrTempCel + "\u2103/" + usrTempFah + "\u2109";
    document.getElementById("Precip").innerHTML = "Precipitation: " + usrPrecip;
    document.getElementById("Humidity").innerHTML = "Humidity: " + usrHumidity;
    document.getElementById("Wind").innerHTML =
      "Wind: " + usrWindKM + "km/" + usrWindMile + "mi";
    document.getElementById("Comment").innerHTML = "Comment: " + usrComment;
    icon.src = usrIcon;

    // Day 1
    document.getElementById("Day1").innerHTML = Day1_date;
    document.getElementById("Comment1").innerHTML = Day1_com;
    document.getElementById("Max_Temp1").innerHTML =
      "High: " + Day1_maxC + "\u2103/" + Day1_maxF + "\u2109";
    document.getElementById("Min_Temp1").innerHTML =
      "Low: " + Day1_minC + "\u2103/" + Day1_minF + "\u2109";
    icon1.src = Day1_icon;

    // Day 2
    document.getElementById("Day2").innerHTML = Day2_date;
    document.getElementById("Comment2").innerHTML = Day2_com;
    document.getElementById("Max_Temp2").innerHTML =
      "High: " + Day2_maxC + "\u2103/" + Day2_maxF + "\u2109";
    document.getElementById("Min_Temp2").innerHTML =
      "Low: " + Day2_minC + "\u2103/" + Day2_minF + "\u2109";
    icon2.src = Day2_icon;

    // Day 3
    document.getElementById("Day3").innerHTML = Day3_date;
    document.getElementById("Comment3").innerHTML = Day3_com;
    document.getElementById("Max_Temp3").innerHTML =
      "High: " + Day3_maxC + "\u2103/" + Day3_maxF + "\u2109";
    document.getElementById("Min_Temp3").innerHTML =
      "Low: " + Day3_minC + "\u2103/" + Day3_minF + "\u2109";
    icon3.src = Day3_icon;

    // Day 4
    document.getElementById("Day4").innerHTML = Day4_date;
    document.getElementById("Comment4").innerHTML = Day4_com;
    document.getElementById("Max_Temp4").innerHTML =
      "High: " + Day4_maxC + "\u2103/" + Day4_maxF + "\u2109";
    document.getElementById("Min_Temp4").innerHTML =
      "Low: " + Day4_minC + "\u2103/" + Day4_minF + "\u2109";
    icon4.src = Day4_icon;

    // Day 5
    document.getElementById("Day5").innerHTML = Day5_date;
    document.getElementById("Comment5").innerHTML = Day5_com;
    document.getElementById("Max_Temp5").innerHTML =
      "High: " + Day5_maxC + "\u2103/" + Day5_maxF + "\u2109";
    document.getElementById("Min_Temp5").innerHTML =
      "Low: " + Day5_minC + "\u2103/" + Day5_minF + "\u2109";
    icon5.src = Day5_icon;

    // Day 6
    document.getElementById("Day6").innerHTML = Day6_date;
    document.getElementById("Comment6").innerHTML = Day6_com;
    document.getElementById("Max_Temp6").innerHTML =
      "High: " + Day6_maxC + "\u2103/" + Day6_maxF + "\u2109";
    document.getElementById("Min_Temp6").innerHTML =
      "Low: " + Day6_minC + "\u2103/" + Day6_minF + "\u2109";
    icon6.src = Day6_icon;

    // Day 7
    document.getElementById("Day7").innerHTML = Day7_date;
    document.getElementById("Comment7").innerHTML = Day7_com;
    document.getElementById("Max_Temp7").innerHTML =
      "High: " + Day7_maxC + "\u2103/" + Day7_maxF + "\u2109";
    document.getElementById("Min_Temp7").innerHTML =
      "Low: " + Day7_minC + "\u2103/" + Day7_minF + "\u2109";
    icon7.src = Day7_icon;
  }
}
