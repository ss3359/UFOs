
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

   // Basic Javascript IF-STATEMENT
    // if(condition){code to execute}

    //Psudocode practice 
    // if(a date is entered){ Filter the default data to show only the date entered  };
    

function handleClick()
{
    let date = d3.select("#datetime").property("value"); 
    let filterData = tableData; 
    // Check to see if a date was entered and filter the data using that date

    if(date)
    {
        // Apply 'filter' to the table data to only keep 
        // the rows where the 'datetime' value matches the filter value
        filteredData = filterData.filter(row => row.datetime === date); 
    }; 
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filterData will
    // just be the original tableData. 

    buildTable(filteredData); 




}; 
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick); 

// Build the table when the page loads
buildTable(tableData); 




 
