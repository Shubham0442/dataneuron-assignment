import React, { useEffect, useState } from "react";
import "./index.css";

const Todo = ({ window }) => {
  const [todo, setTodo] = useState([]);
  const [name, setName] = useState("");
  const [count, setCount] = useState({ count: 0, window });

  const handleAdd = () => {
    fetch(`https://attractive-cod-gaiters.cyclic.app/todos/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, isCompleted: false, window })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(todo);
        if (todo?.length < 1) {
          console.log("hello from add todo");
          addCount();
        } else updateCount();
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTodos = () => {
    fetch(`https://attractive-cod-gaiters.cyclic.app/todos?window=${window}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((res) => {
        setTodo(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCount = () => {
    fetch(`https://attractive-cod-gaiters.cyclic.app/count/update/${count._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...count })
    })
      .then((res) => res.json())
      .then((res) => {
        getCount();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (count) => {
    fetch(`https://attractive-cod-gaiters.cyclic.app/todos/update/${count?._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(count)
    })
      .then((res) => res.json())
      .then((res) => {
        updateCount();
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCount = () => {
    fetch("https://attractive-cod-gaiters.cyclic.app/count/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count: 1, window })
    })
      .then((res) => res.json())
      .then((res) => {
        getCount();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCount = () => {
    fetch(`https://attractive-cod-gaiters.cyclic.app/count?window=${window}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCount(res?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (todo?.length === 0) {
      getTodos();
    }

    if (count?.count == 0) {
      getCount();
    }
  }, [todo.length, count]);

  return (
    <div className="todo-container">
      <div className="add-todo">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>Count: {count ? count?.count : 0}</div>
      <div className="todo-table-container">
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Todo</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todo?.length !== 0 &&
              todo?.map((el, i) => (
                <tr key={el._id}>
                  <td>{i + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.isCompleted ? "Done" : "Not Done"}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleUpdate({ ...el, isCompleted: !el?.isCompleted })
                      }
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
