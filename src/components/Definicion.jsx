import React, { useState, useEffect } from 'react';

const Definicion = props => {

    let block = null;

    if (Array.isArray(props.content)) {
        block = (
            <div>
                <h2>Definición</h2>
                <ol>
                    {props.content.map(def => {
                        return (
                            <li>{def.definicion}</li>
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

export default Definicion;