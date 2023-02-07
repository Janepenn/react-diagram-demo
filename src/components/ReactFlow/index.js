import React from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import Sider from './Sider';
import Graph from './Graph';
import Modal from './components/Modal';
// 引入 Provider
import { FlowContextProvider } from './context';

import './flow.scss';
import Toolbar from './Toolbar';

const FlowPage = () => {
  return (
    <div className="container">
      <FlowContextProvider>
        <ReactFlowProvider>
          <Toolbar />
          <div className="main">
            <Sider />
            <Graph />
          </div>
          <Modal />
        </ReactFlowProvider>
      </FlowContextProvider>
    </div>
  );
};

export default FlowPage;
