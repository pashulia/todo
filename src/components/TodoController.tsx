import React, { useState } from 'react';

import { TodoItems } from './todo.model';

interface TodoProps {
    todo: TodoItems;
    onDelete: (id: string) => void;
    onToggleComplete: (id: string) => void;
    onEditTitle: (id: string, newTitle: string) => void;
}

const TodoController: React.FC<TodoProps> = ({ todo, onDelete, onToggleComplete, onEditTitle }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleDelete = () => {
        onDelete(todo.id);
    };

    const handleToggleComplete = () => {
        onToggleComplete(todo.id);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        if (newTitle.trim() !== '') {
            onEditTitle(todo.id, newTitle);
            setIsEditing(false);
        }
    };

    const handleCancelClick = () => {
        setNewTitle(todo.title);
        setIsEditing(false);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value);
    };

    return (
        <div className="todo">
            {isEditing ? (
                <div className="todo-edit">
                    <input type="text" value={newTitle} onChange={handleTitleChange} />
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                </div>
            ) : (
                <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                    <span>{todo.title}</span>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={handleToggleComplete}
                    />
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default TodoController;
