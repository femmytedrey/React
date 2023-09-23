import Button from "./components/button"

function App() {
  return (
    <div>
      <Button color = "info" onClick={() => console.log("Femi_Dev")}>My Button</Button>
      <Button color = "primary" onClick={() => console.log("Femi_Dev")}>My Button</Button>
    </div>
  );
}

export default App;
