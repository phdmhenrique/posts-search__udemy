import './styles.css';

export const TextInput = ({ handleChange, searchValue }) => {
  return (
    <input
        placeholder='Pesquise por título'
        className='text-input'
        onChange={handleChange} 
        value={searchValue} 
        type="search" 
    />
  );
};
