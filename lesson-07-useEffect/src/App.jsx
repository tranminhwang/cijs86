import { useState, useEffect } from "react";
import "./App.css";

function App() {
  /*
   side effect:
    - call api
    - web apis: setTimeout, setInterval, localStorage, ...
    - interact with DOM

  lifecycle:
    con nguoi: sinh ra, lớn lên, chết đi
    componet: mount, update, unmount
  */

  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [actionResponse, setActionResponse] = useState([]);
  const [page, setPage] = useState(1);

  // // useEffect(<function>, <deps>) => deps is optional
  // useEffect(() => {
  //   console.log("useEffect - count run");
  //   document.title = `You clicked ${count} times`;
  // }, [count]);

  console.log("action", action);
  useEffect(() => {
    console.log("useEffect - action run");
    // console.log("useEffect - action run");
    // if (action === "users") {
    //   alert("get users");
    // }

    const makeRequest = async () => {
      const res = await fetch(`https://reqres.in/api/${action}?page=${page}`);
      const data = await res.json();
      setActionResponse(data.data);
    };

    if (action !== "") {
      console.log("make request");
      makeRequest();
    }
  }, [action, page]);

  // const getUserPage1 = async () => {
  //   const res = await fetch(`https://reqres.in/api/users?page=1`);
  //   const data = await res.json();
  //   setActionResponse(data.data);
  // };

  // const getUserPage2 = async () => {
  //   const res = await fetch(`https://reqres.in/api/users?page=2`);
  //   const data = await res.json();
  //   setActionResponse(data.data);
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };
  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // });

  // console.log("render", count);

  return (
    <div
      style={{
        height: "3000px",
      }}
    >
      <div>{JSON.stringify(actionResponse, null, 2)}</div>
      <h4
        style={{
          position: "fixed",
          bottom: 50,
          left: 50,
        }}
      >
        {/* Position: {scrollPosition} */}
      </h4>
      <h1>{action}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setAction("users")}>Get users</button>
      <button onClick={() => setAction("comments")}>Get comments</button>
      {/* <button onClick={getUserPage1}>Get users page 1</button>

      <button onClick={getUserPage2}>Get users page 2</button> */}
    </div>
  );
}

export default App;
