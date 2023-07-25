import "./App.css";
import { useState } from "react";
// import HomePage from "./components/HomePage";

function App() {
  const [countValue, setCountValue] = useState(0);

  // let count2 = 0;
  // console.log("App render", countValue);

  // const countValue = countState[0];
  // const setCountValue = countState[1];

  // console.log("count", countState);

  const handleIncrement = () => {
    // countState[0]++;
    // count++;
    // console.log("handleIncrement_count", count);
    // document.getElementById("count").innerHTML = `Counter: ${count}`;
    // if (countValue !== undefined) {
    //   setCountValue(countValue + 1);
    // } else {
    //   setCountValue(1);
    // }
    // count2++;
    // setCountValue((prev) => {
    //   console.log("prev_1", prev);
    //   return prev + 1;
    // });
    // // console.log("App render_1", countValue);
    // setCountValue((prev) => {
    //   console.log("prev_2", prev);
    //   return prev + 1;
    // });
    // // console.log("App render_2", countValue);
    // setCountValue((prev) => {
    //   console.log("prev_3", prev);
    //   return prev + 1;
    // });
    // console.log("App render_3", countValue);
  };

  // console.log("App render", countValue);

  const handleDecrement = () => {
    // console.log("handleDecrement_count", count);
    // if (countValue !== undefined) {
    //   setCountValue(countValue - 1);
    // } else {
    //   setCountValue(1);
    // }
    // setCountValue(countValue - 1);
  };

  // b2; ta0 1 state color, de thay doi mau cua div khi click button change color
  const [color, setColor] = useState("red");

  // B1: thêm 1 event click cho button change color

  const changeColor = () => {
    const colors = [
      "red",
      "green",
      "blue",
      "yellow",
      "pink",
      "black",
      "gray",
      "orange",
    ];
    const randomIdx = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIdx];
    // random mau hex
    // B3: thay doi mau cua div
    setColor(randomColor);
  };

  return (
    <div>
      {/* <HomePage /> */}
      <h1>Lesson 04 - events and state</h1>
      <h2 id="count">Counter: {countValue}</h2>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
        }}
      ></div>
      <button onClick={changeColor}>Change color</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
