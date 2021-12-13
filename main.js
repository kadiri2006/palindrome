let input = document.querySelector(".input_calender");
let btn = document.querySelector(".btn_calender");
let display = document.querySelector(".display_date");
btn.addEventListener("click", () => {
  checkPalindrome(dateString, reverseDateString, input.value);
});

function dateString(giving) {
  let completeDate = "";
  giving
    .split("-")
    .reverse()
    .forEach((element) => {
      completeDate += element;
    });

  return completeDate;
}

function dateToArray(give) {
  return give.split("-").reverse();
}

function reverseDateString(giving) {
  return dateString(giving).split("").reverse().join("");
}

function checkPalindrome(d, rd, i) {
  if (d(i) === rd(i)) {
    display.innerText = "hoo...it is palindrome";
    console.log(i);
  } else {
    display.innerHTML = "sorry...it is't palindrome";
    checkNextPalindrome(i);
  }
}

function checkAnthorDate(giving) {
  let data = dateToArray(giving);
  let dateObj = {
    date: data[0],
    month: data[1],
    year: data[2],
  };

  if (
    dateObj.year % 400 === 0 ||
    (dateObj.year % 4 === 0 && dateObj.year % 100 !== 0)
  ) {
    let monthDays = [
      "31",
      "29",
      "31",
      "30",
      "31",
      "30",
      "31",
      "31",
      "30",
      "31",
      "30",
      "31",
    ];

    test(dateObj, monthDays);
  } else {
    let monthDays = [
      "31",
      "28",
      "31",
      "30",
      "31",
      "30",
      "31",
      "31",
      "30",
      "31",
      "30",
      "31",
    ];

    test(dateObj, monthDays);
  }
  return dateObj.year + "-" + dateObj.month + "-" + dateObj.date;
}

function test(x, y) {
  if (x.date < y[x.month - 1]) {
    if ((Number(x.date) + 1).toString().length < 2) {
      x.date = "0" + (Number(x.date) + 1).toString();
    } else {
      x.date = (Number(x.date) + 1).toString();
    }
  } else {
    if (Number(x.month) !== 12) {
      if ((Number(x.month) + 1).toString().length < 2) {
        x.month = "0" + (Number(x.month) + 1).toString();
      } else {
        x.month = (Number(x.month) + 1).toString();
      }
      x.date = "01";
    } else {
      x.year = (Number(x.year) + 1).toString();
      x.month = "01";
      x.date = "01";
    }
  }
}

function checkNextPalindrome(i) {
  let count = 1;
  while (1) {
    let newResul = checkAnthorDate(i);
    if (dateString(newResul) === reverseDateString(newResul)) {
      display.innerHTML = `it's not palidrome date & next palidrome date is : ${newResul
        .split("-")
        .reverse()
        .join("-")} && total no of days to go for palindrome:${count}`;
      break;
    } else {
      i = newResul;
      count++;
    }
  }
}
