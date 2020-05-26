window.addEventListener('resize', fixPosition)
function fixPosition () {
  if (window.innerWidth > 1000) document.getElementById('container').style.left = (window.innerWidth - 1000) / 2 + 'px'
  else document.getElementById('container').style.left = '0px'
  if (window.innerHeight > 600) document.getElementById('container').style.top = (window.innerHeight - 600) / 3 + 'px'
  else document.getElementById('container').style.top = '0px'
}
