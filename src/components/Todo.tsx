import React from 'react';

import styled from 'styled-components';

import { TodoItems } from './todo.model';
import TodoController from './TodoController';

interface TodoListProps {
    todos: TodoItems[];
    onDelete: (id: string) => void;
    onToggleComplete: (id: string) => void;
    onEditTitle: (id: string, newTitle: string) => void;
}

const Total = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #a453f0;;
    margin: 20px 0; 
`

const Todo: React.FC<TodoListProps> = ({
        todos,
        onDelete,
        onToggleComplete,
        onEditTitle,
    }) => {

    return (
        <div>
            <Total>
                {todos.length} tasks remaining
            </Total>
            <div className="todo-list">
                {todos.map((todo) => (
                    <TodoController
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onToggleComplete={onToggleComplete}
                        onEditTitle={onEditTitle}
                    />
                ))}
            </div>
        </div>
    );
};

export default Todo;
