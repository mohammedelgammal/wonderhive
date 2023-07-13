import React from "react";
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
  findChildNode(value) {
    if (value === this.value) return this;
    if (value >= this.value && this.rightChildNode) {
      return this.rightChildNode.findChildNode(value);
    }
    if (value < this.value && this.leftChildNode) {
      return this.leftChildNode.findChildNode(value);
    }
  }
  removeChildNode(value) {
    console.log(value);
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value, null);
  }
  add(value) {
    this.root.addChildNode(value);
  }
  find(value) {
    return this.root.findChildNode(value);
  }
  remove(value) {
    this.root.removeChildNode(value);
  }
}

const newTree = new BinaryTree(10);

newTree.add(14);
newTree.add(6);
newTree.add(4);
newTree.add(8);
newTree.add(12);
newTree.add(16);
newTree.add(3);
newTree.add(5);

newTree.remove(5);

console.log(newTree.find(3));

console.log(newTree);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
