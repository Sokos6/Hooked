import React from 'react';
import ReactDOM from 'react-dom';

function MyName() {
  const [name, setName] = useState("");

  function handleChange(evt) {
    setName(evt.target.value);
  }

  return (
    <div>
      <h1>My Name is: {name}</h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default MyName;