'use strict';var settings={'instrument':Cookies.get('instrument')||'guitar'};var button_active_color='#96ccff';var event_instrument=new Event('setInstrument',{bubbles:true});window.onload=function(){document.querySelectorAll('.settings .instrument').forEach(function(elt){elt.style.backgroundColor='';elt.onclick=function(){elt.dispatchEvent(event_instrument);setInstrument(elt.name);document.querySelectorAll('.settings .instrument').forEach(function(elt){return elt.style.backgroundColor=''});elt.style.backgroundColor=button_active_color}});document.querySelector('.instrument[name="'+settings.instrument+'"]').style.backgroundColor=button_active_color};function setInstrument(instrument){settings.instrument=instrument;Cookies.set('instrument',instrument)}