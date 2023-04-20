import React, { useState } from 'react';
import axios from 'axios';

function StudentForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/createStudent', { name, age, email, phone })
      .then(() => {
        console.log('Form submitted successfully');
        setSubmittedData([...submittedData, { name, age, email, phone }]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
        <button type="submit">Submit</button>
      </form>
      {submittedData.length > 0 &&
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}

export default StudentForm;
