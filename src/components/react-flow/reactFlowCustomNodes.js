import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';
import { Link } from "gatsby"


const elements = [
  {
    id: '21',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 0, y: 0 },
  },
  {
    id: '22',
    type: 'special',
    position: { x: 0, y: 100 },
    data: { text: 'A custom "special" node' },
  }, 
  {
    id: '23',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 0, y: 200 },
  },
  {
    id: '24',
    type: 'default',
    data: { label: 'Default Node' },
    position: { x: 0, y: 300 },
  },
];

const customNodeStyles = {
  background: '#9CA8B3',
  color: '#FFF',
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
        style={{ top: '30%', borderRadius: 0 }}
      />
      <a href="https://www.google.ca/" target="_blank">link</a>
      <br />
      <Link to="/">Go back to the homepage</Link>

      <Handle
        type="source"
        position="right"
        id="b"
        style={{ top: '70%', borderRadius: 0 }}
      />
    </div>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};

export default () => {
  return (
    <div style={{ height: 400 }}>
      <ReactFlow elements={elements} nodeTypes={nodeTypes} />
    </div>
  );
};