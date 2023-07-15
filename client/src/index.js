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
  get leftDepth() {
    if (!this.leftChildNode) return 0;
    return this.leftChildNode.depth + 1;
  }
  get rightDepth() {
    if (!this.rightChildNode) return 0;
    return this.rightChildNode.depth + 1;
  }
  get depth() {
    return Math.max(this.leftDepth, this.rightDepth);
  }
  get balanceFactor() {
    return this.leftDepth - this.rightDepth;
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

class AVLTree extends BinaryTree {
  add(value) {
    super.add(value);
    let targetNode = this.root.findChildNode(value);
    while (targetNode) {
      this.balance(targetNode);
      targetNode = targetNode.parent;
    }
  }
  remove(value) {
    super.remove(value);
    this.balance(this.root);
  }
  balance(node) {
    if (node.balanceFactor > 1) {
      if (node.leftChildNode.rightChildNode) {
        this.rotateToLeft(node.leftChildNode);
        this.rotateToRight(node);
        return;
      } else {
        this.rotateToRight(node);
        return;
      }
    } else if (node.balanceFactor < -1) {
      if (node.rightChildNode.leftChildNode) {
        this.rotateToRight(node.rightChildNode);
        this.rotateToLeft(node);
        return;
      } else {
        this.rotateToLeft(node);
        return;
      }
    }
  }
  rotateToLeft(node) {
    
  }
  rotateToRight(node) {
    node.leftChildNode.rightChildNode = node;
    node = node.leftChildNode;
  }
}

const newAvl = new AVLTree(25);

newAvl.add(20);
newAvl.add(30);
newAvl.add(18);
newAvl.add(14);
newAvl.add(28);
newAvl.add(32);

console.log(newAvl);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
