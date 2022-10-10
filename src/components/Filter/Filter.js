import { FilterWrapper } from './Filter.styled';
export const Filter = ({ value, changeFilter }) => {
  return (
    <FilterWrapper>
      <label>Fined contacts by name:</label>
      <input type="text" name="filter" value={value} onChange={changeFilter} />
    </FilterWrapper>
  );
};
