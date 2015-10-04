"use strict" ;
var lost = false;  

window.onload = function()
 {
    $("start").onclick = sClicked;
    $("end").onmouseover = hoverEnd;
    var bound = $$("div#maze div.boundary");
    for (var i = 0; i < bound.length; i++)
	 {
        bound[i].onmouseover = out;
    }
};

function out() 
{
    lost = true;
    $("status").textContent = "You lose!";
    var bound = $$("div#maze div.boundary");
    for (var i = 0; i < bound.length; i++)
	 {
        bound[i].addClassName("youlose");
    }
}

function sClicked() {
    var lose = false;
    $("status").textContent = "Find the end!";
    var bound = $$("div#maze div.boundary");
    for (var i = 0; i < bound.length; i++) 
	{
        bound[i].removeClassName("youlose");
    }
}

function hoverEnd()
 {
    if (!lost) 
	{
        $("status").textContent = "You Win!!!";
    }
}
