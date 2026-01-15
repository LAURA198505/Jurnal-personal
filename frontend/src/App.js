import { useEffect, useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");

  const loadEntries = async () => {
    const response = await fetch("http://localhost:3001/journal");
    const data = await response.json();
    setEntries(data);
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const addEntry = async () => {
    await fetch("http://localhost:3001/journal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, mood }),
    });

    setTitle("");
    setContent("");
    setMood("");
    loadEntries();
  };

 const deleteEntry = async (id) => {
  await fetch(`http://localhost:3001/journal/${id}`, {
    method: "DELETE",
  });

  // reload explicit al listei
  const response = await fetch("http://localhost:3001/journal");
  const data = await response.json();
  setEntries(data);
};


  return (
    <div style={{ padding: 20 }}>
      <h1>Personal Journal</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />

      <input
        placeholder="Mood"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
      <br />

      <button onClick={addEntry}>Add Entry</button>

      <hr />

      {entries.map((e) => (
        <div
          key={e.id}
          style={{
            marginBottom: 15,
            border: "1px solid #ccc",
            padding: 10,
          }}
        >
          <h3>{e.title}</h3>
          <p>{e.content}</p>
          <p>
            <strong>Mood:</strong> {e.mood}
          </p>
          <button onClick={() => deleteEntry(e.id)}>
            Delete entry
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
