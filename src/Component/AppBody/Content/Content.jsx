import  classes  from '../Content/Content.module.css'
  import { NavLink } from 'react-router-dom'
  import { Outlet } from 'react-router-dom'

function Content() {
  return (
    <div>
        <div className={classes.contentHeader}>
             <h1>Tasks</h1>
             <p>Clinical-Task </p>
               <div className={classes.task}>
             <NavLink to='/upcoming'>upcoming Task</NavLink>
              <NavLink to='/complete'> completed Task</NavLink>
              </div>  
        </div>
        <div>
      
   <div className={classes.header}>
  <div className={classes.search_box}>
    <input type="text" name="search" placeholder="Search" />
  </div>
  <div className={classes.date_picker}>
    <div>
    <label>form date</label>
    <input type="date" placeholder="From Date" />
    </div>
    <div>
    <label>to date </label>
    <input type="date" placeholder="To Date" />
    </div>
  </div>
  <div className={classes.buttons}>
    <button className={classes.apply_button}>Apply</button>
    <button className={classes.reset_button}>Reset</button>
  </div>
        </div>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Content