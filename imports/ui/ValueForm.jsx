import React, { useState } from 'react';
import { ValuesCollection } from '../api/ValuesCollection'

 
export const ValueForm = () => {
  const [name, setName] = useState("");


  const handleSubmit = (e) => {
      
    e.preventDefault();

    if (!name) return;

    Meteor.call('values.insert', name);

    setName("");
  };

  const handleOnNameChange = (e) => {
    setName(e.target.value)
  }
 
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={name}
        onChange={handleOnNameChange}
        placeholder="Type to add a new value"
      />
 
      <button type="submit">Add Value</button>
    </form>
  );
};