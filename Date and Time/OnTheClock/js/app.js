var app = (function () {
	
	var clock;		
	var initialTime = 90;
	var showYellow = 45;
	var showRed = 15;
	
	$(document).ready(function() {
		var time = 0;
		
		var $clock = $('.clock');
		var $clockWrapper = $('#onClock');
		
		clock = new FlipClock($clock, initialTime, {
			// Create a minute counter
			clockFace: 'MinuteCounter',
			countdown: true,
			callbacks: {
				stop: function() {
					$clockWrapper.removeClass("red");						
					clock.setTime(initialTime + 1);
					clock.start();	
				},
				interval: function() {	
					if(clock){
						var time = clock.time.time;
						
						if(time > showYellow){							
							$clockWrapper.addClass("green").removeClass("red");
						} else if(time == showYellow){
							$clockWrapper.removeClass("green").addClass("yellow");
						} else if(time == showRed){
							$clockWrapper.removeClass("yellow").addClass("red");
						}							
					}											
				}					
			}				
		});
	});
	
	return {
		start: start
	}		
})();

app.start();