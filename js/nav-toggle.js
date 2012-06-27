/* Toggle the navbar */
window.onload = function() {
  document.getElementById('toggle').onclick = doToggle;
  document.getElementById('toggle').onkeydown = doToggle;
};

function doToggle() {
  var e = document.getElementById('siteNav');
  if (e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
    
  var caret = document.getElementById('toggleCaret');

  if (caret.className === "icon-caret-right")
    caret.className = "icon-caret-down";
  else if (caret.className === "icon-caret-down")
    caret.className = "icon-caret-right";
}