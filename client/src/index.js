import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./data/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Heap {
  constructor() {
    this.heapNodes = [];
  }
  getParent(index) {
    const parentIndex = Math.floor((index + 1) / 2) - 1;
    return this.heapNodes[parentIndex];
  }
  add(value) {
    if (!this.heapNodes.length) {
      this.heapNodes.push(value);
      return;
    }
    const parent = this.getParent(this.heapNodes.length);
    if (value > parent) return;
    this.heapNodes.push(value);
  }
}

const newHeap = new Heap();

newHeap.add(125);
newHeap.add(85);
newHeap.add(30);
newHeap.add(98);
newHeap.add(65);
newHeap.add(100);
newHeap.add(10);
newHeap.add(90);
newHeap.add(15);
newHeap.add(155);
newHeap.add(28);

console.log(newHeap);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
