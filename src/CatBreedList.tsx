import React, { useState, useEffect } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-material/dist/all.css';

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
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
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

  const handlePageChange = (event: any) => {
    setPage(event.page.skip / pageSize);
  };

  const handlePageSizeChange = (event: any) => {
    setPageSize(event.pageSize);
    setPage(0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid
      data={filteredBreeds.slice(page * pageSize, page * pageSize + pageSize)}
      pageable={{
        pageSizes: [5, 10, 25],
        buttonCount: 5
      }}
      total={filteredBreeds.length}
      skip={page * pageSize}
      pageSize={pageSize}
      onPageChange={handlePageChange}
      // onPageSizeChange={handlePageSizeChange}
    >
      <GridColumn field="name" title="Breed Name" />
      <GridColumn field="temperament" title="Temperament" />
      <GridColumn field="origin" title="Origin" />
      <GridColumn field="life_span" title="Life Span" />
      <GridColumn field="description" title="Description" />
    </Grid>
  );
};

export default CatBreedList;
