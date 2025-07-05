import { useState } from "react";

function App() {
  const jobData = JSON.parse(localStorage.getItem("jobData"));

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(jobData ?? []);

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJob = [...prev, job];

      // save job
      localStorage.setItem("jobData", JSON.stringify(newJob));
      return newJob;
    });
    setJob("");
  };

  return (
    <div style={{ padding: 30 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
