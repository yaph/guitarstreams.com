'use strict';

var notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
var major_scale_intervals = [2, 2, 1, 2, 2, 2, 1];
var major_scale_interval_sums = major_scale_intervals.map(function (x, i) {
    return sum(major_scale_intervals.slice(0, i + 1));
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = notes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var root = _step.value;

        //    if (root.endsWith('#')) continue;
        var current_scale = [root];
        var root_index = notes.indexOf(root);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = major_scale_interval_sums[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var add = _step2.value;

                add += root_index;
                if (add >= 12) add -= 12;
                current_scale.push(notes[add]);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        console.log(current_scale);
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

function sum(list) {
    return list.reduce(function (accumulator, current) {
        return accumulator + current;
    });
}