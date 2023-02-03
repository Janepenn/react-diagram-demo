import React, { useState } from 'react';
import { Select } from 'antd';

import Bpmn from '../Bpmn';
import Graph from '../Mxgraph';
import './App.scss';

const DIAGRAM_TYPE = {
  BPMN: 'bmpn',
  MXGRAPH: 'mxgraph',
  REACT_FLOW: 'react flow'
};

const App = () => {
  const [type, setType] = useState(DIAGRAM_TYPE.BPMN);
  return (
    <div className="App">
      <div className="App__header">
        <Select
          value={type}
          style={{ width: 120 }}
          onChange={(value) => setType(value)}
          options={[
            { value: DIAGRAM_TYPE.BPMN, label: 'Bpmn' },
            { value: DIAGRAM_TYPE.MXGRAPH, label: 'Mxgraph' },
            { value: DIAGRAM_TYPE.REACT_FLOW, label: 'React flow' }
          ]}
        />
      </div>
      <div className="App__body">
        {type === DIAGRAM_TYPE.BPMN && <Bpmn />}
        {type === DIAGRAM_TYPE.MXGRAPH && <Graph />}
      </div>
    </div>
  );
};

export default App;
