import { useState } from 'react';

const EventRegistration = () => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || sport === '') {
      alert('Please fill out all fields.');
    } else {
      alert('Registration successful!');
    }
  };

  return (
    <div>
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <p>Sport Type:</p>
        <select value={sport} onChange={(e) => setSport(e.target.value)}>
          <option value="">Select a Sport</option>
          <option value="Basketball">Basketball</option>
          <option value="Tennis">Tennis</option>
          <option value="Cricket">Cricket</option>
        </select>

        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default EventRegistration;
