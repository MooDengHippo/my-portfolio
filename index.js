// Thammaruksa Song
const soundLink = document.getElementById('soundLink');
const clickSound = document.getElementById('clickSound');

soundLink.addEventListener('click', function(event) {event.preventDefault(); clickSound.play();});
