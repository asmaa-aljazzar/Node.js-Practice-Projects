//* almost anything that gives you a defined interface to interact with something can be called an API.
// Node.js built-in modules (fs, path, http) → Node API.
// Web services (like Twitter, OpenWeather, GitHub) → Web API. You send requests, get responses.
// Libraries or frameworks (like Express, Lodash, React) → their functions/methods are APIs for you to use.

//? Line example: 127.0.0.1 - - [15/Oct/2025:14:22:36 +0300] "GET /api/users HTTP/1.1" 200 512 "-" "Mozilla/5.0"

exports.parse_log_line = (line) => {

	if (!line)
		return null;
	const ipMatch = line.match(/(\d{1,3}\.){3}(\d{1,3})/);
	const ip = ipMatch ? ipMatch[0] : null;

	const endpointMach = line.match( /(GET|POST|PUT|DELETE|PATCH)\s+([^\s]+)\s+HTTP/);
	const endpoint = endpointMach? endpointMach[2] : null;

	return {
		"ip": ip,
		"endpoint": endpoint
	}
}
