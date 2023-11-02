import { useSearchParams } from 'react-router-dom';
import Select from './Select';

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      $type='white'
      options={options}
      render={(option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )}
      onChange={handleChange}
    />
  );
};

export default SortBy;
