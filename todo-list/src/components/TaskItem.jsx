import { useDispatch } from "react-redux";
import { deleteItem, editItem } from "../redux/todoSlice/todoSlice";
import { useState } from "react";

const TaskItem = ({ title, id }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isEditingTitle, setIsEditingTitle] = useState(title)
  const dispatch = useDispatch()

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    dispatch(
      editItem({
        title: isEditingTitle,
        id: id
      })
    )
    setIsEditing(false)
  }

  return (
    <li>
      {
        isEditing ? <input type="text" value={isEditingTitle} onChange={(e) => setIsEditingTitle(e.target.value)} /> : <span> {title} </span>
      }

      <div className="btns">
        <>
          <button className="btn" onClick={handleSave}>Save</button>

          <button className="btn" onClick={handleEdit} >Edit</button>
          <button onClick={() => dispatch(deleteItem({ id: id }))} id="delete" className="btn">
            Delete Task
          </button>
        </>
      </div>
    </li>
  );
};

export default TaskItem;
