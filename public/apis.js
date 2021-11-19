function getAges(event) {
  localStorage.setItem("Ages", event.target.value);
}

function getGender(event) {
  localStorage.setItem("Gender", event.target.value);
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
  const q1yes = event.target.value;
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.classList.add('.appear')
  console.log(submitBtn);
  if (q1yes === "yes") {
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
  localStorage.setItem("Q1", event.target.value);
}

function quest2(event) {
  localStorage.setItem("Q2", event.target.value);
}

function quest3(event) {
  const checkbox = document.getElementsByName(event.target.name);
  let checkCount = 0;
  const checkList = [];

  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checkCount++;
      checkList.push(checkbox[i].value);
    }
  }
  if (checkCount > 2) {
    alert("2개까지만 선택해주세요!");
    event.target.checked = false;
    return false;
  }
  localStorage.setItem("Q3", checkList);
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
  console.log(yesOrNo);
  if (yesOrNo === "yes") {
    document.getElementsByName("question07")[0].required = false;
  } else {
    document.getElementsByName("question02")[0].required = false;
    document.getElementsByName("question05")[0].required = false;
  }
}

function handleSubmit(event) {
  alert("고생하셨습니다. 감사합니다😉");
  localStorage.clear();
  console.log("submit");
}
