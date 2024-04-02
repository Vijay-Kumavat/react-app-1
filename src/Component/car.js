import { useState } from "react";

const Car = (prop) => {
    const name = 'Rahul';
    const[carName, setCarName] = useState("Hero");
    return (
        <>
            <h4>Hello {prop.carName}, Good morning!</h4>
            <h4>Hello {name}, Good morning! Goodbye may seem forever</h4>
            <h4>The car is {carName}</h4>
            <button onClick={() => setCarName("Honda")}>Change Car</button>
        </>
    )
}

export default Car;