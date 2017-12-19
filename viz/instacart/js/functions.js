

/*d3.csv("db/orders.csv")
  .on("progress", function(evt) {
         console.log("Amount loaded: " + evt.loaded)
     })
     .get(function(data) {
         console.log(data);
         $('.loader').addClass('disabled');
         $('.dimmer').removeClass('active');
           usingD3();
     });
*/
d3.csv('db/products.csv', function(data) {
    console.log(data);
    console.log("test_1");
    $('.loader').addClass('disabled');
    $('.dimmer').removeClass('active');
});

d3.csv('db/objects.csv', function(data) {
    console.log(data);
    $('.loader').addClass('disabled');
    $('.dimmer').removeClass('active');
});
/**
 var db_dow = d3.nest()
      .key(function(d) { return data.order_dow; })
      .rollup(function(d) {
        return d3.sum(d, function(g) {return g.value; });})
      .entries(data);
 */


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
