// // // 'use client';
// // // import { useState, useEffect } from "react";
// // // import TodoForm from "@/components/TodoForm"; // Assuming TodoForm is correctly importing priority
// // // import { CopilotPopup } from "@copilotkit/react-ui";
// // // import { FaCheck, FaTrash } from "react-icons/fa"; // Import icons for Complete and Delete

// // // import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";

// // // export default function Home() {
// // //   const [todos, setTodos] = useState([]);

// // //   useCopilotReadable({
// // //     description: "The current list of todos",
// // //     value: JSON.stringify(todos),
// // //   });

// // //   useCopilotAction({
// // //     name: "addtodo",
// // //     description: "Add the todo from user response",
// // //     parameters: [
// // //       {
// // //         name: "taskname",
// // //         type: "string",
// // //         description: "The name of task to add",
// // //         required: true,
// // //       },
// // //       {
// // //         name: "taskinfo",
// // //         type: "string",
// // //         description: "The information about task to add",
// // //         required: true,
// // //       },
// // //       {
// // //         name: "taskdate",
// // //         type: "string",
// // //         description: "The date of the task to add (YYYY-MM-DD format)",
// // //         required: true,
// // //       },
// // //       {
// // //         name: "tasktime",
// // //         type: "string",
// // //         description: "The time of the task to add (HH:MM format)",
// // //         required: true,
// // //       },
// // //       {
// // //         name: "taskpriority",
// // //         type: "string",
// // //         description: "The priority of the task to add (low, medium, high)",
// // //         enum: ["low", "medium", "high"],  // Enumeration for priority levels
// // //         required: true,
// // //       }
// // //     ],
// // //     handler: ({ taskname, taskinfo, taskdate, tasktime, taskpriority }) => {
// // //       // Combine date and time into a single datetime if necessary
// // //       const taskDeadline = `${taskdate} ${tasktime}`;

// // //       // Determine color based on priority
// // //       const taskColor = getPriorityColor(taskpriority);

// // //       // Create a new todo object with color based on priority
// // //       const newTodo = {
// // //         title: taskname,
// // //         description: taskinfo,
// // //         deadline: taskDeadline,
// // //         priority: taskpriority,
// // //         color: taskColor,  // Assign the color here
// // //       };
// // //       addTodo(newTodo);
// // //     }
// // //   });

// // //   // Function to map priority to color
// // //   const getPriorityColor = (priority) => {
// // //     switch (priority.toLowerCase()) {
// // //       case "high":
// // //         return "bg-red-200"; // Red for high priority
// // //       case "medium":
// // //         return "bg-yellow-200"; // Yellow for medium priority
// // //       case "low":
// // //         return "bg-green-200"; // Green for low priority
// // //       default:
// // //         return "bg-gray-200"; // Default color
// // //     }
// // //   };

// // //   const addTodo = (newTodo) => {
// // //     // Determine color based on priority
// // //     const taskColor = getPriorityColor(newTodo.priority);
    
// // //     // Assign the color to the newTodo object
// // //     const updatedTodo = { ...newTodo, color: taskColor, completed: false, createdAt: new Date() };
  
// // //     // Add the newTodo to the todo list and sort based on priority
// // //     const updatedTodos = [...todos, updatedTodo];
// // //     sortTodos(updatedTodos); // Sort the todos after adding
// // //   };
  
// // //   const deleteTodo = (index) => {
// // //     const updatedTodos = todos.filter((_, i) => i !== index);
// // //     setTodos(updatedTodos);
// // //   };

// // //   const completeTodo = (index) => {
// // //     const updatedTodos = [...todos];
  
// // //     // Toggle the completion status of the task
// // //     updatedTodos[index].completed = !updatedTodos[index].completed;
  
// // //     // If the task is marked as completed, move it to the end of the list
// // //     if (updatedTodos[index].completed) {
// // //       const completedTodo = updatedTodos.splice(index, 1)[0]; // Remove the task from its original position
// // //       updatedTodos.push(completedTodo); // Add the task to the end of the list
// // //     }
  
// // //     sortTodos(updatedTodos);
// // //     setTodos(updatedTodos);
// // //   };
  

