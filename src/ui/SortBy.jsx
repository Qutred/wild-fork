import React from 'react';
import Select from './Select';
import { useSearchParams } from 'react-router-dom';

const SortBy = ({ sortByField = 'sortBy', options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get(sortByField) || '';

  const handleChange = (e) => {
    searchParams.set(sortByField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Select
      options={options}
      value={sortBy}
      onChange={handleChange}
      type="white"
    />
  );
};

export default SortBy;
