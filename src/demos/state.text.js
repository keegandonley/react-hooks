export default `import React, { useState } from 'react';
import text from './state.text'

function UseStateComponent() {
  const [stringVal, setStringVal] = useState('ha');
  return (
      <div className="App-header">
        <span>
          <strong>useState</strong> | Click below to update the state
        </span>
        <div onClick={() => setStringVal(\`\${stringVal}ha\`)}>
          {stringVal}
        </div>
		<pre className="App-Demo">
			{text}
		</pre>
      </div>
  );
}

export default UseStateComponent;`;
