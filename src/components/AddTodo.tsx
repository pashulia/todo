import React, { useState } from 'react';

import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import {
    Button,
    Input,
} from '../assets/styles/components.styles';
import { TodoItems } from './todo.model';

interface AddTodoProps {
  onAdd: (newTodo: TodoItems) => void; // Обновляем тип параметра на объект Todo
}

const AddButton = styled(Button)`
    width: 100px;
`;

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
    const [newTitle, setNewTitle] = useState('');

    const handleAddClick = () => {
        if (newTitle.trim() !== '') {
            const newTodo: TodoItems = {
                id: uuidv4(),
                title: newTitle,
                completed: false,
            };
            onAdd(newTodo); // Передаем объект Todo
            setNewTitle('');
        }
    };

    return (
        <div className="add-todo">
            <Input
                type="text"
                placeholder="New todo..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <AddButton onClick={handleAddClick}>Add</AddButton>
        </div>
    );
};

export default AddTodo;
