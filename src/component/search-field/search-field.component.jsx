import  React  from "react";
import "./search-field.style.css";



export const SearchField = ({placeholder, handleChange}) => (
    <input className="search" type="search" placeholder={placeholder} onChange={handleChange}></input>
);