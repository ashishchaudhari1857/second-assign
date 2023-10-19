import AsideBar from "./AsideBar/AsideBar"
import  classes from  '../AppBody/Appbody.module.css'
import Content from "./Content/Content"
function AppBody() {
  return (
    <>
    <div className={classes.container}>
       <div className={classes.AsideBar}>
        <AsideBar></AsideBar>
       </div>
       <div className={classes.Content}>
          <Content></Content>
       </div>
    </div>
      </>
  )
}

export default AppBody