import React, { useState } from "react";
import "./Tree.css";

export default function Tree() {

  const [nodes, setNodes] = useState([7, 6, 5, 4, 3, 2, 1]);
  const [selected, setSelected] = useState(null); // index or null

  const handleNodeClick = (index) => {
    if (selected === null) {
      // nothing selected yet → select this one
      setSelected(index);
    } else if (selected === index) {
      // clicked the same node again → unselect
      setSelected(null);
    } else {
      // second node clicked → swap values
      setNodes((prev) => {
        const copy = [...prev];
        [copy[selected], copy[index]] = [copy[index], copy[selected]];
        return copy;
      });
      setSelected(null); // clear highlight after swap
    }
  };

  const nodeClass = (index) =>
    `node${selected === index ? " selected" : ""}`;

  return (
    // The main container for the entire tree
    <div className="tree">
      {/* The main branch that holds the root node and all its children */}
      <div className="branch">
        {/* ROOT NODE (index 0) */}
        <div
          className={nodeClass(0)}
          onClick={() => handleNodeClick(0)}
        >
          {nodes[0]}
        </div>

        {/* Connector lines from the root to its two children */}
        <div className="links" aria-hidden="true" />

        {/* ===== LEVEL 1: CHILDREN OF ROOT ===== */}
        <div className="children">
          {/* === LEFT CHILD OF ROOT (index 1) === */}
          <div className="child">
            {/* Node value */}
            <div
              className={nodeClass(1)}
              onClick={() => handleNodeClick(1)}
            >
              {nodes[1]}
            </div>

            {/* Connector from node 6 to its own children */}
            <div className="link2" aria-hidden="true" />

            {/* ===== LEVEL 2: CHILDREN OF NODE 6 ===== */}
            <div className="children">
              {/* Left child of node 6 → index 3 */}
              <div className="child">
                <div
                  className={nodeClass(3)}
                  onClick={() => handleNodeClick(3)}
                >
                  {nodes[3]}
                </div>
              </div>

              {/* Right child of node 6 → index 4 */}
              <div className="child">
                <div
                  className={nodeClass(4)}
                  onClick={() => handleNodeClick(4)}
                >
                  {nodes[4]}
                </div>
              </div>
            </div>
          </div>

          {/* === RIGHT CHILD OF ROOT (index 2) === */}
          <div className="child">
            {/* Node value */}
            <div
              className={nodeClass(2)}
              onClick={() => handleNodeClick(2)}
            >
              {nodes[2]}
            </div>

            {/* Connector from node 5 to its own children */}
            <div className="link2" aria-hidden="true" />

            {/* ===== LEVEL 2: CHILDREN OF NODE 5 ===== */}
            <div className="children">
              {/* Left child of node 5 → index 5 */}
              <div className="child">
                <div
                  className={nodeClass(5)}
                  onClick={() => handleNodeClick(5)}
                >
                  {nodes[5]}
                </div>
              </div>

              {/* Right child of node 5 → index 6 */}
              <div className="child">
                <div
                  className={nodeClass(6)}
                  onClick={() => handleNodeClick(6)}
                >
                  {nodes[6]}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of LEVEL 1 children */}
      </div>
      {/* End of main branch */}
    </div>
    // End of tree container
  );
}
