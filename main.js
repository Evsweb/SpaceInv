window.onload = function() {
    console.log('загрузился');
    ship.style.left = '480px';
  };

function shipMoveLeft() {
    let ship = document.getElementById('ship');
    
    console.log(Number(ship.style.left))
}