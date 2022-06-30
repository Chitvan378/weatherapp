import './index.css'
import React from 'react';
import SearchBar from './components/SearchBar';
export default function App(){
    return (
        // Container 
        <div className="mx-auto py-5 px-32 mt-4 max-w-screen-lg bg-gradient-to-br from-cyan-700 to-blue-700 
        h-fit shadow-sm shadow-gray-200">
            <SearchBar />
        </div>
    )
}