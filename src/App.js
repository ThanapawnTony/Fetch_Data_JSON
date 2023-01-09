import { useState, useEffect } from 'react';
import Form from './Form';
import './index.css';
import Table from './Table';

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState('users');

    useEffect(() => {
      // using useEffect to fetch items into the server
      const fetchItems = async () => {
        try {
          const response = await fetch(`${API_URL}${reqType}`);
          if (!response.ok) throw Error('Did not recieved expected data');
          const data = await response.json();
          console.log(data);
          setItems(data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchItems();
    }, [reqType])

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      <Table items={items} />
    </div>
  );
}

export default App;
