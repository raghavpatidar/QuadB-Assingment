import React from 'react';
import { Link } from 'react-router-dom';

const Completed = () => {
    return (
        <div style={{textAlign:'center'}}>
            <h1>Thanks for your Interest ! you will recive email with your confirmed Tickets</h1>
            Browse More Movies  <Link className="text-link" to="/">Click Here</Link>
        </div>
    );
};

export default Completed;