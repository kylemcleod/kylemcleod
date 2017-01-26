$('#splash-page').click(
		function slideup() {
			"use strict";
			console.log("i'm sliding!");
			$('#accordion').addClass('open');
			$('#splash-page').addClass('off-screen');
				
			});
			
			$('#splash-page').click(
			function overflow() {
			"use strict";
			console.log("overflow no mo");
			$('#main-wrapper').css('overflow', 'visible');
		});