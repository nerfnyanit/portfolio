"use client"

import { useState } from "react";

type UseTodoReturn = {
    todos: Todo[];
    input: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    toggleCheck: (id: number) => void;
    deleteTodo: (id: number) => void;
}

type Todo ={
    id: number
    text: string
    check: boolean
}

export function useTodo():UseTodoReturn {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState<string>("");
        
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(input.trim() === "") return;

        const newItem: Todo = {
            id: Date.now(),
            text: input,
            check: false
        };
        
        setTodos((prev) => [newItem,...prev])
        setInput("");
    }

    const toggleCheck = (id:number) => {
        setTodos((prev) =>
            prev.map((todo)=>
                todo.id === id ? {...todo, check: !todo.check} : todo
            )
        );
    };
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)

    }

    const deleteTodo = (id:number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return{
        todos,input,handleSubmit,handleChange,toggleCheck,deleteTodo
    }
}
