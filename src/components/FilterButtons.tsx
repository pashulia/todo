import React from 'react';

import styled from 'styled-components';

import { Button } from '../assets/styles/components.styles';

interface FilterButtonsProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const FilterButton = styled(Button)`
    margin: 10px 10px 10px 0;
`

const FilterButtons: React.FC<FilterButtonsProps> = ({activeFilter, onFilterChange,}) => {
    return (
        <div>
            <FilterButton
                onClick={() => onFilterChange('all')}
                className={activeFilter === 'all' ? 'active' : ''}
            >
                Show All Tasks
            </FilterButton>
            <FilterButton
                onClick={() => onFilterChange('active')}
                className={activeFilter === 'active' ? 'active' : ''}
            >
                Show Active Tasks
            </FilterButton>
            <Button
                onClick={() => onFilterChange('completed')}
                className={activeFilter === 'completed' ? 'active' : ''}
            >
                Show Completed Tasks
            </Button>
        </div>
    );
};

export default FilterButtons;