// // //   const sortTodos = (updatedTodos) => {
// // //     const priorityOrder = { high: 1, medium: 2, low: 3 };
// // //     updatedTodos.sort((a, b) => {
// // //       if (a.completed !== b.completed) {
// // //         return a.completed ? 1 : -1; // Move completed tasks to the end
// // //       }
      
// // //       if (priorityOrder[a.priority.toLowerCase()] === priorityOrder[b.priority.toLowerCase()]) {
// // //         return new Date(a.deadline) - new Date(b.deadline);
// // //       }
// // //       return priorityOrder[a.priority.toLowerCase()] - priorityOrder[b.priority.toLowerCase()];
// // //     });
// // //     setTodos(updatedTodos);
// // //   };

// // //   const calculateRemainingTime = (deadline) => {
// // //     const now = new Date();
// // //     const deadlineDate = new Date(deadline);
// // //     const diff = deadlineDate - now;
// // //     const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
// // //     const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hours left

// // //     if (daysLeft >= 0 && hoursLeft >= 0) {
// // //       return `${daysLeft} days ${hoursLeft} hours left`;
// // //     }
// // //     return "Expired";
// // //   };

// // //   useEffect(() => {
// // //     sortTodos(todos); // Sort todos when the component mounts or updates
// // //   }, [todos]);

// // //   return (
// // //     <>
// // //    <div className="container mx-auto p-4 bg-gradient-to-b from-blue-200 to-blue-400 rounded-lg shadow-lg">
// // //   <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 drop-shadow-lg w-full">Todo List</h1>
  
// // //   <div className="flex justify-center mb-4">
// // //     <TodoForm addTodo={addTodo} className="w-1/2" /> {/* Adjust form width to 50% */}
// // //   </div>

// // //   <div className="mt-6">
// // //     <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center drop-shadow-md">Tasks</h2>
// // //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-2">
// // //       {todos.map((todo, index) => (
// // //         <div
// // //           key={index}
// // //           className={`border-2 border-blue-700 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${todo.color} flex flex-col justify-between`}
// // //         >
// // //           <div>
// // //             <h3 className={`text-xl font-bold text-gray-900 ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}`}>{todo.title}</h3>
// // //             <p className={`font-semibold text-gray-800 ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}>{todo.description}</p>
// // //             <p className={`font-semibold text-gray-800 ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}>
// // //               <strong>Deadline:</strong> {todo.deadline}
// // //             </p>
// // //             <p className={`font-semibold text-gray-800 ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}>
// // //               <strong>Remaining Time:</strong> {calculateRemainingTime(todo.deadline)}
// // //             </p>
// // //             <p className={`font-semibold text-gray-800 ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}>
// // //               <strong>Priority:</strong> {todo.priority}
// // //             </p>
// // //           </div>
// // //           <div className="flex justify-between items-center mt-4">
// // //             <button
// // //               onClick={() => completeTodo(index)}
// // //               className={`px-3 py-2 rounded-md text-white ${todo.completed ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} shadow-md transition-colors duration-200`}
// // //             >
// // //               <FaCheck /> {/* Complete icon */}
// // //             </button>
// // //             <button
// // //               onClick={() => deleteTodo(index)}
// // //               className="px-3 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-colors duration-200"
// // //             >
// // //               <FaTrash /> {/* Delete icon */}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   </div>
// // // </div>
// // // <CopilotPopup
// // //   instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
// // //   labels={{
// // //     title: "Priority Based TODO LIST",
// // //     initial: "What's your plan?",
// // //   }}
// // // />

// // //     </>
// // //   );
// // // }




// 'use client';
// import { useState, useEffect } from 'react';
// import TodoForm from '@/components/TodoForm'; 
// import { CopilotPopup } from '@copilotkit/react-ui';
// import { FaCheck, FaTrash } from 'react-icons/fa'; 

// import { useCopilotReadable, useCopilotAction } from '@copilotkit/react-core';

