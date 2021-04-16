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

    // Plot charts using first ID number
    
    // Plot bar graph of OTD
    // Convert OTU IDs into strings for labels
    var otu_id_str = samples[0]['otu_ids'].slice(0,10).map(id => ('OTU ' + id));

    var trace1 = {
        x: samples[0]['sample_values'].slice(0,10),
        y: otu_id_str,
        orientation: 'h',
        type: 'bar',
        text: samples[0]['otu_labels'].slice(0,10)
    };

    console.log(trace1);

    var data1 = [trace1];

    var layout1 = {
        yaxis: {autorange: 'reversed'}
    };

    Plotly.newPlot('bar', data1, layout1);




  });


// Function called by DOM changes
function getData() {
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var nameID = dropdownMenu.property("value");
    console.log(nameID);
    
    // Update graphs based on selected value
    // Create the horizontal bar graph

        // Store data into trace



        // Create data and layout elements


        // Plot the horizontal bar graph

        // Need data/trace, layout, div id



}
