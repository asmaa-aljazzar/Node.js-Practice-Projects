const fsPromises = require('fs').promises;

const command = process.argv[2].toLowerCase();
const note = process.argv[3];
const lineNumber = process.argv[3];


const addNotes = async (note) => {
    try {
        await fsPromises.appendFile("./notes.js", `${note}\n`);
        console.log(`Note Aded:\n${note}`);
    } catch (error) {
        console.error(error);
    }
}

const listNotes = async () => {
    try {
        const data = (await fsPromises.readFile("./notes.js")).toString();;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

const deleteNotes = async (lineNumber) => {
    try {
        const data = await fsPromises.readFile("./notes.js", 'utf8'); // collect the data
        const lines = await data.split('\n'); // array of lines
        let i = 0;
        // filter() creates a NEW array with only the elements
        // that pass the condition (callback returns true).
        console.log (`Content: ${lines[lineNumber - 1]}`);
        const filteredLines = lines.filter((_, index) => index != lineNumber - 1); // remove the index
        const newData =  filteredLines.join ('\n');
        console.log (`Deleting line number ${lineNumber}...`);
        const update = await fsPromises.writeFile ("notes.js", newData, 'utf8');
        console.log (`Content: ${newData[lineNumber - 1]}`);
    } catch (error) {
        if (error.syscall === 'open' && error.errno === -4058)
            console.log('Can\'t open ./note file');
        else
            console.log(error);
    }
}

if (command === "add") {
    addNotes(note);
} else if (command === "list") {
    listNotes();
} else if (command === "delete") {
    deleteNotes(lineNumber);
} else
    console.log("Invalid Input");
