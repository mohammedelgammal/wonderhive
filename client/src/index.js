import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./data/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Node {
  constructor(value = null, priority = null, next = null) {
    this.value = value;
    this.next = next;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.first = null;
  }
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    if (!this.first || priority > this.first.priority) {
      newNode.next = this.first;
      this.first = newNode;
      return;
    }
    let currentNode = this.first;
    while (currentNode.next && priority < currentNode.next.priority) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode;
    currentNode.next = newNode;
  }
  dequeue() {
    const first = this.first;
    if (!first) return;
    this.first = this.first.next;
    return first;
  }
}

const newQueue = new PriorityQueue();

newQueue.enqueue("income", 75);
newQueue.enqueue("study", 99);
newQueue.enqueue("work", 83);
newQueue.enqueue("interview", 87);
// newQueue.enqueue(98);
// newQueue.enqueue(21);

console.log(newQueue);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
