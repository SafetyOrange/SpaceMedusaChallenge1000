#pragma strict

var horizontalSpeed : float;
var verticalSpeed : float;

function Start () {
	horizontalSpeed = 2.0;
	verticalSpeed = 2.0;
}
 
function FixedUpdate (){
    // Get the mouse delta. This is not in the range -1...1
 
    var x : float = - horizontalSpeed * Input.GetAxis ("Mouse X");
    var y : float = - verticalSpeed * Input.GetAxis ("Mouse Y");
 
    transform.Translate (y, x, 0);
//	rigidbody.AddForce(x, 0, y);
//	var localForce : Vector3 = camera.TransformDirection(new Vector3(x, 0, y));
//	localForce.y = 0;
//	rigidbody.AddForce(localForce);
}