import React, {useState} from 'react';
import './TodoSearch.css';

function TodoSearch(){
    const [searchValue, setSearchValue] = useState('');
    return (    
        <input className="TodoSearch" placeholder="Cortar cebolla" 
        value={searchValue} onChange={(event)=>{
            setSearchValue(event.target.value);
        }} />
    )
}

export {TodoSearch}