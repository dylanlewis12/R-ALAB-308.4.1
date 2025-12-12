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

console.log(myArray);

} catch (error) {
    console.error(error);
}