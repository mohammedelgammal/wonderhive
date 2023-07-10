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
    if (path.length) {
      const segments = path.split("/");
      const newPath = segments.slice(1).join("/");
      const targetNode = this.children.find(
        (node) => node.value === segments[0]
      );
      if (targetNode) {
        targetNode.addChildNode(newPath);
      } else {
        const newNode = new Node(segments[0], this);
        this.children.push(newNode);
        newNode.addChildNode(newPath);
      }
    }
  }
  removeChildNode(path) {
    if (path.length) {
      const segments = path.split("/");
      const targetNode = this.children.find(
        (node) => node.value === segments[0]
      );
      if (targetNode) {
        if (targetNode.value === segments[segments.length - 1]) {
          const targetIndex = this.children.indexOf(targetNode);
          return this.children.splice(targetIndex, 1);
        }
        const newPath = segments.slice(1).join("/");
        targetNode.removeChildNode(newPath);
      }
    }
  }
}
class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue, null);
  }
  add(path) {
    this.root.addChildNode(path);
  }
  remove(path) {
    this.root.removeChildNode(path);
  }
}

const fileSystem = new Tree("/");
fileSystem.add("public/index.js");
fileSystem.add("documents/readme.md");
fileSystem.add("documents/manifest.md");
fileSystem.add("src/assets/css");
fileSystem.add("src/components");
fileSystem.add("src/containers");
fileSystem.add("src/containers");
fileSystem.add("src/containers");
fileSystem.add("src/common");
fileSystem.add("src/common/navbar");

fileSystem.remove("documents/readme.md");
fileSystem.remove("src");
fileSystem.remove("public");

console.log(fileSystem);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
