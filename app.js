
// import the data from data.js
const tableData = data; 

// Reference the HTML table using d3
var tbody = d3.select("tbody"); 

// Simple function using console.log() to print out something to the console.
function hello_world()
{

console.log("Hello World"); 

}; 
hello_world()

function say_something()
{

    return "Hi!"; 

}; 
say_something(); 


// Takes two numbers and adds them together

function add(a, b)
{

    return a+b; 

}

function buildTable(data)
{
    // First, clear any existing data
    tbody.html(""); 

    //Next, loop through each object for each value in the row
    data.forEach((dataRow) => {
    // Append a row to the table body    
    let row = tbody.append("tr"); 

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
        let cell = row.append("td"); 
        cell.text(val); 
        }); 

    }); 

}



 
