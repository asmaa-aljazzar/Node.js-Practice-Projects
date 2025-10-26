const fsPromises = require("fs").promises;
const reportFile = 'report.txt'; //? Output file

function getMostCommonEndpoint(endpointCounts) {
	let mostCommonEndpoint;
	let mostCommonEndpointCount = 0;
	for (key in endpointCounts) {
		if (endpointCounts[key] > mostCommonEndpointCount) {
			mostCommonEndpoint = key;
			mostCommonEndpointCount = endpointCounts[key];
		}
	}
	return {
		"most": mostCommonEndpoint,
		"count": mostCommonEndpointCount
	}
}

const writeToReport = async (mostCommonEndpoint, mostCommonEndpointCount, uniqueIPCount, endpointCount, ipCount) => {
	try {
		await fsPromises.writeFile(reportFile, '======== Log Report ========\n');
		await fsPromises.appendFile(reportFile, `Total unique IP: ${uniqueIPCount}\n`);
		if (endpointCount === 0)
			await fsPromises.appendFile(reportFile, `Most common endpoint: No data avilable\n`);
		else {
			await fsPromises.appendFile(reportFile, `Most common endpoint: ${mostCommonEndpoint} (${mostCommonEndpointCount} requests)\n`);
		}
		await fsPromises.appendFile(reportFile, `Request per IP:\n`);
		if (uniqueIPCount === 0)
			await fsPromises.appendFile(reportFile, 'No data avilable');
		else {
			for (const key in ipCount)
				await fsPromises.appendFile(reportFile, `${key}: ${ipCount[key]}\n`); //? 3rd
			
		}
	} catch (err)
	{
		if (err.code === "EACCES" || err.code === "EPERM") {
			console.error("Permission denied while writing report file.");
		} else if (err.code === "ENOENT") {
			console.error("Directory does not exist for report file path.");
		} else {
			console.error("Unexpected file write error:", err);
		}
	}
}

exports.generate_report = async (ipCount, endpointCounts) => {
		//! more clean way to loop
		//? use Object.keys to count the keys
		const uniqueIPCount = Object.keys(ipCount).length;
		const endpointCount = Object.keys(endpointCounts).length;
		const { most: mostCommonEndpoint, count: mostCommonEndpointCount } = getMostCommonEndpoint(endpointCounts);
		await writeToReport(mostCommonEndpoint, mostCommonEndpointCount, uniqueIPCount, endpointCount, ipCount);
}


// The function getMostCommonEndpoint(endpointCounts) returns an object like:
// { most: "/api/login", Count: 13 }
//
// Object destructuring allows us to "extract" values from that object into variables in a single line.
//
// Syntax: { propertyName: newVariableName } = object
// - "most" is the property in the returned object.
// - "mostCommonEndpoint" is the new variable we create to hold the value of "most".
// - "Count" is the property in the returned object.
// - "mostCommonEndpointCount" is the new variable to hold the value of "Count".
//
// After this line:
// mostCommonEndpoint === "/api/login"
// mostCommonEndpointCount === 13