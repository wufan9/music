function remSize(){
    var devicewidth =  document.documentElement.clientWidth || window.innerWidth;
    if(devicewidth>=750){
        devicewidth = 750
    }
    if(devicewidth <=320){
        devicewidth = 320
    }

    document.documentElement.style.fontSize = (devicewidth/7.5) + "px";
    document.body.style.fontSize = 0.16 + "rem"
}

remSize()

window.onresize = function(){
    remSize()
}