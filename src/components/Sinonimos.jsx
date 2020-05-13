import React, { useState, useEffect } from 'react';

const Sinonimos = props => {
    
    let block = null;

    if (Array.isArray(props.content)) {
        block = (
            <div>
                <h2>Sinónimos</h2>
                <ol>
                    {props.content.map(def => {
                        return (
                            <li>{def.sinonimo}</li>
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

export default Sinonimos;