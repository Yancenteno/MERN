import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchStar = () => {
    const [optionChoice, setOptionChoice] = useState('people');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleOption = (e) => {
        setOptionChoice(e.target.value);
    };

    const handleId = (e) => {
        setId(e.target.value);
    };

    const handleForm = (e) => {
        e.preventDefault();
        navigate(`/${optionChoice}/${id}/`);
    };


    return (
        <div>
            <form onSubmit={handleForm}>
                <label>Search For:</label>
                <select
                    id="optionChoice"
                    value={optionChoice}
                    onChange={handleOption}
                >
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label >Id:</label>
                <input type="number" id="id" value={id} onChange={handleId} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SearchStar;
