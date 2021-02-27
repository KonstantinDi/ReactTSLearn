import React from 'react';

interface TodoListProps {
    items:Array<{id:string,text: string}>
}

function TodoList(props: TodoListProps) {
    const items = props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
    ));
    return (
        <ul>
            {items}
        </ul>
    );
}

export default TodoList;
