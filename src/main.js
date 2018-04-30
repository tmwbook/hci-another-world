import "aframe";
import "aframe-text-geometry-component";

var scene = document.querySelector('a-scene');
var camera = document.querySelector('a-camera');

var currentTeamNum = 1;

document.addEventListener('keyup', (event) => {
  if(event.keyCode == 32){
    // Place the flag where the camera is looking
    var pole = document.createElement('a-cylinder');
    pole.setAttribute('color', 'red');
    pole.setAttribute('height', '9');
    pole.setAttribute('radius', '.12');

    var flag = document.createElement('a-triangle');
    flag.setAttribute('color', 'red');
    flag.setAttribute('rotation', '180 0 -90');
    flag.setAttribute('position', '.4 4 0');
    flag.setAttribute('material', 'side', 'double');
    var teamNum = document.createElement('a-entity');
    teamNum.setAttribute('text-geometry', 'value', currentTeamNum);
    teamNum.setAttribute("font", "assets/font.json");
    teamNum.setAttribute('position', '0 5 0');
    currentTeamNum += 1;
    pole.appendChild(flag);
    var position = camera.object3D.getWorldPosition();
    position.y = 0;
    pole.setAttribute('position', position);

   pole.appendChild(teamNum);
  scene.appendChild(pole);
  }
  console.log(event.keyCode);
})
