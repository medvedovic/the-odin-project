var myColor = [];
//picks a random color
pickColor = function() {
    for(var i = 0; i<3; i++) {
        myColor[i] = Math.floor(Math.random()*255);
    }
    myColor = 'rgb('+myColor[0]+','+myColor[1]+','+myColor[2]+')';
};

darkenTheColor = function(color) {
    //gets r,g,b
    color = color.slice(4, color.length-1);
    color = color.split(',');
    //converts color to HSL
    var h, s, l, 
        red = color[0]/255,
        gre = color[1]/255,
        blu = color[2]/255,
        max = Math.max(red,gre,blu),
        min = Math.min(red,gre,blu),
        
        l = ((max + min)/2);
    if ( max == min ) {
        h = 0; s = 0;
    }
    else {  
        var delta = max - min;
        s = l > 0.5 ? delta / (2 - max - min)  : delta / (max + min);
        switch(max) {
            case red: h = (gre - blu) / delta + (g < b ? 6 : 0); break;
            case gre: h = (blu - red) / delta + 2; break;
            case blu: h = (red - gre) / delta + 4; break;
        }
        h /= 6;
    }
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    //darkens the color
    var percentage = 0.1*l;
    l -= percentage;
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
};

//execute color-changing
startGrid = function() {
    $('div.square').mouseenter( function() { 
        if ( $(this).css('background-color') === 'rgb(255, 255, 255)' ) {
            $(this).css('background-color', myColor );
        }
        else {
            var color = $(this).css('background-color');
            $(this).css('background-color', darkenTheColor(color) );
        }
    });
};

createGrid = function() {
    pickColor();   
    //lets user select resolution of grid
    var width;
    while((width = prompt('how many sqares per width?')) > 64) {
        alert('number is too big, choose another one..');
    };
    var height;
    while((height = prompt('...and height?')) > 64) {
        alert('number is too big, choose another one..')
    };
    var rez = (960-3*width)/width;
    //creates a grid
    for( var i = 0; i<height; i++) {
        for( var j = 0; j<width; j++ ) {
            $('<div class="square"/>').appendTo('div.main').width(rez).height(rez);
        }
    }
    startGrid();
};

$(document).ready( function() {
    createGrid();
});

//clears the actual grid and creates a new one
clearFunc = function() {
    $('div.main').empty();
    createGrid();
};