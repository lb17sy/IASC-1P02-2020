var start = new Date();

function stopTime(){
	var stop = new Date();
	var result = (stop.getTime() - start.getTime())/600;
	alert("You have been on the page for: "+result+" seconds");
}
