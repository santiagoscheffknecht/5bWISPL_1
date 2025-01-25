import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://yssymdaddehmxccubkec.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzc3ltZGFkZGVobXhjY3Via2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MTE5MzYsImV4cCI6MjA1MzM4NzkzNn0.ogdCfiDeRnoagcdVvir5r4kMR-KrgZOMFJJ-xjef6u4"
);

function App() {
  const [homework, setHomework] = useState<any[]>([]);
  const [newSubject, setNewSubject] = useState("");
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    getHomework();
  }, []);

  async function getHomework() {
    let { data: homework, error } = await supabase.from("homework").select("*");
    setHomework(homework ?? []);
  }

  async function addHomework() {
    if (newSubject.trim() === "" || newTask.trim() === "") {
      alert("Bitte alle Felder ausfüllen!");
      return;
    }

    const { data, error } = await supabase.from("homework").insert([
      { subject: newSubject, task: newTask },
    ]);

    if (error) {
      console.error("Fehler beim Hinzufügen der Hausaufgabe:", error);
      alert("Fehler beim Hinzufügen!");
    } else {
      setHomework([...homework, { subject: newSubject, task: newTask }]);
      setNewSubject("");
      setNewTask("");
      alert("Hausaufgabe hinzugefügt!");
    }
  }

  return (
    <div>
      <h1>Hausaufgaben-Liste</h1>
      <ul>
        {homework.map((item: any) => (
          <li key={item.id}>
            <strong>{item.subject}:</strong> {item.task}
          </li>
        ))}
      </ul>

      <h2>Neue Hausaufgabe hinzufügen</h2>
      <input
        type="text"
        placeholder="Subject"
        value={newSubject}
        onChange={(e) => setNewSubject(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addHomework}>Hinzufügen</button>
    </div>
  );
}

export default App;
