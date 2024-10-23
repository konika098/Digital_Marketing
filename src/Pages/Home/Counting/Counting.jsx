import { useEffect, useState } from 'react';
import './Counting.css'; 

const Counting = () => {
  const [countData, setCountData] = useState([]);

 
  useEffect(() => {
    fetch('/Counts.json')
      .then((response) => response.json())
      .then((data) => setCountData(data.counts))
      .catch((error) => console.error('Error fetching counting data:', error));
  }, []);

  if (countData.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="counting-section">
      <div className="container">
        <div className="counting-parent row g-4 text-center">
          {countData.map((item, index) => (
            <div className="counting-child col-6 col-lg-3" key={index}>
              <h2 className="count-head counter">{item.value}</h2>
              <p className="count-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counting;
