inViewPort
==========

jQuert plugin that adds a CSS class to elements when they are in the viewport.

Usage: $(selector).inViewPort(options),

where options is an object which may contain two properties: 'threshold' and 'className'.

'threshold' sets the minimum percentage of the element which has to be in view before the class gets added. 

Threshold defaults to 100. 

'className' sets the name of the class. Defaults to 'in-view'.
