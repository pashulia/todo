import React from 'react';

import { TodoItems } from './todo.model';
import TodoController from './TodoController';

interface TodoListProps {
    todos: TodoItems[];
    onDelete: (id: string) => void;
    onToggleComplete: (id: string) => void;
    onEditTitle: (id: string, newTitle: string) => void;
}

const Todo: React.FC<TodoListProps> = ({
        todos,
        onDelete,
        onToggleComplete,
        onEditTitle,
    }) => {

    return (
        <div>
            <div className="todo-counter">
                Total Tasks: {todos.length}
            </div>
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
