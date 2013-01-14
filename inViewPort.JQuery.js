(function($){
	$.fn.inViewPort = function ( options ) {

		var settings = $.extend({'minPercentageInView' : 100}, options);
		this.each(function() {
  			var $this = $(this),
  			$win = $(window),
  			isVisible = function () {
  				var min = settings.minPercentageInView / 100;
  				xMin = $this.width() * min;
  				yMin = $this.height() * min;
  				winPosX = $win.scrollLeft() + $win.width(),
  				winPosY = $win.scrollTop() + $win.height(),
  				elPosX = $this.offset().left + xMin,
  				elPosY = $this.offset().top + yMin;
				if (winPosX > elPosX && winPosY > elPosY) {
					$this.addClass('in-view');
					$this.off('vis');
				}
			},
			trg = function () {
				$this.trigger('vis');
			};
  			$win.on('resize', trg)
  			.on('scroll', trg)
  			.on('ready', trg)
  			.on('vis', isVisible);
	 	});
	};
})(jQuery);
