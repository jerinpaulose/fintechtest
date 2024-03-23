import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

interface CatBreed {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
}

interface CatBreedListProps {
  filterCondition: string;
}

const CatBreedList: React.FC<CatBreedListProps> = ({ filterCondition }) => {
  const [breedsData, setBreedsData] = useState<CatBreed[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const filterBreedsByCountry = (breeds: CatBreed[], country: string) => {
    if (country === 'all') {
      return breeds;
    } else {
      return breeds.filter((breed) => breed.origin === country);
    }
  };

  const filteredBreeds = filterBreedsByCountry(breedsData, filterCondition);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
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
            {filteredBreeds.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((breed: CatBreed) => (
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredBreeds.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default CatBreedList;
