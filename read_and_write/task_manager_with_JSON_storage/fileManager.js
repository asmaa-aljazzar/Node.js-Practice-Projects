// Here we will read and write to the json file

// file manager
const fsPromises = require ("fs").promises;

//* To make readTasks() reusable, 
// it should always return an array—either parsed tasks or an empty array.
//! This function can't calling here
exports.readTasks = async () => {
	try {
		// read tasks into data array
		const data = await fsPromises.readFile ("./tasks.json", 'utf8');
		// parse what inside to an array format and return it
			return data? JSON.parse (data) : []; // always return something, false => if file is empty and no [] from creating new inside
	} catch (err)
	{
		if (err.code == 'ENOENT')
		{
			await fsPromises.writeFile ("./tasks.json", '[]'); // create the file if not exist with empty array
			return [];// return that it is an empty array
		}

		else
			console.error (err);
	}

}

exports.writeTasks = async (taskArray) =>
{
	try {
		// convert the task array into string so can write it in the json file
		await fsPromises.writeFile ('./tasks.json', JSON.stringify(taskArray, null, 2));// null for function, 2 mean 2 space for each level
	} catch (err){
		console.error (err);
	}
}

// when do this it will overwrite everything i exported above
// module.exports = {fsPromises};