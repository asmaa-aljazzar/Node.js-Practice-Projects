
const { addTask, list, markDone, markInProgress} = require("./taskManager");

// Wrap everything in an async IIFE to allow using `await`
// because our task functions are asynchronous.
(
	async () => {
		const command = process.argv[2];
		const option = process.argv[3];

		if (command === 'add') {
			if (option)
			{
				const title = option.trim();
				await addTask(title)

			}
			else {
				console.error("Input must include the task title");
				console.error("try:\tnpm start add < task title >");
			}

		}
		else if (command === 'list') {
			await list()
		}
		else if (command === 'done') {
			if (option)
				await markDone(option);
			else {
				console.error("Input must include the task id");
				console.error("try:\tnpm start done < id >");
			}
		}
		else if (command === 'progress') {
			if (option)
				await markInProgress(option);
			else {
				console.error("Input must include the task id");
				console.error("try:\tnpm start done < id >");
			}
		}
		else
			console.error("Invalid Command");

	}
)();