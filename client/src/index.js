import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./data/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Node {
  constructor(value, parent) {
    this.value = value;
    this.children = [];
    this.parent = parent;
  }
  addChildNode(path) {
    const segments = path.split("/");
    if (path.length) {
      if (!this.children.length) {
        const newNode = new Node(segments[0], this);
        this.children.push(newNode);
        const newPath = segments.slice(1).join("/");
        newNode.addChildNode(newPath);
      } else {
        const targetNode = this.children.find(
          (node) => node.value === segments[0]
        );
        if (targetNode) {
          console.log("matching node is", targetNode);
          const newPath = segments.slice(1).join("/");
          targetNode.addChildNode(newPath);
        } else {
          console.log("no matching nodes");
          const newNode = new Node(segments[0], this);
          this.children.push(newNode);
          const newPath = segments.slice(1).join("/");
          newNode.addChildNode(newPath);
        }
      }
    } else {
      return;
    }
  }
  removeChildNode(value) {
    const targetIndex = this.children.indexOf(value);
    this.children.slice(targetIndex);
  }
}
class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue, null);
  }
  add(path) {
    this.root.addChildNode(path);
  }
  remove(path) {}
}

const fileSystem = new Tree("/");
fileSystem.add("public/index.js");
fileSystem.add("documents/readme.md");
fileSystem.add("documents/manifest.md");
fileSystem.add("src/assets/css");
console.log(fileSystem.root);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
