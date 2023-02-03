import React, { useState, useEffect, useRef } from 'react';
import Modeler from 'bpmn-js/lib/Modeler';
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from 'bpmn-js-properties-panel';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css';
import './Bpmn.scss';

import { diagram as newDiagram } from './helpers';

const Diagram = () => {
  let modeler;
  const canvas = useRef();
  const property = useRef();

  const [diagram, setDiagram] = useState();

  const initialModeler = async () => {
    modeler = new Modeler({
      container: canvas.current,
      keyboard: { bindTo: document },
      propertiesPanel: {
        parent: property.current
      },
      additionalModules: [BpmnPropertiesPanelModule, BpmnPropertiesProviderModule]
    });

    await modeler.importXML(diagram);
    modeler.get('canvas').zoom('fit-viewport');
  };

  useEffect(() => {
    if (!diagram) {
      setDiagram(newDiagram);
    } else {
      initialModeler();
    }
  }, [diagram]);

  useEffect(() => {
    const resizeHandler = () => {
      modeler.get('canvas').zoom('fit-viewport');
    };
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  });

  return (
    <div className="Modeler">
      <div className="Modeler__canvas" ref={canvas}></div>
      <div className="Modeler__property" ref={property}></div>
    </div>
  );
};

export default Diagram;
