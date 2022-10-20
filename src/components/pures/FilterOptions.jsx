import React from 'react';
import FilterContainer from '../containers/FilterContainer';

const FilterOptions = () => {
    return (
        <div className='filters'>
            <FilterContainer filter='SHOW_ALL'>
                All
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
                Completed
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
                Active
            </FilterContainer>
        </div>
    );
}

export default FilterOptions;
