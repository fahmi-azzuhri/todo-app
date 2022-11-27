import React, { useState } from "react";

const data = [
  {
    id: 1,
    message: "wvbfbhwy",
  },
  { id: 2, message: "fbad" },
];
const Header = () => {
  return <h1>React Todo App</h1>;
};

const SubHeader = ({ taskNumber }) => {
  return <p>ada {taskNumber} task lagi yang belum dikerjakan </p>;
};

const TaskAdder = ({ setTugas, tasks }) => {
  const [currentValue, setCurrentValue] = useState("");

  const handleAddTask = () => {
    const newTask = {
      id: tasks,
      message: currentValue,
    };
    setTugas([...tasks, newTask]);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setCurrentValue(event.target.value)}
      />
      <button onClick={() => handleAddTask()}>Tambah</button>
    </div>
  );
};

const Task = ({ id, message }) => {
  return (
    <div>
      <p> {message} </p>
      <button>Hapus</button>
    </div>
  );
};

const TaskList = ({ tasks }) => {
  return tasks.map((task) => {
    return <Task message={task.message} id={task.id} />;
  });
};

const Todo = () => {
  const [tugas, setTugas] = useState(data);
  return (
    <div>
      <Header />
      <SubHeader taskNumber={tugas.length} />
      <TaskAdder setTugas={setTugas} tasks={tugas} />
      <TaskList tasks={tugas} />
    </div>
  );
};

const App = () => {
  return <Todo />;
};

export default App;
