var SIZE = 9,
    container = document.getElementById('chords');


$.getJSON(chords_data, function(chordmap) {
    for (i in chords) {
        chord = chords[i];
        if ('undefined' !== typeof chordmap[chord]) {
            var seq = chordmap[chord][0],
                span = document.createElement('span');
            span.innerHTML = chord;
            span.setAttribute('data-chord', seq + ' ' + SIZE);
            container.appendChild(span);
            Chord.render([span]);
        }
    }
});