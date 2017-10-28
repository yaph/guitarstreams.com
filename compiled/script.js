'use strict';

Array.from(document.getElementsByClassName('e')).forEach(function (elt) {
    elt.innerHTML = '<a href="mailto:' + elt.title + '@guitarstreams.com">' + elt.textContent + '</a>';
});