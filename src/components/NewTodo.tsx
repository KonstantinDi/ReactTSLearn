import React, {useRef} from 'react';

function NewTodo(){
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = function(event:React.FormEvent){
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
    }
    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo1 Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TODO1</button>
        </form>
    );
}

export default NewTodo;