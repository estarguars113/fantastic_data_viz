d3.csv("db/orders.csv", function(data) {
  console.log(data);
  $('.loader').addClass('disabled');
  $('.dimmer').removeClass('active');

  usingD3();
});

function usingD3() {

var margin = {top: 20, right: 10, bottom: 20, left: 10},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select('#cart').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


}
