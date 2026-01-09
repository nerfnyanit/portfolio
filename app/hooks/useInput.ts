"use client"

import { useState } from "react";

type useInputReturn = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    reset: () => void;
    input: string;
    view: string;
}

export default function useInput():useInputReturn {
    const [input, setInput] = useState("");
    const [view, setView] = useState("");

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(input.trim() === "") return;
        
        setView(input);
        setInput("");
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }

    const reset = ():void => {
        setInput("");
        setView("");
    }

    return{input,view,handleSubmit,handleChange,reset}
}
