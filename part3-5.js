const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let myArray = [[]];
let rows = 0;
let i = 0;
let current = "";

try {

while (i < csvString.length) {
    let char = csvString[i];
    if(char == ",") {
        myArray[rows].push(current);
        current = "";

    } else if (char == "\n") {
        myArray[rows].push(current);
        rows += 1;
        myArray[rows] = [];
        current = "";
    } else {
        current += char;
    }
    i++
}

if (i == csvString.length) {
    myArray[rows].push(current);
}

//console.log("Original 2D Array\n" + myArray);

} catch (error) {
    console.error(error);
}

//Part 3

console.log("Part 3\n")

const arrayOfObjects = [];
const columnHeaders = ["id", "name", "occupation", "age"];
numberOfRows = myArray.length;
cols = 0; 

try {
    for(let i = 1; i < numberOfRows; i++) {
        let matrix = {};

        cols = myArray[i].length;
        for(let j = 0; j < cols; j++) {
            //assign column header as data cell key
            let header = columnHeaders[j];
            matrix[header] = myArray[i][j];
        }
        // Push the newly created object into the array
        arrayOfObjects.push(matrix);
    }
} catch(error) {
    console.error(error);
}

console.log("\nFormatted Array of Objects:");
console.log(JSON.stringify(arrayOfObjects, null, 2));

console.log("Part 4\n\n");

//Sort array of objects
console.log("Sorted array of object:\n");
arrayOfObjects.sort((a,b) => a.id - b.id);
console.log(JSON.stringify(arrayOfObjects, null, 2));

//Remove last element of sorted array
console.log("Remove last element of sorted array\n\n")
arrayOfObjects.pop();
console.log(JSON.stringify(arrayOfObjects, null, 2)+"\n\n");


let value = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
//Insert an object at index 1
arrayOfObjects.splice(1, 0, value);

console.log("\nAfter inserting object at index 1: \n" + JSON.stringify(arrayOfObjects, null, 2));

//Add the following object to the end of the array:
value = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

//Insert object at end of array
arrayOfObjects.push(value);

console.log("\nAfter inserting object at the end of the array: \n" + JSON.stringify(arrayOfObjects, null, 2)+"\n\n");

//Calculate average age
let total = 0;

arrayOfObjects.forEach((array) => {
    const num = parseInt(array.age, 10);
    total += num;
});

let avgAge = total/arrayOfObjects.length;

console.log("\nThe average age of the group is " + avgAge + "\n\n");

//Part 5
console.log("Part 5\n");

let stringCSV = "";

try {
    // Get the keys from the first row in the array
    const firstRow = arrayOfObjects[0];
    const headers = Object.keys(firstRow);
    
    // Add headers to CSV
    stringCSV += headers.join(",");

    for (const rows of arrayOfObjects) {
        stringCSV += "\\n";
        headers.forEach((header) => {
            stringCSV += rows[header] + ",";
        });
        // Remove trailing comma if needed
        stringCSV = stringCSV.slice(0, -1);
    }
} catch(error) {
    console.error(error);
}

console.log(stringCSV);
