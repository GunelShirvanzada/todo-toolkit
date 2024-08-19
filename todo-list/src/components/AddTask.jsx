import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/todoSlice/todoSlice";

const AddTask = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addItem({
        title: value
      })
    )
    setValue('')
  }
  
  return (
    <div className="addTask">
      <form onSubmit={handleSubmit}>
        <input id="input" value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Add your task" />
        <button id="add" className="btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
