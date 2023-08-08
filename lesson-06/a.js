function App() {
  const count = 1;

  function A() {
    function B() {
      function C() {
        function D() {
          console.log(count);
        }
        D();
      }
      C();
    }
    B();
  }
  A();
}

App();
