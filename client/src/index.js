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
  findClosestChildNode() {
    if (!this.leftChildNode) return this;
    return this.leftChildNode.findClosestChildNode();
  }
  removeChildNode(value) {
    const targetNode = this.findChildNode(value);
    const parentNode = targetNode.parent;
    if (targetNode) {
      if (this.isLeafNode(targetNode)) {
        if (targetNode.value >= parentNode.value) {
          parentNode.rightChildNode = null;
          return;
        }
        if (targetNode.value < parentNode.value) {
          parentNode.leftChildNode = null;
          return;
        }
      }
      if (targetNode.leftChildNode && targetNode.rightChildNode) {
        const closestChildNode =
          targetNode.rightChildNode.findClosestChildNode();
        if (closestChildNode.value !== targetNode.rightChildNode.value) {
          this.removeChildNode(closestChildNode.value);
          targetNode.value = closestChildNode.value;
        } else {
          targetNode.value = targetNode.rightChildNode.value;
          targetNode.rightChildNode = targetNode.rightChildNode.rightChildNode;
        }
      } else {
        const childNode = targetNode.leftChildNode || targetNode.rightChildNode;
        targetNode.value = childNode.value;
        targetNode.leftChildNode = childNode.leftChildNode;
        targetNode.rightChildNode = childNode.rightChildNode;
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

const newTree = new BinaryTree(25);

newTree.add(20);
newTree.add(18);
newTree.add(24);
newTree.add(30);
newTree.add(28);
newTree.add(32);
newTree.add(31);
newTree.add(27);
newTree.add(29);

newTree.remove(30);

console.log(newTree);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
