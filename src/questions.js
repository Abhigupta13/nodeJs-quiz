const questions = [
  {
    id: 1,
    question: "What is the main benefit of using asynchronous programming in Node.js?",
    options: [
      { id: 'A', text: "It simplifies debugging." },
      { id: 'B', text: "It allows handling multiple requests efficiently without blocking." },
      { id: 'C', text: "It reduces the need for error handling." },
      { id: 'D', text: "It improves code readability." }
    ]
  },
  {
    id: 2,
    question: "What is the role of the event loop in Node.js?",
    options: [
      { id: 'A', text: "To handle HTTP requests." },
      { id: 'B', text: "To manage asynchronous operations and execute callback functions." },
      { id: 'C', text: "To execute synchronous code in a non-blocking manner." },
      { id: 'D', text: "To parse and interpret JavaScript code." }
    ]
  },
  {
    id: 3,
    question: "What is the purpose of the `process` object in Node.js?",
    options: [
      { id: 'A', text: "To manage system processes." },
      { id: 'B', text: "To provide information about the current Node.js process." },
      { id: 'C', text: "To handle file system operations." },
      { id: 'D', text: "To create child processes." }
    ]
  },
  {
    id: 4,
    question: "Which method is used to handle errors in asynchronous operations in Node.js?",
    options: [
      { id: 'A', text: "try...catch" },
      { id: 'B', text: "async/await" },
      { id: 'C', text: "callback functions" },
      { id: 'D', text: "Promise.catch()" }
    ]
  },
  {
    id: 5,
    question: "What is the purpose of the `util` module in Node.js?",
    options: [
      { id: 'A', text: "To create utility functions for debugging." },
      { id: 'B', text: "To handle HTTP requests." },
      { id: 'C', text: "To manage file system operations." },
      { id: 'D', text: "To interact with the operating system." }
    ]
  },
  {
    id: 6,
    question: "Which HTTP method is used to retrieve data from a server in Node.js?",
    options: [
      { id: 'A', text: "GET" },
      { id: 'B', text: "POST" },
      { id: 'C', text: "PUT" },
      { id: 'D', text: "DELETE" }
    ]
  },
  {
    id: 7,
    question: "What is the purpose of the `cluster` module in Node.js?",
    options: [
      { id: 'A', text: "To handle file system operations." },
      { id: 'B', text: "To create child processes for parallel execution." },
      { id: 'C', text: "To manage database connections." },
      { id: 'D', text: "To implement routing in web applications." }
    ]
  },
  {
    id: 8,
    question: "Which event is emitted when a new connection is established in a Node.js HTTP server?",
    options: [
      { id: 'A', text: "request" },
      { id: 'B', text: "connect" },
      { id: 'C', text: "connection" },
      { id: 'D', text: "open" }
    ]
  },
  {
    id: 9,
    question: "What is the purpose of the `url` module in Node.js?",
    options: [
      { id: 'A', text: "To handle file system operations." },
      { id: 'B', text: "To parse URL strings and construct URL objects." },
      { id: 'C', text: "To interact with the operating system." },
      { id: 'D', text: "To manage database connections." }
    ]
  },
  {
    id: 10,
    question: "What is the purpose of the `child_process` module in Node.js?",
    options: [
      { id: 'A', text: "To create, execute, and manage child processes." },
      { id: 'B', text: "To handle HTTP requests." },
      { id: 'C', text: "To manage file system operations." },
      { id: 'D', text: "To interact with the operating system." }
    ]
  }
];


const correctOptions = {
  1: 'B',
  2: 'B',
  3: 'B',
  4: 'D',
  5: 'A',
  6: 'A',
  7: 'B',
  8: 'C',
  9: 'B',
  10: 'A',
};


module.exports = {correctOptions, questions};
