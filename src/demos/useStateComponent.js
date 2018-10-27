import React, { useState } from 'react';
import text from './state.text'

function UseStateComponent() {
  const [stringVal, setStringVal] = useState('ha');
  return (
      <div className="App-header">
        <span>
          <strong><a href="https://reactjs.org/docs/hooks-state.html">useState</a></strong> | Click below to update the state
        </span>
        <div onClick={() => setStringVal(`${stringVal}ha`)}>
          {stringVal}
        </div>
		<pre className="App-Demo">
			{text}
		</pre>
      </div>
  );
}

export default UseStateComponent;
