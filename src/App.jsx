// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import Message from './Message'
// // import Child from './Child'


// // function App() {
// //   const [count, setCount] = useState(0)

  
// //   const incrementCount = () => {
// //     setCount(prev => prev + 1)
// //   }
// //   return (
// //     <>  
// //     {/* Fragmentation Short hand */}
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>

// //       <Message name="Veera" count={count} />
// //       <Child PassingCount={incrementCount} />
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/users")
//       .then(res => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         return res.json();
//       })
//       .then(data => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>User List</h2>
//       {users.map(user => (
//         <div key={user.id}>
//           {user.name} - {user.email}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import UsersPage from "./pages/UsersPage";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/userform" element={<UserForm/>} />
      <Route path="/logout" element={<UserForm/>} />
    </Routes>
  );
}

export default App;