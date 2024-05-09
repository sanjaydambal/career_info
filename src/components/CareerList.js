import React from 'react'
import careers from '../mockdata/data';
import { useState } from 'react';
import "./CareerList.css";

function CareerList() {
    const [searchTerm,setSearchTerm] = useState("")
    const handleSearchChange = (e)=>{
        setSearchTerm(e.target.value)
    }
    const handleClearSearch = () => {
        setSearchTerm("")
    }
    const filteredCareers = careers.filter(career => {
        const searchTokens = searchTerm.toLowerCase().split(/\s+/);
        const lowerCaseTitle = career.title.toLowerCase();
        const lowerCaseDescription = career.description.toLowerCase();
    
        return searchTokens.some(token => {
            return (
                lowerCaseTitle.includes(token) ||
                lowerCaseDescription.includes(token)
            );
        });
    }).sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        
        const bTitle = b.title.toLowerCase();
    

        const aIndex = aTitle.indexOf(searchTerm.toLowerCase());
        
        const bIndex = bTitle.indexOf(searchTerm.toLowerCase());
    
        if (aIndex === 0 && bIndex !== 0) {
            return -1;
        } else if (bIndex === 0 && aIndex !== 0) {
            return 1;
        }

        
        
        return aTitle.localeCompare(bTitle);
    });
    
    
  return (
    <div>
      <h2>Careers</h2>
      <div className="search-container">
        <input type='text' value={searchTerm} onChange={handleSearchChange} placeholder='search careers...'/>
        {searchTerm && (<button onClick={handleClearSearch}>
        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path
                                fill="none"
                                d="M0 0h24v24H0z"
                            />
                            <path
                                fill="rgba(0,0,0,.54)"
                                d="M18.29 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.71a.996.996 0 1 0-1.41 1.41L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.88a.996.996 0 1 0 1.41-1.41L13.41 12l4.88-4.89a.996.996 0 0 0 0-1.4z"
                            />
                        </svg>
            </button>)}
      </div>
      <ol>
        {
            filteredCareers.map(career =>(<li key={career.id}>
{career.title}:{career.description}
            </li>))
        }
      </ol>
    </div>
  )
}

export default CareerList
