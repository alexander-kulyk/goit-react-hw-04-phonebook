import { useState, useEffect } from "react";


export const useLocalStorage = (key , defaultValue) =>{

    const [contacts, setContacts] = useState(()=> JSON.parse(window.localStorage.getItem(key)) ?? defaultValue)


    useEffect(() => {

        window.localStorage.setItem(key, JSON.stringify(contacts));
        
    }, [contacts, key]);


    return [contacts, setContacts];

}