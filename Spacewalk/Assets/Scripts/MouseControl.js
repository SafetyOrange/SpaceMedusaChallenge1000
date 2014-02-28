#pragma strict

var horizontalSpeed : float;
var verticalSpeed : float;

function Start () {
	horizontalSpeed = 2.0;
	verticalSpeed = 2.0;
}
 
function Update (){
    // Get the mouse delta. This is not in the range -1...1
 
    var x : float = - horizontalSpeed * Input.GetAxis ("Mouse X");
    var y : float = - verticalSpeed * Input.GetAxis ("Mouse Y");
 
    transform.Translate (y, x, 0);
}