import React from 'react'



export const Question4 = ( {userName, onUserNameChange} ) => {
    return (
        <section className="question4 section">
            <h2>Send Love from</h2>
            <label htmlFor="userName">Your name</label>
            <input 
                value={userName} 
                onChange={e => onUserNameChange(e.target.value)} 
                id="userName" 
                type="text"
                placeholder="Enter your name"
                required
                aria-required="true"
            />
         </section>
    )
}