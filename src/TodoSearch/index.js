import React, {useState} from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){
    
    return (    
        <input className="TodoSearch" placeholder="Cortar cebolla" 
        value={searchValue} onChange={(event)=>{
            setSearchValue(event.target.value);
        }} />
    )
}

export {TodoSearch}