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
  isLeafNode(node) {
    return !node.leftChildNode && !node.rightChildNode;
  }
  removeChildNode(value) {
    const targetNode = this.findChildNode(value);
    const parentNode = targetNode.parent;
    if (targetNode) {
      if (this.isLeafNode(targetNode)) {
        if (targetNode.value >= parentNode.value)
          parentNode.rightChildNode = null;
        if (targetNode.value < parentNode.value)
          parentNode.leftChildNode = null;
      }
    } else {
      throw new Error("Could not find a match!");
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

newTree.remove(16);

console.log(newTree.find(5));

console.log(newTree);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
