import React, { useState } from 'react';

import UseList from './UseList';

export default () => {
    const [val, setVal] = useState('');
    const { list, add } = UseList(['first', 'second']);

    function handleSubmit() {
        add(val);
        setVal('');
    }

    return (
        <>
            {list.map((item, i) => <p key={i}>{item}</p>)}
            <input
                onChange={e => setVal(e.target.value)}
                value={val}
            />
            <button onClick={handleSubmit}>Add</button>
        </>
    );
}
