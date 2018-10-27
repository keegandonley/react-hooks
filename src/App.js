import React from 'react';
import './App.css';
import UseStateComponent from './demos/useStateComponent';
import UseEffectCleanup from './demos/useEffectCleanup';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <span>
          This site was built using: 
          <div className="row">
            <div className="version">
              react<br />{React.version}
            </div>
            <div className="version">
              create-react-app<br />{process.env.REACT_APP_VERSION}
            </div>
          </div>
          <br />
          It is built without using any classes and relies only on <a href="https://reactjs.org/docs/hooks-intro.html">hooks</a>
          <br />
          <br />
          <small>
            (Some code examples have had non-essential code simplified or removed, such as link urls)
          </small>
        </span>
      </div>
      <UseStateComponent />
      <UseEffectCleanup />
    </div>
  );
}

export default App;
