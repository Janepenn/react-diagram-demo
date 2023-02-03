import React, { useEffect, useRef } from 'react';
import mx from 'mxgraph';

import './Mxgraph.scss';

const mxgraph = mx({
  mxBasePath: '/static/mxgraph'
});

const { mxClient, mxUtils, mxEvent, mxGraph, mxRubberband } = mxgraph;

const Graph = () => {
  const container = useRef();

  useEffect(() => {
    if (!mxClient.isBrowserSupported()) {
      mxUtils.error('Browser is not supported!', 200, false);
    } else {
      mxEvent.disableContextMenu(container.current);
      const graph = new mxGraph(container.current);
      new mxRubberband(graph);
      const parent = graph.getDefaultParent();
      graph.getModel().beginUpdate();

      try {
        const v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
        const v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
        graph.insertEdge(parent, null, '', v1, v2);
      } finally {
        graph.getModel().endUpdate();
      }
    }
  });

  return <div className="Graph" ref={container}></div>;
};

export default Graph;
