// const Counter = () => {
//     // Without State
//     // let number = 0;
//     // const increment = () => {
//     //     number += 1;
//     //     console.log(number)
//     // }
//     // return <div>
//     //     <h1>Count</h1>
//     //     <p>Number: {number}</p>
//     //     <button onClick={increment}>+</button>
//     // </div>
// }

import React from "react";

// With State
const Counter = () => {
    const [number, setNumber] = React.useState(0);
    return <div>
        <h1>Count</h1>
        <p>Number : {number}</p>
        <button onClick={() => setNumber(number-1)}>-</button>
        <button onClick={() => setNumber(number+1)}>+</button>
    </div>
}
export default Counter;