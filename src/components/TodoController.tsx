import React, { useState } from 'react';

import styled from 'styled-components';

import {
    Button,
    Input,
} from '../assets/styles/components.styles';
import { TodoItems } from './todo.model';

interface TodoProps {
    todo: TodoItems;
    onDelete: (id: string) => void;
    onToggleComplete: (id: string) => void;
    onEditTitle: (id: string, newTitle: string) => void;
}

const ControlButton = styled(Button)`
    margin: 10px;
`
const ControlInput = styled.input`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`
const Block = styled.div`
    text-align: left;
`

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
        <Block className="todo">
            {isEditing ? (
                <div className="todo-edit">
                    <Input type="text" value={newTitle} onChange={handleTitleChange} />
                    <ControlButton onClick={handleSaveClick}>Save</ControlButton>
                    <ControlButton onClick={handleCancelClick}>Cancel</ControlButton>
                </div>
            ) : (
                <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                    <ControlInput
                        type="checkbox"
                        checked={todo.completed}
                        onChange={handleToggleComplete}
                    />
                    <span>{todo.title}</span>
                    <br/>
                    <ControlButton onClick={handleEditClick}>Edit</ControlButton>
                    <ControlButton onClick={handleDelete}>Delete</ControlButton>
                    
                </div>
            )}
        </Block>
    );
};

export default TodoController;
