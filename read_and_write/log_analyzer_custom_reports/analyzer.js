// Requires
const { parse_log_line } = require('./parser');
const { generate_report } = require('./report_generator');
const fs = require('fs');
const readline = require('readline');

// Variables
const logFile = process.argv[2];

const analyzeLogFile = async (logFile) =>{
	const ipCount = {};
	const endpointCount = {};

	try {
		if (!logFile) {
			console.log("No log file specified...");
			return;
		}

		const fileStream = fs.createReadStream(logFile);
		fileStream.on('error', (err) => {
			if (err.code === 'ENOENT') {
				console.error("File not found:", logFile);
			} else {
				console.error("Stream error:", err);
			}
			process.exit (1);
		});

		const rl = readline.createInterface({
			input: fileStream,
			crlfDelay: Infinity
		});

		for await (line of rl)
		{
			const {ip, endpoint} = parse_log_line (line);
			if (!ip || !endpoint) continue;
			ipCount[ip] = (ipCount[ip] || 0) + 1;
			endpointCount[endpoint] = (endpointCount[endpoint] || 0) + 1;
		}
		await generate_report (ipCount, endpointCount);
		console.log ("Report Generated Successfully!");
	}
	catch (err) {
		console.error(err);
	}
}

analyzeLogFile (logFile);

//? 1. Counting IPs while reading logs
// ipCount[ip] = (ipCount[ip] || 0) + 1;
// - If ipCount[ip] exists, increment it
// - If it doesn't exist (undefined), || 0 makes it 0, then add 1
// - This is a compact way to count occurrences
// Example: first '127.0.0.1' → 0 + 1 = 1, second → 1 + 1 = 2

//? 2. Async iteration with readline
// When reading a file line by line:
// for await (const line of rl) { ... }
// - 'rl' is an async iterable
// - 'for await...of' waits for each line to arrive
// - Allows processing large files without loading the entire file in memory

//? 3. Putting it all together
// 1. Create ipCount and endpointCounts objects
// 2. Read the log line by line
// 3. Parse each line (extract IP and endpoint)
// 4. Increment counters in ipCount and endpointCounts
// 5. After reading all lines, determine most common endpoint
// 6. Call writeToReport() to save the report