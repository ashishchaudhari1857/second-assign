import classes from "./Complete.module.css";
function CompleteTask() {
  const taskList = [
    {
      task: "Task 1",
      taskId: 101,
      completeDate: "2023-10-20",
      appointmentId: "A001",
      duration: 2,
      status: "completed ",
    },
    {
      task: "Task 2",
      taskId: 102,
      completeDate: "2023-10-22",
      appointmentId: "A002",
      duration: 1.5,
      status: "completed ",
    },
    {
      task: "Task 3",
      taskId: 103,
      completeDate: "2023-10-23",
      appointmentId: "A003",
      duration: 3,
      status: "completed",
    },
    {
      task: "Task 4",
      taskId: 104,
      completeDate: "2023-10-25",
      appointmentId: "A004",
      duration: 2.5,
      status: "completed ",
    },
    {
      task: "Task 5",
      taskId: 105,
      completeDate: "2023-10-27",
      appointmentId: "A005",
      duration: 4,
      status: "completed ",
    },
  ];

  console.log(taskList);
  const groupedTasks = taskList.reduce((acc, task) => {
    const date = task.completeDate;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(task);
    return acc;
  }, {});
  const sortedDates = Object.keys(groupedTasks).sort();
  function formatDate(dateStr) {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  }

  return (
    <div className={classes.container}>
      {sortedDates.map((date) => (
        <div key={date}>
          <h3>{formatDate(date)}</h3>
          {groupedTasks[date].map((item) => (
            <div key={item.taskId} className={classes.taskconatianer}>
              <div className={classes.img}>
                <img src="profile.png" alt="" />
              </div>
              <div className={classes.profile}>
                <ul>
                  <li>
                    {" "}
                    <h3>Ashish Chaudhari</h3>
                  </li>
                  <li> AppointmentId:{item.appointmentId}</li>
                  <li> {item.task}</li>
                </ul>
              </div>
              <div className={classes.detail}>
                <ul>
                <li><span>Taskid :</span>{item.taskId}</li>
                  <li><span>Completed on :</span> {formatDate(item.completeDate)}</li>
                  <li> <span>Duration:</span>{item.duration}</li>
                </ul>
              </div>
              <div className={classes.status}>
                <ul>
                <li> <span>Status:</span>{item.status}</li>
                  <li> <button>View Assessment</button></li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CompleteTask;
