const result = {};

function getAges(event) {
  const age = event.target.value;
  if (age) {
    result["Ages"] = age;
  }
}

function getGender(event) {
  const gender = event.target.value;
  if (gender) {
    localStorage.setItem("Gender", gender);
    result["Gender"] = gender;
  }
}

function goSurvey() {
  const ageChecked = result["Ages"];
  const genderChecked = result["Gender"];
  if (ageChecked && genderChecked != null) {
    document.getElementById("survey").style.display = "block";
    document.getElementById("survey").style.opacity = 1;
    document.getElementById("survey").classList.add("appear");
    document.getElementById("user-info").style.display = "none";
    document.getElementById("user-info").style.opacity = 0;
    document.getElementById("user-info").classList.remove("disappear");
  } else {
    alert("값을 모두 입력해주세요");
  }
}

function backUser() {
  document.getElementById("survey").style.display = "none";
  document.getElementById("survey").style.opacity = 0;
  document.getElementById("survey").classList.remove("disappear");

  document.getElementById("user-info").style.display = "block";
  document.getElementById("user-info").style.opacity = 1;
  document.getElementById("user-info").classList.add("appear");
}

function quest1(event) {
  const q1 = event.target.value;
  const submitBtn = document.getElementById("last-submit");
  submitBtn.style.display = "block";
  submitBtn.classList.add(".appear");

  if (q1 === "yes") {
    document.getElementById("q2").style.display = "flex";
    document.getElementById("q3").style.display = "flex";
    document.getElementById("q4").style.display = "flex";
    document.getElementById("q5").style.display = "flex";
    document.getElementById("q6").style.display = "flex";
    document.getElementById("q7").style.display = "none";
  } else {
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "none";
    document.getElementById("q5").style.display = "none";
    document.getElementById("q6").style.display = "none";

    document.getElementById("q7").style.display = "flex";
  }
  if (q1) {
    result["Q1"] = q1;
  }
}

function quest2(event) {
  const q2 = event.target.value;
  if (q2) {
    result["Q2"] = q2;
  }
}

function quest3(event) {
  const checkbox = document.getElementsByName(event.target.name);
  let checkCount = 0;
  const q3checkList = [];

  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checkCount++;
      q3checkList.push(checkbox[i].value);
    }
  }
  if (checkCount > 3) {
    alert("3개까지만 선택해주세요!");
    event.target.checked = false;
    return false;
  }
  result["Q3"] = q3checkList;
}

function quest4(event) {
  const checkbox = document.getElementsByName(event.target.name);
  let checkCount = 0;
  const q4checkList = [];
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checkCount++;
      q4checkList.push(checkbox[i].value);
    }
  }
  result["Q4"] = q4checkList;
}

function quest5(event) {
  const q5 = event.target.value;
  result["Q5"] = q5;
}

function quest6(event) {
  const checkbox = document.getElementsByName(event.target.name);
  let checkCount = 0;
  const q6checkList = [];
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checkCount++;
      q6checkList.push(checkbox[i].value);
    }
  }
  result["Q6"] = q6checkList;
}

function quest7(event) {
  const q7 = event.target.value;
  result["Q7"] = q7;
}

function handleClick() {
  const yesOrNo = result["Q1"];
  if (yesOrNo === "yes") {
    document.getElementsByName("question07")[0].required = false;

    result["Q7"] = '';
  } else {
    document.getElementsByName("question02")[0].required = false;
    document.getElementsByName("question05")[0].required = false;

    result["Q2"] = '';
    result["Q3"] = '';
    result["Q4"] = '';
    result["Q5"] = '';
    result["Q6"] = '';
  }
  console.log(result);
}

async function handleSubmit(event) {
  event.preventDefault();
  alert("고생하셨습니다. 감사합니다😉");

  // index.js
  const some = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result),
  });

  const data = await some.text();
  console.log("???", data);
}

