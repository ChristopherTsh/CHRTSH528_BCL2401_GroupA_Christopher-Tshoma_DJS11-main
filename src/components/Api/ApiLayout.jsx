// import React, { useState } from "react";
// import Api from "./Api";

// export default function ApiLayout(){

//     const [post, setPosts] = useState([]);
//     const [error, setError ] = useState(null);

//     if(error){
//         return <div className="Error">{error}</div>;
//     }
// // 
//     return (
//         <div className="app-container">
//         <Api setPosts={setPosts} setError={setError} />
//         <h1>Api Layout</h1>
//         <dd className="centered-list">
//             {post.map((post) => (
//                 <dd key={post.id}>
//                 <h2>{post.title}</h2>
//                 <p>{post.body}</p>
//         </dd>
//             ))}
//         </dd>
//         </div>
//     );
// }