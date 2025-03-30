// 🚀 EqualPay AI Starter Template (React + Firebase)
// This is a simplified app structure with React for UI and Firebase for backend

// File: /src/App.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function App() {
  const [form, setForm] = useState({
    jobTitle: '',
    experience: '',
    gender: '',
    salary: ''
  });
  const [data, setData] = useState([]);
  const [avgSalary, setAvgSalary] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'salaries'), form);
    alert('Data submitted!');
    fetchData();
  };

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'salaries'));
    const entries = querySnapshot.docs.map(doc => doc.data());
    setData(entries);
    const avg = calculateAverage(entries);
    setAvgSalary(avg);
  };

  const calculateAverage = (entries) => {
    const filtered = entries.filter(e => e.jobTitle === form.jobTitle);
    const total = filtered.reduce((acc, curr) => acc + Number(curr.salary), 0);
    return (total / filtered.length).toFixed(2);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>💼 EqualPay AI (MVP)</h1>
      <form onSubmit={handleSubmit}>
        <input name="jobTitle" placeholder="Job Title" onChange={handleChange} required />
        <input name="experience" placeholder="Years of Experience" onChange={handleChange} required />
        <input name="gender" placeholder="Gender" onChange={handleChange} required />
        <input name="salary" placeholder="Your Salary" type="number" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>

      {avgSalary && (
        <div style={{ marginTop: '1rem' }}>
          <h2>🔍 Average Salary for {form.jobTitle}: ${avgSalary}</h2>
        </div>
      )}
    </div>
  );
}

export default App;

