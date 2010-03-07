<!-- Begin MENU CODE

// POP-UP MENU BUTTON WITH SITE LINKS - MODIFY LINKS BELOW

/*
     Initialize and render the Menu when its elements are ready 
     to be scripted.
*/

YAHOO.util.Event.onContentReady("basicmenu", function () {

    /*
         Instantiate a Menu:  The first argument passed to the 
         constructor is the id of the element in the page 
         representing the Menu; the second is an object literal 
         of configuration properties.
    */

	var oMenu = new YAHOO.widget.Menu("basicmenu", { fixedcenter: true });


    /*
         Call the "render" method with no arguments since the 
         markup for this Menu instance is already exists in the page.
    */

	oMenu.render();

	
	YAHOO.util.Event.addListener("menutoggle", "click", oMenu.show, null, oMenu);

});


// CHANGE ANY OF THESE VARIABLES


var link1		= "http://mail.yahoo.com"		// url, anchor, or relative link
var link1_name	= "Yahoo! Mail"		// what name to give to the link 

var link2		= "http://addressbook.yahoo.com"
var link2_name	= "Yahoo! Address Book"

var link3		= "http://calendar.yahoo.com"
var link3_name	= "Yahoo! Calendar"

var link4		= "http://notepad.yahoo.com"
var link4_name	= "Yahoo! Notepad"


document.write('<div id="basicmenu" class="yuimenu">');
document.write('<div id="bd">');
document.write('<ul class="first-of-type">');
document.write('<li class="yuimenuitem"><a class="yuimenuitemlabel" href="'+link1+'">'+link1_name+'</a></li>');
document.write('<li class="yuimenuitem"><a class="yuimenuitemlabel" href="'+link2+'">'+link2_name+'</a></li>');
document.write('<li class="yuimenuitem"><a class="yuimenuitemlabel" href="'+link3+'">'+link3_name+'</a></li>');
document.write('<li class="yuimenuitem"><a class="yuimenuitemlabel" href="'+link4+'">'+link4_name+'</a></li>');
document.write('</ul></div></div>');


//  End -->
    