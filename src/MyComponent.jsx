import {useState, useEffect} from 'react';

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count ${count} ${color}`;

        return () => {
            // cleanup code
            // e.g. removing event listener before unmounting an element
        }
    }, [count, color]); // when component mounts + when this value changes, run the code

    function addCount() {
        setCount(c => c + 1);
    }
    function subtractCount() {
        setCount(c => c - 1);
    }
    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default MyComponent