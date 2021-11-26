const fetchData = async () => {
  const response = await fetch("/hello");
  const data = await response.json();
  console.log("data = ", data);
};

const sendData = async () => {
  const response = await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "hong", age: 3.5}),
  });

  const data = await response.text();

  console.log('hey 1:',data)
};

fetchData();
sendData();
