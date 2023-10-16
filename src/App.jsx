import { useState } from "react";
import homeData from "./assets/home.json";
import "./App.css";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <div>
              {homeData.map((item) => 
                <div key={item.id}>
                  <h2>{item.name}</h2>
                  <h3>{item.email}</h3>
                </div>
              )
              }
            </div>
        </>
    );
}

export default App;
