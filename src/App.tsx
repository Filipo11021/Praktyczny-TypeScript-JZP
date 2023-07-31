import "./App.css";
import { Button, Card } from "./components/Button";
import { isKeyOfObject } from "./utils/isKeyOfObject";
import { IsNonNullable } from "./utils/nonNullable";

const arr = [1,6,"a", undefined]

const filteredArr = arr.filter(IsNonNullable)

console.log(filteredArr)

const test = {
  test: "halo0",
  qq: "a"
}

for (const key in test) {
  if (isKeyOfObject(key, test)) {
    test[key]
  }
}

function App() {
  return (
    <div>
      <h1>halo</h1>
      <Button as="button" onClick={() => console.log("test")}>
        test
      </Button>

      <Button as="link" href="/test">
        link
      </Button>

      <Card
        awayTeam={{ name: "test" }}
        homeTeam={{ name: "test2" }}
        type="beforeGame"
        timer="00:00"
      />
      <Card
        awayTeam={{ name: "test" }}
        homeTeam={{ name: "test2" }}
        type="gameInProgress"
        score={1}
      />
    </div>
  );
}

export default App;
