import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";

function App() {
  // <h1>Hello React</h1>
  // return React.createElement(
  //   "h1", // element type
  //   {
  //     className: "title",
  //     id: "title",
  //     onClick: () => {
  //       console.log("Hello React");
  //     },
  //   }, // element props
  //   "Hello React" // children
  // ); // react node

  // const ul = React.createElement("ul", null, [
  //   React.createElement("li", null, "1"),
  //   React.createElement("li", null, "2"),
  // ]);

  // const ulStyle = {
  //   color: "red",
  //   backgroundColor: "yellow",
  // };

  // const li1 = <li>1</li>;
  // const li2 = <li>2</li>;
  // const sum = (a, b) => a + b;

  // const ulWrapJSX = (
  //   <ul className="ul_container" id="" style={ulStyle}>
  //     {li1}
  //     {li2}
  //     {sum(1, 3)}
  //   </ul>
  // );

  // const greeting = () => {
  //   console.log("Hello React");
  // };

  return (
    <>
      <Header />
      {/* <h1 className="title"></h1> */}
      <UserList />
      <hr />
      <UserList />
      <Footer />
    </>
  );
}

export default App;
