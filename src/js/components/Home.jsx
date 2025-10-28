import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [todoList, setTodoList] =React.useState("")


	return (
		<div className="container text-center">
			<h2>TO-DO List</h2>
			<input type="text" placeholder="Enter something here ..."
			 onChange={(e) => setTodoList(e.target.value)}
			 value={todoList}/>
			<button className="add">Add to your list</button>
			<div>
				<ul className="lists">
					<li>{item}</li>
					<li>Study</li>
					<li>Class</li>
				</ul>
			</div>
		</div>
		
	);
};                  

export default Home;