// export default function Home() {
//   const [todos, setTodos] = useState([]);

  // useCopilotReadable({
  //   description: 'The current list of todos',
  //   value: JSON.stringify(todos),
  // });

  // useCopilotAction({
  //   name: 'addtodo',
  //   description: 'Add the todo from user response',
  //   parameters: [
  //     {
  //       name: 'taskname',
  //       type: 'string',
  //       description: 'The name of task to add',
  //       required: true,
  //     },
  //     {
  //       name: 'taskinfo',
  //       type: 'string',
  //       description: 'The information about task to add',
  //       required: true,
  //     },
  //     {
  //       name: 'taskdate',
  //       type: 'string',
  //       description: 'The date of the task to add (YYYY-MM-DD format)',
  //       required: true,
  //     },
  //     {
  //       name: 'tasktime',
  //       type: 'string',
  //       description: 'The time of the task to add (HH:MM format)',
  //       required: true,
  //     },
  //     {
  //       name: 'taskpriority',
  //       type: 'string',
  //       description: 'The priority of the task to add (low, medium, high)',
  //       enum: ['low', 'medium', 'high'],
  //       required: true,
  //     },
  //   ],
  //   handler: ({ taskname, taskinfo, taskdate, tasktime, taskpriority }) => {
  //     const taskDeadline = `${taskdate} ${tasktime}`;
  //     const taskColor = getPriorityColor(taskpriority);
  //     const newTodo = {
  //       title: taskname,
  //       description: taskinfo,
  //       deadline: taskDeadline,
  //       priority: taskpriority,
  //       color: taskColor,
  //     };
  //     addTodo(newTodo);
  //   },
  // });

  // const getPriorityColor = (priority) => {
  //   switch (priority.toLowerCase()) {
  //     case 'high':
  //       return 'bg-red-200';
  //     case 'medium':
  //       return 'bg-yellow-200';
  //     case 'low':
  //       return 'bg-green-200';
  //     default:
  //       return 'bg-gray-200';
  //   }
  // };

//   const addTodo = (newTodo) => {
//     const taskColor = getPriorityColor(newTodo.priority);
//     const updatedTodo = { ...newTodo, color: taskColor, completed: false, createdAt: new Date() };
//     const updatedTodos = [...todos, updatedTodo];
//     sortTodos(updatedTodos);
//   };

//   const deleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   const completeTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].completed = !updatedTodos[index].completed;
//     if (updatedTodos[index].completed) {
//       const completedTodo = updatedTodos.splice(index, 1)[0];
//       updatedTodos.push(completedTodo);
//     }
//     sortTodos(updatedTodos);
//     setTodos(updatedTodos);
//   };

//   const sortTodos = (updatedTodos) => {
//     const priorityOrder = { high: 1, medium: 2, low: 3 };
//     updatedTodos.sort((a, b) => {
//       if (a.completed !== b.completed) {
//         return a.completed ? 1 : -1;
//       }
//       if (priorityOrder[a.priority.toLowerCase()] === priorityOrder[b.priority.toLowerCase()]) {
//         return new Date(a.deadline) - new Date(b.deadline);
//       }
//       return priorityOrder[a.priority.toLowerCase()] - priorityOrder[b.priority.toLowerCase()];
//     });
//     setTodos(updatedTodos);
//   };

//   const calculateRemainingTime = (deadline) => {
//     const now = new Date();
//     const deadlineDate = new Date(deadline);
//     const diff = deadlineDate - now;
//     const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

//     if (daysLeft >= 0 && hoursLeft >= 0) {
//       return `${daysLeft} days ${hoursLeft} hours left`;
//     }
//     return 'Expired';
//   };

//   const getCategory = (deadline) => {
//     const now = new Date();
//     const taskDate = new Date(deadline);
//     const today = now.setHours(0, 0, 0, 0);
//     const tomorrow = new Date(today);
//     tomorrow.setDate(tomorrow.getDate() + 1);

//     if (taskDate.setHours(0, 0, 0, 0) === today) {
//       return 'today';
//     } else if (taskDate.setHours(0, 0, 0, 0) === tomorrow.getTime()) {
//       return 'tomorrow';
//     } else {
//       return 'upcoming';
//     }
//   };

//   useEffect(() => {
//     sortTodos(todos);
//   }, [todos]);

//   const categorizeTodos = (todos) => {
//     const categorized = { today: [], tomorrow: [], upcoming: [] };
//     todos.forEach((todo) => {
//       const category = getCategory(todo.deadline);
//       categorized[category].push(todo);
//     });
//     return categorized;
//   };

//   const categorizedTodos = categorizeTodos(todos);

