import { useState } from "react";

function WeatherMoodWidget() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>☀️ Sunny</h2> 
     {/* can be swapped with anything like rainy or cloudly and so on, to use emoji do win + period*/}
      <p>This weather makes me feel: </p> 
     {/*this is a text */}

      <button onClick={() => setCount(count + 1)}>
        Express Mood 
      </button>
  {/*this is above mood count giving instruction to the user */}
      <p>Mood Count: {count}</p>   {/*text displaying mood count above the emojis */}
    </div>
  );
}

export default WeatherMoodWidget;
