import React, {useState, useEffect} from 'react';

const SearchBar = ({label,onFormSubmit}) => {
        const [term, setTerm] = useState('');
        const [debouncedTerm, setDebouncedTerm] = useState('');

        useEffect(()=>{
                const timerId = setTimeout(()=>{
                        setDebouncedTerm(term); 
                },1000);

                return() =>{
                        clearTimeout(timerId);
                };
        },[term]);

        useEffect(()=>{
                onFormSubmit(debouncedTerm);
        },[debouncedTerm]); 
      
      
 return(
        <div className="ui segment">
        <form  className="ui form">
          <div className="field">
            <label>{label}</label>
            <input type="text" default={term} onChange={(e) => {setTerm(e.target.value);}}/>
          </div>
        </form>
      </div>
 );       
}

export default SearchBar;