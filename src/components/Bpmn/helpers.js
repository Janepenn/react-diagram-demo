export const diagram = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1bfr7v4" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="11.1.0">
  <bpmn:collaboration id="Collaboration_09jbn3d">
    <bpmn:participant id="Participant_1kkni9m" name="Approval workflow" processRef="Process_0g3syqd" />
  </bpmn:collaboration>
  <bpmn:process id="Process_0g3syqd" isExecutable="false">
    <bpmn:startEvent id="Event_0afwe7o" name="start">
      <bpmn:outgoing>Flow_18ibpl2</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Activity_1sf612c" name="Initial review 1">
      <bpmn:incoming>Flow_18ibpl2</bpmn:incoming>
      <bpmn:outgoing>Flow_1t42x0k</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_0lebpj3" name="Initial review 2">
      <bpmn:incoming>Flow_1t42x0k</bpmn:incoming>
      <bpmn:outgoing>Flow_0ljqpsj</bpmn:outgoing>
    </bpmn:task>
    <bpmn:task id="Activity_0bom6n3" name="Final review">
      <bpmn:incoming>Flow_0ljqpsj</bpmn:incoming>
      <bpmn:outgoing>Flow_0decnkd</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="Event_1ha7tyt" name="end">
      <bpmn:incoming>Flow_0decnkd</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_18ibpl2" sourceRef="Event_0afwe7o" targetRef="Activity_1sf612c" />
    <bpmn:sequenceFlow id="Flow_1t42x0k" sourceRef="Activity_1sf612c" targetRef="Activity_0lebpj3" />
    <bpmn:sequenceFlow id="Flow_0ljqpsj" sourceRef="Activity_0lebpj3" targetRef="Activity_0bom6n3" />
    <bpmn:sequenceFlow id="Flow_0decnkd" sourceRef="Activity_0bom6n3" targetRef="Event_1ha7tyt" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_09jbn3d">
      <bpmndi:BPMNShape id="Participant_1kkni9m_di" bpmnElement="Participant_1kkni9m" isHorizontal="true">
        <dc:Bounds x="160" y="80" width="780" height="390" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0afwe7o_di" bpmnElement="Event_0afwe7o">
        <dc:Bounds x="232" y="252" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="239" y="295" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1sf612c_di" bpmnElement="Activity_1sf612c">
        <dc:Bounds x="320" y="230" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0lebpj3_di" bpmnElement="Activity_0lebpj3">
        <dc:Bounds x="480" y="230" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0bom6n3_di" bpmnElement="Activity_0bom6n3">
        <dc:Bounds x="640" y="230" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1ha7tyt_di" bpmnElement="Event_1ha7tyt">
        <dc:Bounds x="802" y="252" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="811" y="295" width="19" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_18ibpl2_di" bpmnElement="Flow_18ibpl2">
        <di:waypoint x="268" y="270" />
        <di:waypoint x="320" y="270" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1t42x0k_di" bpmnElement="Flow_1t42x0k">
        <di:waypoint x="420" y="270" />
        <di:waypoint x="480" y="270" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ljqpsj_di" bpmnElement="Flow_0ljqpsj">
        <di:waypoint x="580" y="270" />
        <di:waypoint x="640" y="270" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0decnkd_di" bpmnElement="Flow_0decnkd">
        <di:waypoint x="740" y="270" />
        <di:waypoint x="802" y="270" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;
