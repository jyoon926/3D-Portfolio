var offset = 50;
var halfWidth = window.innerWidth / 2;
var halfHeight = window.innerHeight / 2;
var $win = $(window);

document.addEventListener("mousemove", e => {
    if (window.innerWidth > 1000) {
        document.getElementById('cursor').style.top = e.pageY - $win.scrollTop() - 20 + "px";
        document.getElementById('cursor').style.left = e.pageX - 20 + "px";
        var midX = (e.pageX - halfWidth) * -1.8;
        var midY = (e.pageY - halfHeight) * -1.7;
        $('#projects').css('transform', 'translateX(' + midX + 'px) translateY(' + midY + 'px)');
    }
})

/*
$win.on('scroll', function(){
    console.log(window.innerWidth);
    if ($win.scrollTop() < window.innerHeight && window.innerWidth > 1000) {
        $('#image').css('margin-top', parseInt($win.scrollTop()/2.5, 10) + 'px');
    }
});
*/

//Noise Canvas
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function noise() {
    
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        len = buffer32.length,
        i = 0;

    for(; i < len;)
        buffer32[i++] = ((255 * Math.random())|0) << 24;
    
    ctx.putImageData(idata, 0, 0);

    setTimeout(noise, 30);
}
noise();