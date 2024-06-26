import React from "react";

import Expenses from "./components/Expenses";
import { expenses } from "./data/expenses";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
