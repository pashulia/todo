// AddTodo.tsx

import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { TodoItems } from './todo.model';

interface AddTodoProps {
  onAdd: (newTodo: TodoItems) => void; // Обновляем тип параметра на объект Todo
}

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
            <input
                type="text"
                placeholder="Add a new task"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={handleAddClick}>Add</button>
        </div>
    );
};

export default AddTodo;
