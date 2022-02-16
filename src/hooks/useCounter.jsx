import {useState, useEffect} from 'react';

const useCounter = () => {
  return (
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  )
}

export default useCounter