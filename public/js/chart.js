const allChart = async () => {
  const response = await fetch("/api", {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);

  // DOM
  const ages = document.getElementById("chart-ages").getContext("2d");
  const gender = document.getElementById("chart-gender").getContext("2d");

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
        text: "성별",
      },
    },
  });
};

allChart();
