import React from 'react';

interface TodoListProps {
    items: Array<{ id: string, text: string }>
    onDeleteTodo: (id: string) => void
}

function TodoList(props: TodoListProps) {
    const items = props.items.map((todo) => (
        <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null,todo.id)}>DELETE</button>
        </li>
    ));
    return (
        <ul>
            {items}
        </ul>
    );
}

export default TodoList;
