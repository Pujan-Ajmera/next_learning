// this below section is just used to make a counter app thing 
// "use client";
// import { count } from 'console';
// import React, { useState } from 'react';
// export default function Home() {
//   // let a = "jayesh"
//   const [counter,setCounter] = useState(0);// default value 0 aapi dese and then we do increment thing thats it
//   return (
//     <>
//     <h1>{counter}</h1>
//     <button className='bg-blue-500' onClick={()=>{
//       setCounter(counter+1)
//     }}>Increment</button>
//     </>
//   );
// }

"use client";
import { count } from 'console';
import React, { useState } from 'react';
export default function Home() {
  // let a = "jayesh"
  const [counter,setCounter] = useState(0);// default value 0 aapi dese and then we do increment thing thats it
  return (
    <>
    <h1>{counter}</h1>
    <button className='bg-blue-500' onClick={()=>{
      setCounter(counter+1)
    }}>Increment</button>
    </>
  );
}
