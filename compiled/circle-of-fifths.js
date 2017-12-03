'use strict';

var outer_radius = 250;
var major_roots = ['C', 'G', 'D', 'A', 'E', 'F#', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'];
var minor_roots = ['a', 'e', 'b', 'f#', 'c#', 'g#', 'd#', 'bb', 'f', 'c', 'g', 'd'];
var radians = Math.PI / 180;

var svg = d3.select('#circle-of-fifths');
svg.attr('width', outer_radius * 2).attr('height', outer_radius * 2);

var circle_stroke = outer_radius * 0.05;

var major_label_radius = outer_radius * 0.92;
var minor_label_radius = outer_radius * 0.6;
var major_label_size = outer_radius * 0.16;
var minor_label_size = outer_radius * 0.14;

var range = d3.range(0, major_roots.length);
var tick_scale = d3.scaleLinear().range([0, 330]).domain([0, 11]);

var main_group = svg.append('g').attr('id', 'main-group').attr('transform', 'translate(' + outer_radius + ', ' + outer_radius + ')');

main_group.append('circle').attr('id', 'circle').attr('x', 0).attr('y', 0).attr('r', outer_radius * 0.76).style('stroke-width', circle_stroke);

main_group.selectAll('.major-label').data(range).enter().append('text').attr('class', 'major-label').attr('text-anchor', 'middle').attr('x', function (d) {
    return major_label_radius * Math.sin(tick_scale(d) * radians);
}).attr('y', function (d) {
    return -major_label_radius * Math.cos(tick_scale(d) * radians) + circle_stroke;
}).style('font-size', major_label_size).text(function (d) {
    return noteLabel(major_roots[d]);
});

main_group.selectAll('.minor-label').data(range).enter().append('text').attr('class', 'minor-label').attr('text-anchor', 'middle').attr('x', function (d) {
    return minor_label_radius * Math.sin(tick_scale(d) * radians);
}).attr('y', function (d) {
    return -minor_label_radius * Math.cos(tick_scale(d) * radians) + circle_stroke;
}).style('font-size', minor_label_size).text(function (d) {
    return noteLabel(minor_roots[d]);
});