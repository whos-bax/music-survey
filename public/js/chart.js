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
  const Q2 = document.getElementById("chart-q2").getContext("2d");
  const Q3 = document.getElementById("chart-q3").getContext("2d");
  const Q4 = document.getElementById("chart-q4").getContext("2d");
  const Q5 = document.getElementById("chart-q5").getContext("2d");
  const Q6 = document.getElementById("chart-q6").getContext("2d");
  const Q7 = document.getElementById("chart-q7").getContext("2d");

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
        text: "1. 음악 듣기를 즐기시나요?",
      },
      legend: {
        display: false,
      },
    },
  });

  // question2
  const Q2Arr = [];
  const Q2Count = [];
  for (let i = 0; i < data["Q2"].length; i++) {
    if (data["Q2"][i].question2) {
      Q2Arr.push(data["Q2"][i].question2);
      Q2Count.push(data["Q2"][i]["COUNT(question2)"]);
    }
  }
  console.log("q2", Q2Arr);
  const Q2Chart = new Chart(Q2, {
    type: "bar",
    data: {
      labels: Q2Arr,
      datasets: [
        {
          label: "2번",
          data: Q2Count,
          backgroundColor: [
            "rgb(255, 205, 86)",
            "rgba(255, 159, 64)",
            "rgb(255, 1, 1)",
            "rgb(25, 205, 2)",
          ],
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "2. 하루에 얼마나 들으시나요?",
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 14,
            },
          },
        ],
      },
    },
  });

  // question3
  const Q3Arr = [];
  const Q3Count = [];
  for (let i = 0; i < data["Q3"].length; i++) {
    if (data["Q3"][i].question3) {
      Q3Arr.push(data["Q3"][i].question3);
      // Q3Count.push(data["Q3"][i]["COUNT(question3)"]);
    }
  }
  const arr3El = [];
  const el3Count = [];
  let q3_1 = 0;
  let q3_2 = 0;
  let q3_3 = 0;
  let q3_4 = 0;
  let q3_5 = 0;
  let q3_6 = 0;
  let q3_7 = 0;

  for (const el3_1 of Q3Arr) {
    const elc3 = el3_1.split(",");
    for (const el3_2 of elc3) {
      if (el3_2 == "move") {
        arr3El.push(el3_2);
        q3_1++;
      }
      if (el3_2 == "study") {
        arr3El.push(el3_2);
        q3_2++;
      }
      if (el3_2 == "workout") {
        arr3El.push(el3_2);
        q3_3++;
      }
      if (el3_2 == "shower") {
        arr3El.push(el3_2);
        q3_4++;
      }
      if (el3_2 == "sleep") {
        arr3El.push(el3_2);
        q3_5++;
      }
      if (el3_2 == "eating") {
        arr3El.push(el3_2);
        q3_6++;
      }
      if (el3_2 == "working") {
        arr3El.push(el3_2);
        q3_7++;
      }
    }
  }
  console.log("q3", Q3Arr);
  const Q3Chart = new Chart(Q3, {
    type: "bar",
    data: {
      labels: [
        "move",
        "study",
        "workout",
        "shower",
        "sleep",
        "eating",
        "working",
      ],
      datasets: [
        {
          label: "3번",
          data: [q3_1, q3_2, q3_3, q3_4, q3_5, q3_6, q3_7],
          backgroundColor: [
            "rgb(255, 205, 86)",
            "rgba(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgba(255, 159, 64)",
            "rgb(255, 1, 1)",
            "rgb(25, 205, 2)",
            "rgb(23, 25, 2)",
          ],
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "3. 어떤 시간에 자주 들으시나요?",
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 14,
            },
          },
        ],
      },
    },
  });

  // question4
  const Q4Arr = [];
  const Q4Count = [];
  for (let i = 0; i < data["Q4"].length; i++) {
    if (data["Q4"][i].question4) {
      Q4Arr.push(data["Q4"][i].question4);
      // Q4Count.push(data["Q4"][i]["COUNT(question4)"]);
    }
  }

  const arrEl = [];
  const elCount = [];
  let q4_1 = 0;
  let q4_2 = 0;
  let q4_3 = 0;
  let q4_4 = 0;
  let q4_5 = 0;
  let q4_6 = 0;

  for (const el of Q4Arr) {
    const elc = el.split(",");
    for (const e2 of elc) {
      if (e2 == "balad") {
        arrEl.push(e2);
        q4_1++;
      }
      if (e2 == "dance") {
        arrEl.push(e2);
        q4_2++;
      }
      if (e2 == "hiphop") {
        arrEl.push(e2);
        q4_3++;
      }
      if (e2 == "indie") {
        arrEl.push(e2);
        q4_4++;
      }
      if (e2 == "rock") {
        arrEl.push(e2);
        q4_5++;
      }
      if (e2 == "jazz") {
        arrEl.push(e2);
        q4_6++;
      }
    }
  }

  // 반복제거
  const set = new Set(arrEl);
  const uniqueArr = [...set];
  console.log("q4", uniqueArr);

  const Q4Chart = new Chart(Q4, {
    type: "bar",
    data: {
      labels: ["balad", "dance", "hiphop", "indie", "rock", "jazz"],
      datasets: [
        {
          label: "4번",
          data: [q4_1, q4_2, q4_3, q4_4, q4_5, q4_6],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgba(255, 159, 64)",
            "rgba(255, 1, 64)",
            "rgba(45, 159, 64)",
          ],
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "4. 좋아하는/자주 듣는 장르는 무엇인가요?",
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 14,
            },
          },
        ],
      },
    },
  });

  // question5
  const Q5Arr = [];
  const Q5Count = [];
  for (let i = 0; i < data["Q5"].length; i++) {
    if (data["Q5"][i].question5) {
      Q5Arr.push(data["Q5"][i].question5);
      Q5Count.push(data["Q5"][i]["COUNT(question5)"]);
    }
  }
  console.log("q5", Q5Arr);
  const Q5Chart = new Chart(Q5, {
    type: "bar",
    data: {
      labels: Q5Arr,
      datasets: [
        {
          label: "5번",
          data: Q5Count,
          backgroundColor: ["rgb(255, 205, 86)", "rgba(255, 159, 64)"],
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "5. 국내/국외 어느것을 더 선호하나요?",
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 14,
            },
          },
        ],
      },
    },
  });

  // question6
  const Q6Arr = [];
  const Q6Count = [];
  for (let i = 0; i < data["Q6"].length; i++) {
    if (data["Q6"][i].question6) {
      Q6Arr.push(data["Q6"][i].question6);
      Q6Count.push(data["Q6"][i]["COUNT(question6)"]);
    }
  }
  console.log("q6", Q6Arr);

  const arr6El = [];
  let q6_1 = 0;
  let q6_2 = 0;
  let q6_3 = 0;
  let q6_4 = 0;
  let q6_5 = 0;

  for (const el6 of Q6Arr) {
    const elc6 = el6.split(",");
    for (const e6_2 of elc6) {
      if (e6_2 == "youtube") {
        arrEl.push(e6_2);
        q6_1++;
      }
      if (e6_2 == "apple") {
        arrEl.push(e6_2);
        q6_2++;
      }
      if (e6_2 == "melon") {
        arrEl.push(e6_2);
        q6_3++;
      }
      if (e6_2 == "genie") {
        arrEl.push(e6_2);
        q6_4++;
      }
      if (e6_2 == "etc") {
        arrEl.push(e6_2);
        q6_5++;
      }
    }
  }

  const Q6Chart = new Chart(Q6, {
    type: "bar",
    data: {
      labels: ["youtube", "apple", "melon", "genie", "etc"],
      datasets: [
        {
          label: "6번",
          data: [q6_1, q6_2, q6_3, q6_4, q6_5],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgba(255, 159, 64)",
            "rgba(255, 1, 64)",
          ],
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "6. 어떤 플랫폼을 이용하고 계신가요?",
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 14,
            },
          },
        ],
      },
    },
  });

  // question7
  const Q7Arr = [];
  const Q7Count = [];
  for (let i = 0; i < data["Q7"].length; i++) {
    if (data["Q7"][i].question7) {
      Q7Arr.push(data["Q7"][i].question7);
      Q7Count.push(data["Q7"][i]["COUNT(question7)"]);
    }
  }
  console.log("q7", Q7Arr);
  const Q7Chart = new Chart(Q7, {
    type: "bar",
    data: {
      labels: Q7Arr,
      datasets: [
        {
          label: "7번",
          data: Q7Count,
          backgroundColor: ["rgb(255, 205, 86)", "rgba(255, 159, 64)"],
        },
      ],
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: "7. 아니라면, 다른 취미를 즐기시나요?",
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 14,
            },
          },
        ],
      },
    },
  });

  // // yes
  // const yesArr = [];
  // const yesCount = [];
  // for (let i = 0; i < data["yesAnswer"].length; i++) {
  //   yesArr.push(data["yesAnswer"][i].question2);
  // }
  // console.log(data["yesAnswer"])
  // const yesChart = new Chart(yesAnswer, {
  //   type: "doughnut",
  //   data: {
  //     labels: yesArr,
  //     datasets: [
  //       {
  //         label: "1번",
  //         data: yesCount,
  //         backgroundColor: ["rgb(255, 205, 86)", "rgba(255, 159, 64)"],
  //       },
  //     ],
  //   },
  //   options: {
  //     responsive: false,
  //     title: {
  //       display: true,
  //       text: "1번 질문",
  //     },
  //   },
  // });

  // // no
  // const noArr = [];
  // const noCount = [];
  // for (let i = 0; i < data["noAnswer"].length; i++) {
  //   noArr.push(data["noAnswer"][i].question2);
  // }
  // console.log(data["noAnswer"])
  // const noChart = new Chart(noAnswer, {
  //   type: "doughnut",
  //   data: {
  //     labels: noArr,
  //     datasets: [
  //       {
  //         label: "1번",
  //         data: noCount,
  //         backgroundColor: ["rgb(255, 205, 86)", "rgba(255, 159, 64)"],
  //       },
  //     ],
  //   },
  //   options: {
  //     responsive: false,
  //     title: {
  //       display: true,
  //       text: "1번 질문",
  //     },
  //   },
  // });
};

allChart();
