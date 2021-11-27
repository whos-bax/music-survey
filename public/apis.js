function getAges(event) {
  const age = event.target.value;
  if (age) {
    localStorage.setItem("Ages", age);
  }
}

function getGender(event) {
  const gender = event.target.value;
  if (gender) {
    localStorage.setItem("Gender", gender);
  }
}

function goSurvey() {
  const ageChecked = document.getElementsByName("age");
  const genderChecked = document.getElementsByName("gender");
  const ageList = [];
  const genderList = [];
  for (let i = 0; i < ageChecked.length; i++) {
    ageList.push(ageChecked[i].checked);
  }
  for (let j = 0; j < genderChecked.length; j++) {
    genderList.push(genderChecked[j].checked);
  }
  if (ageList.includes(true) && genderList.includes(true)) {
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
    localStorage.setItem("Q1", q1);
  }
}

function quest2(event) {
  const q2 = event.target.value;
  if (q2) {
    localStorage.setItem("Q2", q2);
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

  localStorage.setItem("Q3", q3checkList);
  return q3checkList;
}

function quest4(event) {
  const checkbox = document.getElementsByName(event.target.name);
  let checkCount = 0;
  const checkList = [];
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checkCount++;
      checkList.push(checkbox[i].value);
    }
  }
  localStorage.setItem("Q4", checkList);
}

function quest5(event) {
  localStorage.setItem("Q5", event.target.value);
}

function quest6(event) {
  const checkbox = document.getElementsByName(event.target.name);
  let checkCount = 0;
  const checkList = [];
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checkCount++;
      checkList.push(checkbox[i].value);
    }
  }
  localStorage.setItem("Q6", checkList);
}

function quest7(event) {
  localStorage.setItem("Q7", event.target.value);
}

function handleClick() {
  const yesOrNo = localStorage.getItem("Q1");
  if (yesOrNo === "yes") {
    document.getElementsByName("question07")[0].required = false;

    localStorage.setItem("Q7", null);
  } else {
    document.getElementsByName("question02")[0].required = false;
    document.getElementsByName("question05")[0].required = false;

    localStorage.setItem("Q2", null);
    localStorage.setItem("Q3", null);
    localStorage.setItem("Q4", null);
    localStorage.setItem("Q5", null);
    localStorage.setItem("Q6", null);

  }
}

async function handleSubmit(event) {
  event.preventDefault();
  alert("고생하셨습니다. 감사합니다😉");

  const resultKeys = Object.keys(localStorage);
  const resultValues = Object.values(localStorage);
  const some = {};
  for (let i = 0; i < resultKeys.length; i++) {
    some[resultKeys[i]] = resultValues[i];
  }
  localStorage.setItem("result", some);
  localStorage.clear();
  
  // index.js
  const result = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(some),
  });

  const data = await result.text();

  console.log("???", data);
}

const fetchData = async () => {
  const response = await fetch("/api");
  const data = await response.json();
  console.log(data);
};