import React, {useState, useEffect} from 'react';
import '../App.css';
// import axios from 'axios';

function ItemDetail({match}) {

    const [item, setItems] = useState({});

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const fetchItem = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`
        );
        const item = await data.json();
        console.log(item);
        setItems(item);

        // await axios.get('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => {
        //         console.log(response);
        //     }, error => {
        //         console.log(error)
        //     });
    };
    return (
        <div className="App">
            <h1>{item.title}</h1>
            Completed {(item.completed) ? 'Yes' : 'No'}
        </div>
    );
}

export default ItemDetail;