//   return (
//     <>
//       <div className="container min-h-screen p-4 bg-gradient-to-b from-blue-200 to-blue-400 rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 drop-shadow-lg w-full">Todo List</h1>
//         <div className="flex justify-center mb-4">
//           <TodoForm addTodo={addTodo} className="w-1/2" />
//         </div>

//         <div className="mt-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center drop-shadow-md">Today</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-2">
//             {categorizedTodos.today.map((todo, index) => (
//               <div
//                 key={index}
//                 className={`border-2 border-blue-700 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${todo.color} flex flex-col justify-between`}
//               >
//                 <div>
//                   <h3 className={`text-xl font-bold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
//                     {todo.title}
//                   </h3>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     {todo.description}
//                   </p>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     <strong>Deadline:</strong> {todo.deadline}
//                   </p>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     <strong>Remaining Time:</strong> {calculateRemainingTime(todo.deadline)}
//                   </p>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     <strong>Priority:</strong> {todo.priority}
//                   </p>
//                 </div>
//                 <div className="flex justify-between items-center mt-4">
//                   <button
//                     onClick={() => completeTodo(index)}
//                     className={`px-3 py-2 rounded-md text-white ${todo.completed ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} shadow-md transition-colors duration-200`}
//                   >
//                     <FaCheck />
//                   </button>
//                   <button
//                     onClick={() => deleteTodo(index)}
//                     className="px-3 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-colors duration-200"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center drop-shadow-md">Tomorrow</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-2">
//             {categorizedTodos.tomorrow.map((todo, index) => (
//               <div
//                 key={index}
//                 className={`border-2 border-blue-700 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${todo.color} flex flex-col justify-between`}
//               >
//                 {/* Same structure for tomorrow tasks */}
//                 <div>
//                   <h3 className={`text-xl font-bold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
//                     {todo.title}
//                   </h3>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     {todo.description}
//                   </p>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     <strong>Deadline:</strong> {todo.deadline}
//                   </p>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     <strong>Remaining Time:</strong> {calculateRemainingTime(todo.deadline)}
//                   </p>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     <strong>Priority:</strong> {todo.priority}
//                   </p>
//                 </div>
//                 <div className="flex justify-between items-center mt-4">
//                   <button
//                     onClick={() => completeTodo(index)}
//                     className={`px-3 py-2 rounded-md text-white ${todo.completed ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} shadow-md transition-colors duration-200`}
//                   >
//                     <FaCheck />
//                   </button>
//                   <button
//                     onClick={() => deleteTodo(index)}
//                     className="px-3 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-colors duration-200"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center drop-shadow-md">Upcoming</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-2">
//             {categorizedTodos.upcoming.map((todo, index) => (
//               <div
//                 key={index}
//                 className={`border-2 border-blue-700 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${todo.color} flex flex-col justify-between`}
//               >
//                 {/* Same structure for upcoming tasks */}
//                 <div>
//                   <h3 className={`text-xl font-bold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
//                     {todo.title}
//                   </h3>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     {todo.description}
//                   </p>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     <strong>Deadline:</strong> {todo.deadline}
//                   </p>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     <strong>Remaining Time:</strong> {calculateRemainingTime(todo.deadline)}
//                   </p>
//                   <p className={`font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
//                     <strong>Priority:</strong> {todo.priority}
//                   </p>
//                 </div>
//                 <div className="flex justify-between items-center mt-4">
//                   <button
//                     onClick={() => completeTodo(index)}
//                     className={`px-3 py-2 rounded-md text-white ${todo.completed ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} shadow-md transition-colors duration-200`}
//                   >
//                     <FaCheck />
//                   </button>
//                   <button
//                     onClick={() => deleteTodo(index)}
//                     className="px-3 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-colors duration-200"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

      // <CopilotPopup
      //   instructions="You are assisting the user as best as you can. Answer in the best way possible given the data you have."
      //   labels={{
      //     title: 'Priority Based TODO LIST',
      //     initial: "What's your plan?",
      //   }}
      // />
//     </>
//   );
// }
 


