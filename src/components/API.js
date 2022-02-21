import { useState, useEffect } from 'react';

const APIs = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tutorials').then((resultat) => {
      console.log('le resultat est', resultat.data);
      setData(resultat.data);
    });
    console.log(data);
    console.log('passe');
  }, []);
};
return APIs;
