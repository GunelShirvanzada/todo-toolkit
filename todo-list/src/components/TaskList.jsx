import React from "react";
import TaskItem from "./TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "../redux/todoSlice/todoSlice";

const TaskList = () => {
  const lists = useSelector((state) => state.todo.list)
  const dispatch = useDispatch()
  
  return (
    <div className="taskList">
      <ul>
        {
          lists.map((item) => <TaskItem key={item.id} {...item} />)
        }
      </ul>
      <button className="btn clear" onClick={() => dispatch(clearAll())}>Clear All</button>
    </div>
  );
};

export default TaskList;
