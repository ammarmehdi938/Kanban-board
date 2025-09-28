export const STATUS = [
  { key: "todo", label: "Todo", id: 1, color: "blue" },
  { key: "inprogress", label: "In-Progress", id: 2, color: "yellow" },
  { key: "ineview", label: "In Review", id: 3, color: "orange" },
  { key: "completed", label: "Completed", id: 4, color: "green" },
  // { key: "yet to do", label: "Yet to do", id: 5, color: "black" },
  // { key: "yet to do", label: "Yet to do", id: 6, color: "black" },
  // { key: "yet to do", label: "Yet to do", id: 7, color: "black" },
  // { key: "yet to do", label: "Yet to do", id: 8, color: "black" }
];

export const PRIORITY = [
  { key: "high", label: "High", id: 4, color: "red" },
  { key: "medium", label: "Medium", id: 5, color: "brown" },
  { ley: "low", label: "Low", id: "6", color: "blue" },
];

export const ASSIGNEE = [
  { key: "KH", label: "Kazim Hussain", id: "7", color: "blue" },
  { key: "AM", label: "Ammar Mehdi", id: "8", color: "green" },
  { key: "ZH", label: "Zeeshan Haider", id: "9", color: "purple" },
];

// Utility: Random date in 2025
// function getRandomDate(startOffset = 0, range = 270) {
//   const start = new Date(2025, 0, 1); // Jan 1, 2025
//   const randomOffset = Math.floor(Math.random() * range) + startOffset;
//   const date = new Date(start);
//   date.setDate(start.getDate() + randomOffset);
//   return date.toDateString(); // Format: "Tue Sep 16 2025"
// }

// export const generateTasks = (count = 1000) => {
//   const tasks = [];

//   for (let i = 0; i < count; i++) {
//     const startDate = getRandomDate();
//     const endDate = getRandomDate(1, 10); // Short end after start

//     tasks.push({
//       id: i + 1,
//       title: `Task ${i + 1}`,
//       startDate,
//       endDate,
//       status: STATUS[Math.floor(Math.random() * STATUS.length)].key,
//       priority: PRIORITY[Math.floor(Math.random() * PRIORITY.length)].key,
//       assignee: ASSIGNEE[Math.floor(Math.random() * ASSIGNEE.length)].key,
//     });
//   }

//   return tasks;
// };
