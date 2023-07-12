import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./data/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Node {
  constructor(value, parent) {
    this.value = value;
    this.parent = parent;
    this.rightChildNode = null;
    this.leftChildNode = null;
  }

  addChildNode(value) {
    const newNode = new Node(value, this);
    if (value >= this.value) {
      if (this.rightChildNode) {
        return this.rightChildNode.addChildNode(value);
      }
      this.rightChildNode = newNode;
    } else {
      if (this.leftChildNode) {
        return this.leftChildNode.addChildNode(value);
      }
      this.leftChildNode = newNode;
    }
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value, null);
  }
  add(value) {
    this.root.addChildNode(value);
  }
}

const newTree = new BinaryTree(10);

newTree.add(11);
newTree.add(20);
newTree.add(9);
newTree.add(5);
newTree.add(21);
newTree.add(8);

console.log(newTree);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
