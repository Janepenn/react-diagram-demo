import React, { useState } from 'react';
import { Select } from 'antd';

import Bpmn from '../Bpmn';
import Graph from '../Mxgraph';
import Flow from '../ReactFlow';
import Reaflow from '../Reaflow';
import './App.scss';

const DIAGRAM_TYPE = {
  BPMN: 'bmpn',
  MXGRAPH: 'mxgraph',
  REACT_FLOW: 'react flow',
  REAFLOW: 'Reaflow'
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
            { value: DIAGRAM_TYPE.REACT_FLOW, label: 'React flow' },
            { value: DIAGRAM_TYPE.REAFLOW, label: 'Reaflow' }
          ]}
        />
      </div>
      <div className="App__body">
        {type === DIAGRAM_TYPE.BPMN && <Bpmn />}
        {type === DIAGRAM_TYPE.MXGRAPH && <Graph />}
        {type === DIAGRAM_TYPE.REACT_FLOW && <Flow />}
        {type === DIAGRAM_TYPE.REAFLOW && <Reaflow />}
      </div>
    </div>
  );
};

export default App;
