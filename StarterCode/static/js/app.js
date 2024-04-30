const filepath = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

d3.json(filepath).then(function(data) {
   console.log("data", data);
    console.log("data.samples", data.samples)
    console.log("data.samples[0]", data.samples[0].id)
    populateSubjectID(data.names);

    var data_2 = [
        {
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [20, 14, 23],
          type: 'bar'
        }
      ];
      
      Plotly.newPlot('bar', data_2);
    
  });



function populateSubjectID(names){
  //  console.log(names);
    d3.select("select")
    .selectAll("option")
    .data(names)
    .enter()
    .append("option")
    .text(function (d) {return d;})
    .attr(function (d) {return d;})
};




function changeSubjectId(subjectId){
   
  //  console.log(subjectId);
};