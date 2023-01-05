export const SearchBar = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};


