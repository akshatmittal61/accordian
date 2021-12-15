import React from "react";
import Accordian from "./Accordian/Accordian";

const App = () => {
	return (
		<>
			<header>
				<h1>Simple Accordian</h1>
			</header>
			<main>
				<Accordian
					summary={
						<div className="my-text">
							Getting Started with Planner
						</div>
					}
					details={
						<div className="my-content">
							Get more done with Planner. Manage, capture and edit
							your daily events, notes and tasks.
							<div>
								<a href="https://planner-61.herokuapp.com">
									Planner: planner-61.herokuapp.com
								</a>
							</div>
						</div>
					}
					defaultExpanded
				/>
				<Accordian />
			</main>
			<footer>
				<span>
					&copy; Copyright{" "}
					<a href="https://akshatmittal61.github.io/portfolio">
						Akshat Mittal
					</a>
				</span>
			</footer>
		</>
	);
};

export default App;
