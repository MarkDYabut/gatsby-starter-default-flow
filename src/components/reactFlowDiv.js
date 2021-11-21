import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';
import { Link } from "gatsby"

const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: <Link to="/page-2/">Go to page 2</Link> },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <Link to="/page-3/">Go to page 3</Link> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'special', // output node
    data: { text: 'A custom "special" node' },
    position: { x: 250, y: 250 },
  },
  {
    id: '4',
    type: 'output', // output node
    data: { label: <Link to="/page-5/">Go to page 5</Link> },
    position: { x: 450, y: 375 },
  },
  {
    id: '5',
    type: 'output', // output node
    data: { label: <Link to="/page-6/">Go to page 6</Link> },
    position: { x: 450, y: 175 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4', animated: true  },
  { id: 'e3-5', source: '3', target: '5', animated: true  },

];

const customNodeStyles = {
  background: '#9CA8B3',
  color: '#6c6a94',
  padding: 10,
};

const CustomNodeComponent = ({ data }) => {
  return (
    <div style={customNodeStyles}>
      <Handle type="target" position="left" style={{ borderRadius: 0 }} />
      <div>{data.text}</div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: '50%', borderRadius: 0 }}
      />
      <a href="https://www.google.ca/" target="_blank">link</a>
      <br />
      <Link to="/page-4/">Go to page 4</Link>
    </div>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};

export default () => (
  <div style={{ height: 500 }}>
    <ReactFlow 
      elements={elements} 
      nodeTypes={nodeTypes} 
      elementsSelectable={true}
      nodesDraggable={true}
      paneMoveable={false}
      zoomOnScroll={false}
    />
  </div>
);