'use client';
import { useState, useEffect } from "react";
import TodoForm from "@/components/TodoForm"; // Assuming the path is correct
import { FaCheck, FaTrash } from "react-icons/fa"; // Import icons for Complete and Delete
import { CopilotPopup } from '@copilotkit/react-ui';
import { useCopilotReadable, useCopilotAction } from '@copilotkit/react-core';
import { v4 as uuidv4 } from 'uuid'; // Generate unique IDs for each todo

export default function Home() {
  const [todos, setTodos] = useState([]);

  useCopilotReadable({
    description: 'The current list of todos',
    value: JSON.stringify(todos),
  });

  // useCopilotAction({
  //   name: 'addtodo',
  //   description: 'Add the todo from user response',
  //   parameters: [
  //     {
  //       name: 'taskname',
  //       type: 'string',
  //       description: 'The name of task to add',
  //       required: true,
  //     },
  //     {
  //       name: 'taskinfo',
  //       type: 'string',
  //       description: 'The information about task to add',
  //       required: true,
  //     },
  //     {
  //       name: 'taskdate',
  //       type: 'string',
  //       description: 'The date of the task to add (YYYY-MM-DD format)',
  //       required: true,
  //     },
  //     {
  //       name: 'tasktime',
  //       type: 'string',
  //       description: 'The time of the task to add (HH:MM format)',
  //       required: true,
  //     },
  //     {
  //       name: 'taskpriority',
  //       type: 'string',
  //       description: 'The priority of the task to add (low, medium, high)',
  //       enum: ['low', 'medium', 'high'],
  //       required: true,
  //     },
  //     {
  //       name: 'taskcomplete',
  //       type: 'string',
  //       description: 'The task is completed',
  //       // required : false
  //     },
  //     {
  //       name: 'taskdelete',
  //       type: 'string',
  //       description: 'Delete the task',
  //       // required: false
  //     },
  //   ],
  //   handler: ({ taskname, taskinfo, taskdate, tasktime, taskpriority,taskcomplete,taskdelete }) => {
  //     const taskDeadline = `${taskdate} ${tasktime}`;
  //     const taskColor = getPriorityColor(taskpriority);
  //     const newTodo = {
  //       title: taskname,
  //       description: taskinfo,
  //       deadline: taskDeadline,
  //       priority: taskpriority,
  //       completeTodo : taskcomplete,
  //       deleteTodo : taskdelete,
  //       color: taskColor,
  //     };
  //     addTodo(newTodo);
  //     completeTodo(id);
  //     deleteTodo(id);
  //   },
  // });


  useCopilotAction({
    name: 'addtodo',
    description: 'Add the todo from user response',
    parameters: [
      {
        name: 'taskname',
        type: 'string',
        description: 'The name of the task to add',
        required: true,
      },
      {
        name: 'taskinfo',
        type: 'string',
        description: 'The information about the task to add',
        required: true,
      },
      {
        name: 'taskdate',
        type: 'string',
        description: 'The date of the task to add (YYYY-MM-DD format)',
        required: true,
      },
      {
        name: 'tasktime',
        type: 'string',
        description: 'The time of the task to add (HH:MM format)',
        required: true,
      },
      {
        name: 'taskpriority',
        type: 'string',
        description: 'The priority of the task to add (low, medium, high)',
        enum: ['low', 'medium', 'high'],
        required: true,
      },
      {
        name: 'taskcomplete',
        type: 'string',
        description: 'The task is completed (true/false)',
        required: false,
      },
      {
        name: 'taskdelete',
        type: 'string',
        description: 'Delete the task (true/false)',
        required: false,
      },
    ],
    handler: ({ taskname, taskinfo, taskdate, tasktime, taskpriority, taskcomplete, taskdelete }) => {
      const taskDeadline = `${taskdate} ${tasktime}`;
      const taskColor = getPriorityColor(taskpriority); // Ensure this function is defined elsewhere
      const newTodo = {
        title: taskname,
        description: taskinfo,
        deadline: taskDeadline,
        priority: taskpriority,
        color: taskColor,
      };
  
      const id = addTodo(newTodo); // Ensure addTodo returns the id of the new task
  
      // Mark task as complete if taskcomplete is provided
      if (taskcomplete === 'true') {
        completeTodo(id); // Ensure completeTodo is defined
      }
  
      // Delete task if taskdelete is provided
      if (taskdelete === 'true') {
        deleteTodo(id); // Ensure deleteTodo is defined
      }
    },
  });
  
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-200';
      case 'medium':
        return 'bg-yellow-200';
      case 'low':
        return 'bg-green-200';
      default:
        return 'bg-gray-200';
    }
  };

  const addTodo = (newTodo) => {
        const taskColor = getPriorityColor(newTodo.priority);
    const updatedTodo = { ...newTodo,  color: taskColor, id: uuidv4(), completed: false, createdAt: new Date() };
    const updatedTodos = [...todos, updatedTodo];
    sortTodos(updatedTodos); // Sort the todos after adding
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }; // Toggle completed status
      }
      return todo;
    });
    sortTodos(updatedTodos);
  };

  const sortTodos = (updatedTodos) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    updatedTodos.sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1; // Show incomplete tasks first
      if (priorityOrder[a.priority] === priorityOrder[b.priority]) {
        return new Date(a.deadline) - new Date(b.deadline);
      }
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    setTodos(updatedTodos);
  };

  // const filterTodosByDate = (daysFromNow) => {
  //   const targetDate = new Date();
  //   targetDate.setDate(targetDate.getDate() + daysFromNow);
  //   return todos.filter(todo => {
  //     const todoDate = new Date(todo.deadline);
  //     return todoDate.toDateString() === targetDate.toDateString();
  //   });
  // };


  const filterTodosByDateAndPriority = (daysFromNow) => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysFromNow);
  
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  
    return todos
      .filter(todo => {
        const todoDate = new Date(todo.deadline);
        return todoDate.toDateString() === targetDate.toDateString();
      })
      .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  };
  

  const filterUpcomingTodos = () => {
    const today = new Date();
    return todos.filter(todo => new Date(todo.deadline) > today);
  };

  const calculateRemainingTime = (deadline) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const diff = deadlineDate - now;
    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return daysLeft >= 0 && hoursLeft >= 0 ? `${daysLeft} days ${hoursLeft} hours left` : "Expired";
  };

  useEffect(() => {
    sortTodos(todos);
  }, [todos]);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-blue-200 to-blue-400 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 drop-shadow-lg">Priority-Based Todo List</h1>
      
      {/* Add Todo Form */}
      <div className="flex justify-center mb-8">
        <TodoForm addTodo={addTodo} />
      </div>

      {/* Section for Today's Tasks */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Today's Tasks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterTodosByDateAndPriority(0).map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              calculateRemainingTime={calculateRemainingTime}
            />
          ))}
        </div>
      </div>

      {/* Section for Tomorrow's Tasks */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Tomorrow's Tasks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterTodosByDateAndPriority(1).map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              calculateRemainingTime={calculateRemainingTime}
            />
          ))}
        </div>
      </div>

      {/* Section for Upcoming Tasks */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Upcoming Tasks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterUpcomingTodos().map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              calculateRemainingTime={calculateRemainingTime}
            />
          ))}
        </div>
      </div>
      <CopilotPopup
        instructions="You are assisting the user as best as you can. Answer in the best way possible given the data you have."
        labels={{
          title: 'Priority Based TODO LIST',
          initial: "What's your plan?",
        }}
      />
    </div>
  );
}

function TodoCard({ todo, completeTodo, deleteTodo, calculateRemainingTime }) {
  return (
    <div className={`border-2 border-blue-700 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${todo.color} flex flex-col justify-between`}>
      <div>
        <h3 className={`text-xl font-bold ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}`}>{todo.title}</h3>
        <p className={`font-semibold ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}>{todo.description}</p>
        <p className={`font-semibold ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}>
          <strong>Deadline:</strong> {todo.deadline}
        </p>
        <p className={`font-semibold ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}>
          <strong>Remaining Time:</strong> {calculateRemainingTime(todo.deadline)}
        </p>
        <p className={`font-semibold ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}>
          <strong>Priority:</strong> {todo.priority}
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => completeTodo(todo.id)} // Use the unique id to complete the todo
          className={`px-3 py-2 rounded-md text-white ${todo.completed ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} shadow-md transition-colors duration-200`}
        >
          <FaCheck />
        </button>
        <button
          onClick={() => deleteTodo(todo.id)} // Use the unique id to delete the todo
          className="px-3 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-colors duration-200"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
