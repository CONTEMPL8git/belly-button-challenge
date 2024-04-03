const filepath = "./samples.json";

d3.json(filepath).then(function(data) {
    console.log(data);
    populateSubjectID(data.names);

    
  });



function populateSubjectID(names){
    console.log(names);
    d3.select("select")
    .selectAll("option")
    .data(names)
    .enter()
    .append("option")
    .text(function (d) {return d;})
    .attr(function (d) {return d;})
};




function changeSubjectId(subjectId){
   
    console.log(subjectId);
};