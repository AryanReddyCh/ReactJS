import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <ListGroup
        items={[]}
        heading={""}
        onSelectItem={function (_item: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
export default App;
