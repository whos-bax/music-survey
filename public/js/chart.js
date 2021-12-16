const allChart = async () => {
  const response = await fetch("/api", {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);

  // DOM
  const ages = document.getElementById("chart-ages").getContext("2d");
  const gender = document.getElementById("chart-gender").getContext("2d");
  const Q1 = document.getElementById("chart-q1").getContext("2d");
  const yesAnswer = document.getElementById("chart-yes").getContext("2d");

  // age
  const ageArr = [];
  const ageArrCount = [];
  for (let i = 0; i < data["ages"].length; i++) {
    ageArr.push(data["ages"][i].ages);
    ageArrCount.push(data["ages"][i]["COUNT(ages)"]);
  }
  const ageChart = new Chart(ages, {
    type: "pie",
    data: {
      labels: ageArr,
      datasets: [
        {
          label: "나이 분포도",
          data: ageArrCount,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgba(255, 159, 64)",
          ],
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "나이 분포도",
      },
    },
  });

  // gender
  const genderArr = [];
  const genderCount = [];
  for (let i = 0; i < data["gender"].length; i++) {
    genderArr.push(data["gender"][i].gender);
    genderCount.push(data["gender"][i]["COUNT(gender)"]);
  }
  const genderChart = new Chart(gender, {
    type: "pie",
    data: {
      labels: genderArr,
      datasets: [
        {
          label: "성별",
          data: genderCount,
          backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "성별",
      },
    },
  });

  // question1
  const Q1Arr = [];
  const Q1Count = [];
  for (let i = 0; i < data["Q1"].length; i++) {
    Q1Arr.push(data["Q1"][i].question1);
    Q1Count.push(data["Q1"][i]["COUNT(question1)"]);
  }
  const Q1Chart = new Chart(Q1, {
    type: "doughnut",
    data: {
      labels: Q1Arr,
      datasets: [
        {
          label: "1번",
          data: Q1Count,
          backgroundColor: ["rgb(255, 205, 86)", "rgba(255, 159, 64)"],
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "1번 질문",
      },
    },
  });

  // yes
  const yesArr = [];
  const yesCount = [];
  for (let i = 0; i < data["yesAnswer"].length; i++) {
    yesArr.push(data["yesAnswer"][i].question2);
  }
  console.log(yesArr);
  const yesChart = new Chart(yesAnswer, {
    type: "doughnut",
    data: {
      labels: yesArr,
      datasets: [
        {
          label: "1번",
          data: yesCount,
          backgroundColor: ["rgb(255, 205, 86)", "rgba(255, 159, 64)"],
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "1번 질문",
      },
    },
  });
};

allChart();
