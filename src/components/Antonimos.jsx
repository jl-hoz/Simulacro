import React, { useState, useEffect } from 'react';

const Antonimos = props => {
    
    let block = null;

    if (Array.isArray(props.content)) {
        block = (
            <div>
                <h2>Antónimos</h2>
                <ol>
                    {props.content.map(def => {
                        return (
                            <li>{def.antonimo}</li>
                        )
                    })}
                </ol>
            </div>
        );
    }
    return (
        <div>{Array.isArray(props.content) ? block : null}</div>
    );
};

export default Antonimos;