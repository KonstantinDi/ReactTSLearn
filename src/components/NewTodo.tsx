import React, {useRef} from 'react';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
};

function NewTodo(props:NewTodoProps){
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = function(event:React.FormEvent){
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    }
    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo1 Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TODODO</button>
        </form>
    );
}

export default NewTodo;
