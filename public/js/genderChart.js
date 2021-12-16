const genderChart = async () => {
  const response = await fetch("/api", {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);
  const ageArr = [];
  const ageArrCount = [];

  for (let i = 0; i < data["ages"].length; i++) {
    ageArr.push(data["ages"][i].ages);
    ageArrCount.push(data["ages"][i]["COUNT(ages)"]);
  }

  const ages = document.getElementById("ages").getContext("2d");

  const genderArr = [];
  const genderCount = [];
  for (let i = 0; i < date["gender"].length; i++) {
    genderArr.push(data["gender"][i].gender);
    genderCount.push(data["gender"][i]["COUNT(gender)"]);
  }
  
  const genderChart = new Chart(ages, {
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
  });
};

genderChart();
