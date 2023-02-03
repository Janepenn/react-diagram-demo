import React from 'react';

import Bpmn from '../Bpmn';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="App__select">text</div>
      <div className="App__diagram">
        <Bpmn />
      </div>
    </div>
  );
};

export default App;
