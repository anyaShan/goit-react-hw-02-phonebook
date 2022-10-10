export const Filter = ({ value, changeFilter }) => {
  return (
    <div>
      <label>Fined contacts by name</label>
      <input type="text" name="filter" value={value} onChange={changeFilter} />
    </div>
  );
};
