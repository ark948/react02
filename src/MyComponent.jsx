import {useState, useEffect} from 'react';

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener added.");

        // cleanup code for unmounting and free up resources
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed.");
        }
    }, []); // run only once when mounted

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]); // run every time these values change
    
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
        <p>Window Width: {width}px</p>
        <p>Window height: {height}px</p>
        </>
    );
}

export default MyComponent