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
    
    // Plot bar graph of OTU
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

    // Plot bubble chart of all OTU samples
    var trace2 = {
        x: samples[0]['otu_ids'],
        y: samples[0]['sample_values'],
        mode: 'markers',
        marker: {
            size: samples[0]['sample_values'],
            color: samples[0]['otu_ids']
        },
        text: samples[0]['otu_labels']
    };

    var data2 = [trace2];

    var layout2 = {
        xaxis: {title: "OTU ID"}
    };

    Plotly.newPlot('bubble', data2, layout2);

    // Print metadata
    var chosen_metadata = metadata[0];

    console.log(chosen_metadata);

    var demoBody = d3.select("#sample-metadata");
    demoBody.append("p").text(`id: ${chosen_metadata['id']}`);
    demoBody.append("p").text(`ethnicity: ${chosen_metadata['ethnicity']}`);
    demoBody.append("p").text(`gender: ${chosen_metadata['gender']}`);
    demoBody.append("p").text(`age: ${chosen_metadata['age']}`);
    demoBody.append("p").text(`location: ${chosen_metadata['location']}`);
    demoBody.append("p").text(`bbtype: ${chosen_metadata['bbtype']}`);
    demoBody.append("p").text(`wfreq: ${chosen_metadata['wfreq']}`);


  });


// Function called by DOM changes
function getData() {
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var nameID = dropdownMenu.property("value");
    console.log(nameID);
    
    // Use d3.json() to fetch data from JSON file
    d3.json("samples.json").then((data) => {
        console.log(data);

        var names = data['names'];
        var metadata = data['metadata'];
        var samples = data['samples'];

        // Retrieve json index from id
        var nameIndex = names.findIndex(id => id === nameID);
        console.log(`Index is ${nameIndex}`);


        // Plot charts using specified ID number
        
        // Plot bar graph of OTU
        // Convert OTU IDs into strings for labels
        var otu_id_str = samples[nameIndex]['otu_ids'].slice(0,10).map(id => ('OTU ' + id));

        var trace1 = {
            x: samples[nameIndex]['sample_values'].slice(0,10),
            y: otu_id_str,
            orientation: 'h',
            type: 'bar',
            text: samples[nameIndex]['otu_labels'].slice(0,10)
        };

        console.log(trace1);

        var data1 = [trace1];

        var layout1 = {
            yaxis: {autorange: 'reversed'}
        };

        Plotly.newPlot('bar', data1, layout1);

        // Plot bubble chart of all OTU samples
        var trace2 = {
            x: samples[nameIndex]['otu_ids'],
            y: samples[nameIndex]['sample_values'],
            mode: 'markers',
            marker: {
                size: samples[nameIndex]['sample_values'],
                color: samples[nameIndex]['otu_ids']
            },
            text: samples[nameIndex]['otu_labels']
        };

        var data2 = [trace2];

        var layout2 = {
            xaxis: {title: "OTU ID"}
        };

        Plotly.newPlot('bubble', data2, layout2);

        // Print metadata
        // Remove previous metadata
        var demoBody = d3.select("#sample-metadata"); 
        demoBody.selectAll("p").remove();

        // Print new metadata
        var chosen_metadata = metadata[nameIndex];

        console.log(chosen_metadata);

        demoBody.append("p").text(`id: ${chosen_metadata['id']}`);
        demoBody.append("p").text(`ethnicity: ${chosen_metadata['ethnicity']}`);
        demoBody.append("p").text(`gender: ${chosen_metadata['gender']}`);
        demoBody.append("p").text(`age: ${chosen_metadata['age']}`);
        demoBody.append("p").text(`location: ${chosen_metadata['location']}`);
        demoBody.append("p").text(`bbtype: ${chosen_metadata['bbtype']}`);
        demoBody.append("p").text(`wfreq: ${chosen_metadata['wfreq']}`);


    });


}
