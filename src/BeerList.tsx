import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface CatBreed {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
}

interface BeerListProps {
  filterCondition: string;
}

const BeerList: React.FC<BeerListProps> = ({ filterCondition }) => {
  const [breedsData, setBreedsData] = useState<CatBreed[]>([]);

  useEffect(() => {
    // Fetch cat breeds data from API when the component mounts
    fetchBreedsData();
  }, []);

  const fetchBreedsData = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/breeds');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const breedsDataFromAPI: CatBreed[] = await response.json();
      setBreedsData(breedsDataFromAPI);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Breed Name</TableCell>
            <TableCell>Temperament</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Life Span</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {breedsData.map((breed: CatBreed) => (
            <TableRow key={breed.id}>
              <TableCell>{breed.name}</TableCell>
              <TableCell>{breed.temperament}</TableCell>
              <TableCell>{breed.origin}</TableCell>
              <TableCell>{breed.life_span}</TableCell>
              <TableCell>{breed.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BeerList;
