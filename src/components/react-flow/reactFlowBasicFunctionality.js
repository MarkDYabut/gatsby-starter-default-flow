import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';

const initialElements = [
  {
    id: '11',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  {
    id: '12',
    type: 'output',
    data: { label: 'Another Node' },
    position: { x: 100, y: 125 },
  },
];

export default () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <div style={{ height: 300 }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        deleteKeyCode={46} /* 'delete'-key */
      />
    </div>
  );
};