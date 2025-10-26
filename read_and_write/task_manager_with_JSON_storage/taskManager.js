const { readTasks, writeTasks} = require("./fileManager");

exports.addTask = async (title) => {
	try {
		const tasksArr = await readTasks (); // Should use await because readTasks will return a promis
		const newId = tasksArr.length + 1; // this will be the new id
		const newTask = {"id": newId, "task": title, "status": "pending"} // lower case for obj in json
		tasksArr.push (newTask)
		await writeTasks (tasksArr);
	} catch (err) {
		console.error (err);
	}
}

exports.list = async () => {
	try {
		const tasksArr = await readTasks ();
		console.log (JSON.stringify(tasksArr, null, 2));
	} catch (err){
		console.log (err);
	}
}

exports.markDone = async (id) => {
	try {
		const tasksArr = await readTasks ();
		// if id passed as a string it must convert into number.
		const idIndex = tasksArr.findIndex((t) => t.id === Number(id));
		if (idIndex == -1)
		{
			console.log (`Task ${id} not found!`);
			return;
		}
		tasksArr[idIndex].status = "Done";
		await writeTasks (tasksArr);
	} catch (err){
		console.log (err);
	}
}

exports.markInProgress = async (id) => {
	try {
		const tasksArr = await readTasks ();
		// if id passed as a string it must convert into number.
		const idIndex = tasksArr.findIndex((t) => t.id === Number(id));
		if (idIndex == -1)
		{
			console.log (`Task ${id} not found!`);
			return;
		}
		tasksArr[idIndex].status = "in progress";
		await writeTasks (tasksArr);
	} catch (err){
		console.log (err);
	}
}