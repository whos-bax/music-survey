
const fetchData = async () => {
  const response = await fetch("/api", {
    method: "GET",
  });
  const data = await response.json();
  console.log("@#@#", data);
};
fetchData();