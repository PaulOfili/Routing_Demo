import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from "react-router-dom";

// import axios from 'axios';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos'
        );
        const items = await data.json();
        console.log(items);
        setItems(items.slice(0, 10));
        // await axios.get('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => {
        //         console.log(response);
        //     }, error => {
        //         console.log(error)
        //     });
    };
    return (
        <div className="App">
            {items.map(item => (
                    <h1 key={item.id}>
                        <Link to={`/shop/${item.id}`}>
                            {item.title}
                        </Link>
                    </h1>
            ))}
        </div>
    );
}

export default Shop;
