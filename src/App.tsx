import Button from "./components/Button";

function App() {
  return (
    <Button
      title="Log in"
      styleType="SECONDARY"
      disabled
      onClick={() => {
        console.log("click");
      }}
    />
  );
}

export default App;
