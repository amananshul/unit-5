import React, { useState } from 'react';
type CounterProps = {
    init?: number;
     children?:JSX.Element|JSX.Element[];
}

export const Counter = (props: CounterProps) => {
    const { init=5,children } = props;

    const [counter, setCounter] = useState(init)
    return (
        <div>
            <h3>Counter:{counter||0}</h3>
            {children}
            <button onClick={() => { setCounter(counter + 1) }}>Add</button>

        </div>
    )
};