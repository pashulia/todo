// FilterButtons.tsx

import React from 'react';

interface FilterButtonsProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({activeFilter, onFilterChange,}) => {
    return (
        <div>
            <button
                onClick={() => onFilterChange('all')}
                className={activeFilter === 'all' ? 'active' : ''}
            >
                Show All Tasks
            </button>
            <button
                onClick={() => onFilterChange('active')}
                className={activeFilter === 'active' ? 'active' : ''}
            >
                Show Active Tasks
            </button>
            <button
                onClick={() => onFilterChange('completed')}
                className={activeFilter === 'completed' ? 'active' : ''}
            >
                Show Completed Tasks
            </button>
        </div>
    );
};

export default FilterButtons;
