import {useState} from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    // two functions, add element and delete element

    function handleAddFood() {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFoods(f => [...f, newFood]);
    }
    function handleRemoveFood(index) {
        // make a new array consisting of all elements...
        // except the one we chose to remove
        // underscore is actually the element to receive but its unused
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter food name'/>
            <button onClick={handleAddFood}>Add food</button>
        </div>
    );
}

export default MyComponent