inViewPort
==========

jQuery plugin that adds a CSS class to selected elements when they have been scrolled into the viewport for the first time.

Use it to activate some particular behaviour when the target element is scrolled into view for the first time. Note that the plugin _does not remove the classname_ once the target element is scrolled out of view again.

Usage: `$(selector).inviewport(options)`, where options is an object which may contain two properties: `threshold` and `className`:

    $('#target').inviewport({
      threshold: 75, 
      className: 'myClass'
    })

`threshold` sets the minimum percentage of the element which has to be in view before the class gets added. Defaults to 100. 

`className` sets the name of the class. Defaults to 'in-view'.
