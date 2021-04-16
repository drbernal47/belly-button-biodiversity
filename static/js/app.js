console.log("app.js loaded");


// Use d3.json() to fetch data from JSON file
d3.json("samples.json").then((data) => {
    console.log(data);

    var names = data['names'];
    var metadata = data['metadata'];
    var samples = data['samples'];

    // Add names as options on dropdown
    var dropdownMenu = d3.select("#selDataset");
    names.forEach(name => {
        var selection = dropdownMenu.append("option");
        selection.text(name);
    });

    // Retrieve the selected individual's ID number
    

    // Create the horizontal bar graph

        // Store data into trace



        // Create data and layout elements


        // Plot the horizontal bar graph

        // Need data/trace, layout, div id



  });


// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);


// Function called by DOM changes
function getData() {
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    
    // Update graphs based on selected value

}
