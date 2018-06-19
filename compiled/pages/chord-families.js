'use strict';var buttons=d3.selectAll('.tabs a');buttons.on('click',function(){buttons.style('background','#cccccc');d3.select(d3.event.target).style('background','#96ccff');var instrument=d3.event.target.text.toLowerCase();d3.select('#tab-content').html(render(instrument))});d3.select('.tabs a').dispatch('click');function render(){var instrument=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'guitar';var html='';var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=major_roots[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var root=_step.value;var chords=scale(root).chord_family.slice(0,-1);var diagrams=[];for(var i=0;i<chords.length;i++){diagrams.push(chordDiagram(chord_index,chords[i],instrument,'w-14-ns',i))}html+='<h3>'+root+' Major Chord Family</h3><div class="flex-wrap cf">'+diagrams.join('')+'</div>'}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}return html}