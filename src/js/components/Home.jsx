import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [tasks, setTasks] =React.useState([{label:"Run 3 miles",isDone:false},{label:"Shower", isDone:false},{label:"Study",isDone:false}])
const[userInput, setUserInput]=React.useState("")


const newTask=()=>{
	if(userInput ===""){
		return alert("You must type something in! (e.g. Eat BreakFast)")
	}else{
		setTasks([...tasks, userInput])
		setUserInput("")
	}


}
const enterKey=(event)=>{
	if (event.key === 'Enter'){
		setTasks([...tasks, userInput])
		setUserInput("")
		
	 event.preventDefault(); 
	}
}

const Remove=(index)=>{
	setTasks(tasks.filter((task, i) => i!== index))
}
const toggleCheckmark=(i)=>{
	let updatedTask= tasks.filter((task, index)=>{
		if (index ===i){
			return {...tasks, isDone:!task.isDone}  
		}else{
			return tasks
		}
	})
	setTasks(updatedTask)
}

	return (
		<div className="container">
			<h3>TO-DO List</h3>
			<div input-container>
				<input className="text-input" type="text" placeholder="Enter task here ..."
				onChange={(e) => setUserInput(e.target.value)}
				value={userInput}
				onKeyDown={enterKey}/>
				<button className="add" onClick={newTask}>Add Task</button>
			</div>
			<div>
				<ul className="lists">
					{tasks?.map((task, index) =>
						<li key={index}>
							<input className="checked" type="checkbox" onChange={ ()=>toggleCheckmark(index)} checked={tasks.isDone} />
							<label>{task.label}</label>
							<button className="remove" onClick={()=>Remove(index)}>🗑️</button>	
						</li>
					)}
				</ul>
			</div>
		</div>
		
	);
};                  

export default Home;