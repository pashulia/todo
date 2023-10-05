import React from 'react';

import styled from 'styled-components';

import { Button } from '../assets/styles/components.styles';

interface FilterButtonsProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const FilterButton = styled(Button)`
    margin: 10px 10px 10px 0;
    color: #fff;
    &.active {
        box-shadow: 0px 0px 10px 3px #a453f0;;
    }
`;

const FilterButtons: React.FC<FilterButtonsProps> = ({ activeFilter, onFilterChange }) => {
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
            <FilterButton
                onClick={() => onFilterChange('completed')}
                className={activeFilter === 'completed' ? 'active' : ''}
            >
                Show Completed Tasks
            </FilterButton>
        </div>
    );
};

export default FilterButtons;
