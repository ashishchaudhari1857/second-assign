import classes from "./AsideBar.module.css";
import { BiTask } from "react-icons/bi";
import { AiOutlineFieldTime } from "react-icons/ai";
function AsideBar() {
  return (
    <div className={classes.asidebar}>
      <h1>MedLife</h1>
      <select>
        <option value=""> Add Clinical</option>
        <option value="">Task</option>
        <option value=""> Appointment</option>
      </select>
      <h3>
        <BiTask></BiTask> Tasks
      </h3>
      <h3>
        <AiOutlineFieldTime></AiOutlineFieldTime> Appointment
      </h3>
    </div>
  );
}

export default AsideBar;
