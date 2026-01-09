"use client"

import { useEffect, useState } from "react"

type User = {
    name: string
}

const INITIAL_NUMBER = 1

export function useClientFetch(){
    const [count, setCount] = useState(INITIAL_NUMBER);
    const [users, setUsers] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const userDataFetch = async() => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${Number(count)}`)
            if(!res.ok){
                throw new Error("Fetch failed")
            } else {
                const json: User = await res.json()
                setUsers(json)
            }
            } catch(error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        userDataFetch();
    },[count])

    const increment = () => {
        if(count >= 10) return;

        setCount((prev) => prev + 1)
    }

    const decrement = () => {
        if(count <= 1) return;

        setCount((prev) => prev - 1);
    } 

    return{
        loading,users,error,count,increment,decrement
    }
}
