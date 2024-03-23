import React, { } from 'react';
import data from './data/data2.json';

const TestApi: React.FC = () => {
    return (
      <div>
        <h1>Test API</h1>
        <ul>
          {data.map((beer: any) => ( // Assuming the structure of data2.json is an array of objects
            <li key={beer.id}>
              <strong>Name:</strong> {beer.name}, <strong>ABV:</strong> {beer.abv}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TestApi;
