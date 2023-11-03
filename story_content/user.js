function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hmSGJJ0bBA":
        Script1();
        break;
  }
}

function Script1()
{
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||

(document.mozFullScreen && !document.webkitisFullScreen)) {

if (document.documentElement.requestFullScreen) (

document.documentElement.requestFullscreen(); } else if (document.documentElement.mozRequestFullScreen) {

document.documentElement.mozRequestFullScreen0:

} else if (document.documentElement.webkitRequestFullScreen) {

document.documentElement.webkitRequestFullScreen

(Element.ALLOW KEYBOARD_INPUT)

} else {

if (document.cancelFullScreen) (

document.cancelFullScreen();

} else if (document.mozCancelFullScreen) {

document.mozCancelFullScreen();

} else if (document.webkitCancelFullScreen) {
 document.webkitCancelFullScreen();

}
}
}

