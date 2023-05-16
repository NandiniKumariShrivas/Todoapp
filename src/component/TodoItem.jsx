import React from "react"
import "../App.css"
function TodoItem(props) {
  const { id, title, status, handleClick, handleDelete } = props;
  const update = () => handleClick(id);
  const deleteFun = () => {
    handleDelete(id);
    console.log("yes")
  }
 
  return (
    <div>
      {/* display todo  */}
      <div
        style={{
        //   border: "2px solid black",
          width: "80%",
          height: "38px",
          margin: "auto",
          marginTop: "15px",
          textAlign: "center",
          justifyContent: "center",
          borderRadius: "3px",
          color:"blue",
          fontSize:"20px",
          fontWeight:"500",
          display:"flex"
        }}
      >
         {""}
        <div
        style={{  border: "2px solid black",width:"50%" ,backgroundColor:"white",borderRadius:"2px",color:"black"}}
        >{title} </div>

        <div  style={{  border: "2px solid black",width:"50%", justifyContent:"space-between",backgroundColor:"white" ,color:"blue"}}>  {status ? "Done" : "Pending"}</div>
       
       
      </div>
      <div
        style={{
        //   border: "2px solid blue",
          display: "flex",
          marginTop: "7px",
          margin: "auto",
          width: "40%",
          height: "40px",
          justifyContent: "space-around",
        }}
      >
        <div>
          <button
            style={{
              width: "100px",
              height: "40px",
              fontWeight: "600",
              borderRadius: "5px",
              // backgroundColor: "#34eb46",
              cursor: "pointer",
              border: "0px",
              fontSize: "20px",

            }}
            className={status ? "red" : "green"}
            onClick={update}
          >
            {status ? "Pending" : "Done"}
          </button>
        </div>
        <div>
          <button
            style={{
              width: "100px",
              height: "40px",
              fontWeight: "600",
              borderRadius: "5px",
              backgroundColor: "#eb4334",
              cursor: "pointer",
              border: "0px",
              fontSize: "20px",
            }}
            onClick={deleteFun}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
