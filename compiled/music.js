'use strict';var alphabet=['A','B','C','D','E','F','G'];var chromatic_scale=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];var enharmonic_notes={'A':'G##','A#':'Bb','Ab':'G#','B':'Cb','B#':'C','Bb':'A#','C':'B#','C#':'Db','D':'C##','D#':'Eb','Db':'C#','E#':'F','Eb':'D#','F':'E#','F#':'Gb','G':'F##','G#':'Ab','Gb':'F#'};var major_roots=['C','G','D','A','E','B','Gb','Db','Ab','Eb','Bb','F'];var minor_roots=['A','E','B','F#','C#','G#','D#','Bb','F','C','G','D'];var intervals={P1:{semitones:0,name:'Perfect unison'},d2:{semitones:0,name:'Diminished second'},m2:{semitones:1,name:'Minor second'},A1:{semitones:1,name:'Augmented unison'},M2:{semitones:2,name:'Major second'},d3:{semitones:2,name:'Diminished third'},m3:{semitones:3,name:'Minor third'},A2:{semitones:3,name:'Augmented second'},M3:{semitones:4,name:'Major third'},d4:{semitones:4,name:'Diminished fourth'},P4:{semitones:5,name:'Perfect fourth'},A3:{semitones:5,name:'Augmented third'},d5:{semitones:6,name:'Diminished fifth'},A4:{semitones:6,name:'Augmented fourth'},P5:{semitones:7,name:'Perfect fifth'},d6:{semitones:7,name:'Diminished sixth'},m6:{semitones:8,name:'Minor sixth'},A5:{semitones:8,name:'Augmented fifth'},M6:{semitones:9,name:'Major sixth'},d7:{semitones:9,name:'Diminished seventh'},m7:{semitones:10,name:'Minor seventh'},A6:{semitones:10,name:'Augmented sixth'},M7:{semitones:11,name:'Major seventh'},d8:{semitones:11,name:'Diminished octave'},P8:{semitones:12,name:'Perfect octave'},A7:{semitones:12,name:'Augmented seventh'}};var scales={major:['P1','M2','M3','P4','P5','M6','M7','P8'],natural_minor:['P1','M2','m3','P4','P5','m6','m7','P8'],harmonic_minor:['P1','M2','m3','P4','P5','m6','M7','P8'],melodic_minor:['P1','M2','m3','P4','P5','M6','M7','P8'],dorian:['P1','M2','m3','P4','P5','M6','m7','P8'],locrian:['P1','m2','m3','P4','d5','m6','m7','P8'],lydian:['P1','M2','M3','A4','P5','M6','M7','P8'],mixolydian:['P1','M2','M3','P4','P5','M6','m7','P8'],phrygian:['P1','m2','m3','P4','P5','m6','m7','P8'],major_pentatonic:['P1','M2','M3','P5','M6','P8'],minor_pentatonic:['P1','m3','P4','P5','m7','P8']};var chords={'M':['R','M3','P5'],'m':['R','m3','P5'],'dim':['R','m3','d5'],'aug':['R','M3','A5'],'open5':['R','P5','P8'],'dim7':['R','m3','d5','d7'],'maj7':['R','M3','P5','M7'],'aug7':['R','M3','A5','m7'],'sus2':['R','P5','P8','M2'],'sus4':['R','P5','P8','P4']};function noteIndex(name){return name.endsWith('b')?chromatic_scale.indexOf(enharmonic_notes[name]):chromatic_scale.indexOf(name)}function noteLabel(name){return name.replace(/b/,'\u266D').replace(/#/,'\u266F')}function chordDiagram(chord_index,chord_id,instrument){var scale_index=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var name=chord_id;var img_name='';if(chord_id.includes('-')){name=chord_id.split('-')[0];img_name=chord_id}name=noteLabel(name);if(scale_index!==null){if([1,2,5].includes(scale_index)){name+='m'}else if(6===scale_index){name+='dim'}}var display_index=scale_index===null?'':scale_index+1+'. ';var positions=chord_index[instrument][name];var href='#';var src='/chord/chord-missing.svg';if('undefined'!==typeof positions){if(!img_name){img_name=positions[0]}href='/chord/'+instrument+'/'+name.replace('/','-')+'/';src='/chord/'+instrument+'/'+img_name+'.svg'}return'<a href="'+href+'" class="card chord">\n            <img class="section media" src="'+src+'" alt="'+name+'">\n            <div class="section double-padded">'+display_index+name+'</div>\n            </a>'}function scale(root){var mode=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'major';var offset=noteIndex(root);var alpha_offset=alphabet.indexOf(root[0]);var notes=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=scales[mode][Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var interval_id=_step.value;var alpha_index=parseInt(interval_id[1],10)-1;var letter=alphabet[(alpha_offset+alpha_index)%alphabet.length];var interval=intervals[interval_id];var index=(offset+interval.semitones)%chromatic_scale.length;var name=chromatic_scale[index];if(!name.startsWith(letter)){name=enharmonic_notes[name]}notes.push(name)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}return{notes:notes}}