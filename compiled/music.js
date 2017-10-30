'use strict';

// https://en.wikipedia.org/wiki/Interval_(music)#Main_intervals
var intervals = {
    P1: { semitones: 0, name: 'Perfect unison' },
    d2: { semitones: 0, name: 'Diminished second' },
    m2: { semitones: 1, name: 'Minor second' },
    A1: { semitones: 1, name: 'Augmented unison' },
    M2: { semitones: 2, name: 'Major second' },
    d3: { semitones: 2, name: 'Diminished third' },
    m3: { semitones: 3, name: 'Minor third' },
    A2: { semitones: 3, name: 'Augmented second' },
    M3: { semitones: 4, name: 'Major third' },
    d4: { semitones: 4, name: 'Diminished fourth' },
    P4: { semitones: 5, name: 'Perfect fourth' },
    A3: { semitones: 5, name: 'Augmented third' },
    d5: { semitones: 6, name: 'Diminished fifth' },
    A4: { semitones: 6, name: 'Augmented fourth' },
    P5: { semitones: 7, name: 'Perfect fifth' },
    d6: { semitones: 7, name: 'Diminished sixth' },
    m6: { semitones: 8, name: 'Minor sixth' },
    A5: { semitones: 8, name: 'Augmented fifth' },
    M6: { semitones: 9, name: 'Major sixth' },
    d7: { semitones: 9, name: 'Diminished seventh' },
    m7: { semitones: 10, name: 'Minor seventh' },
    A6: { semitones: 10, name: 'Augmented sixth' },
    M7: { semitones: 11, name: 'Major seventh' },
    d8: { semitones: 11, name: 'Diminished octave' },
    P8: { semitones: 12, name: 'Perfect octave' },
    A7: { semitones: 12, name: 'Augmented seventh' }
};

var scales = {
    major: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7', 'P8'],
    natural_minor: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'm7', 'P8'],
    harmonic_minor: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'M7', 'P8'],
    melodic_minor: ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'M7', 'P8'],
    dorian: ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'm7', 'P8'],
    locrian: ['P1', 'm2', 'm3', 'P4', 'd5', 'm6', 'm7', 'P8'],
    lydian: ['P1', 'M2', 'M3', 'A4', 'P5', 'M6', 'M7', 'P8'],
    mixolydian: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'm7', 'P8'],
    phrygian: ['P1', 'm2', 'm3', 'P4', 'P5', 'm6', 'm7', 'P8'],
    major_pentatonic: ['P1', 'M2', 'M3', 'P5', 'M6', 'P8'],
    minor_pentatonic: ['P1', 'm3', 'P4', 'P5', 'm7', 'P8']
};

var notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
var note_aliases = {
    'Bb': 'A#',
    'Db': 'C#',
    'Eb': 'D#',
    'Gb': 'F#',
    'Ab': 'G#'
};

function scale(root) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'major';

    var offset = notes.indexOf(root);
    if (-1 === offset) {
        offset = notes.indexOf(note_aliases[root]);
    }
    var _notes = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = scales[mode][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var interval_id = _step.value;

            var interval = intervals[interval_id];
            var note_index = offset + interval.semitones;
            if (note_index >= 12) {
                note_index -= 12;
            }
            _notes.push(notes[note_index]);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return {
        notes: _notes
    };
}