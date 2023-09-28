import React, {
    useEffect,
    useState,
} from 'react';

import AddTodo from './AddTodo';
import FilterButtons from './FilterButtons';
import Todo from './Todo';
import { TodoItems } from './todo.model';

const initialTodos: TodoItems[] = [
    {
        "id": "51c1c4f1-03bf-48bf-9705-9dc97ab61a76",
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "id": "62aabce1-8f84-4684-90b9-2b2310cf726a",
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "id": "402ee516-6c72-4d16-a9a8-322069f5cf6e",
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "id": "3b720eaf-163a-41c8-bc5e-b47f2370cd0c",
        "title": "et porro tempora",
        "completed": true
    },
    {
        "id": "3ab57b63-e789-4211-a507-6b89501bc39a",
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "id": "09d15f18-14ea-4fd3-b75b-e57777c25b3c",
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "id": "46f5bdd5-dc22-441e-b78b-e812d817cfde",
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "id": "bce9f1e0-4383-40a6-9a10-2f59d9aa1465",
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "id": "05da3453-89e2-4d44-8912-5b727218808c",
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "id": "c7034df3-eb7b-4cad-a323-3f5c6ceb9283",
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    }
]


const AppTodo: React.FC = () => {
    const [todos, setTodos] = useState<TodoItems[]>(initialTodos);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (newTodo: TodoItems) => {
        setTodos([...todos, newTodo]);
    };

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleToggleComplete = (id: string) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleEditTitle = (id: string, newTitle: string) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, title: newTitle } : todo
        );
        setTodos(updatedTodos);
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') {
            return !todo.completed;
        } else if (filter === 'completed') {
            return todo.completed;
        } else {
            return true;
        }
    });

    return (
        <div className="App">
            <h1>Todo List</h1>
            <AddTodo onAdd={handleAddTodo} />
            <FilterButtons activeFilter={filter} onFilterChange={setFilter} />
            <Todo
                todos={filteredTodos}
                onDelete={handleDeleteTodo}
                onToggleComplete={handleToggleComplete}
                onEditTitle={handleEditTitle}
            />
        </div>
    );
};

export default AppTodo;
