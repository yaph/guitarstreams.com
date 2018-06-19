'use strict';var arc_len=2*(Math.PI/major_roots.length);var arc_start=0.98;var arc_end=0.44;var radians=Math.PI/180;var svg=d3.select('#circle-of-fifths');var outer_radius=svg.node().parentElement.getBoundingClientRect().width/2.1;svg.attr('width',outer_radius*2).attr('height',outer_radius*2);var circle_radii=[arc_start,0.68,arc_end];var tick_start=-outer_radius*arc_start;var tick_length=outer_radius*0.54;var major_label_radius=outer_radius*0.83;var minor_label_radius=outer_radius*0.56;var major_label_size=outer_radius*0.14;var minor_label_size=outer_radius*0.075;var arc=d3.arc().innerRadius(outer_radius*arc_end).outerRadius(outer_radius*arc_start).startAngle(function(d,i){return d*arc_len-arc_len/2}).endAngle(function(d,i){return d*arc_len+arc_len/2});var range=d3.range(0,major_roots.length);var tick_scale=d3.scaleLinear().range([0,330]).domain([0,11]);var main_group=svg.append('g').attr('id','main-group').attr('transform','translate('+outer_radius+', '+outer_radius+')');main_group.append('g').selectAll('.circle').data(circle_radii).enter().append('circle').attr('class','circle').attr('x',0).attr('y',0).attr('r',function(d){return outer_radius*d});main_group.append('g').selectAll('.major-label').data(range).enter().append('text').attr('class','major-label pointer').attr('text-anchor','middle').attr('data-name',function(d){return major_roots[d]+'-major'}).attr('x',function(d){return major_label_radius*Math.sin(tick_scale(d)*radians)}).attr('y',function(d){return-major_label_radius*Math.cos(tick_scale(d)*radians)+major_label_size/2}).style('font-size',major_label_size+'px').text(function(d){return noteLabel(major_roots[d])}).on('click',highlight);main_group.append('g').selectAll('.minor-label').data(range).enter().append('text').attr('class','minor-label pointer').attr('text-anchor','middle').attr('data-name',function(d){return minor_roots[d]+'-natural_minor'}).attr('x',function(d){return minor_label_radius*Math.sin(tick_scale(d)*radians)}).attr('y',function(d){return-minor_label_radius*Math.cos(tick_scale(d)*radians)+minor_label_size/2}).style('font-size',minor_label_size+'px').text(function(d){return noteLabel(minor_roots[d])+'m'}).on('click',highlight);main_group.append('g').selectAll('.ticks').data(d3.range(0,12)).enter().append('line').attr('class','tick').attr('x1',0).attr('x2',0).attr('y1',tick_start).attr('y2',tick_start+tick_length).attr('transform',function(d){return'rotate('+(tick_scale(d)+360/24)+')'});svg.select('text[data-name="C-major"]').dispatch('click');function chordFamilies(root,mode){svg.selectAll('text').classed('selected',false);var text=svg.select('text[data-name="'+root+'-'+mode+'"]');text.classed('selected',true);chords(root,'guitar',mode);chords(root,'ukulele',mode)}function chords(root,instrument,mode){var diagrams=scale(root).chord_family.slice(0,-1).map(function(c,i){return chordDiagram(chord_index,c,instrument,'w-14-ns',i)});document.querySelector('#chord-families .'+instrument).innerHTML=diagrams.join('')}function highlight(data,index){chordFamilies(major_roots[index],'major');main_group.selectAll('.highlight').remove();var g=main_group.insert('g',':first-child').attr('class','highlight');g.selectAll('path').data([index-1,index,index+1]).enter().append('path').attr('d',arc).style('fill','rgba(0, 0, 0, 0.1)')}