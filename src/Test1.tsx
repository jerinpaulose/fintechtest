import React, { useState } from 'react';
import { Container } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toggle from './Toggle';
import CatBreedList from './CatBreedList';

const queryClient = new QueryClient();

const Test1: React.FC = () => {
  const [filterCondition, setFilterCondition] = useState('all');

  const handleToggleAll = () => {
    setFilterCondition('all');
  };

  const handleToggleCountry = (country: string) => {
    setFilterCondition(country);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <h1>Cat Breed List</h1>
        <Toggle label="All" value={filterCondition === 'all'} onChange={() => handleToggleAll()} />
        <Toggle label="Egypt" value={filterCondition === 'Egypt'} onChange={() => handleToggleCountry('Egypt')} />
        <Toggle label="United States" value={filterCondition === 'United States'} onChange={() => handleToggleCountry('United States')} />
        <Toggle label="Canada" value={filterCondition === 'Canada'} onChange={() => handleToggleCountry('Canada')} />
        <Toggle label="Australia" value={filterCondition === 'Australia'} onChange={() => handleToggleCountry('Australia')} />
        <Toggle label="United Arab Emirates" value={filterCondition === 'United Arab Emirates'} onChange={() => handleToggleCountry('United Arab Emirates')} />
        <CatBreedList filterCondition={filterCondition} />
      </Container>
    </QueryClientProvider>
  );
};

export default Test1;
