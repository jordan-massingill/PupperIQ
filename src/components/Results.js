
import React, { Component } from 'react';

const Results = props => {
    return (
        <div>
           <h1> Results:</h1>
           <h3>{props.pup.name}</h3>
           <strong>Qualities (ranked 1-5)</strong>
           <p>Energy: {props.pup.activity}</p>
           <p>Playfulness: {props.pup.playfulness}</p>
           <p>Affection: {props.pup.affection}</p>
           <p>Size: {props.pup.size}</p>
           <p>Maintenance: {props.pup.maintenance}</p>
           <p>Trainability: {props.pup.maintenance}</p>
        </div>
     );
};

export default Results;
