shapes = {
    stopped: false,
    createCircle: function() {
        var paper = Raphael('raphaelCircle', 200, 200);
        var c = paper.ellipse(100, 100, 10, 10);
        c.attr({
            'fill': 'white',
            'stroke': 'white'
        });
        
    },
    
    createAnimation: function() {
        var paper = Raphael('raphaelAnimation', 200, 200);
        
        var back = paper.rect(10, 10, 180, 180);
        back.attr({
            'fill': 'black',
            'stroke': 'black'
        });
        back.click(function() {
            shapes.stopped = !shapes.stopped;
        });
        
        
        var c = paper.ellipse(100, 100, 10, 10);
        c.attr({
            'fill': 'white',
            'stroke': 'white'
        });
        
        var r = paper.rect(60, 60, 80, 80);
        r.attr({
            'stroke-width': 2,
            'stroke': 'white'
        });
        
        setInterval(function() {
            if (!shapes.stopped) {
                r.rotate(3);
            }
        }, 66);
        
        
        
    }
};

window.onload = function () {
    shapes.createCircle();
    shapes.createAnimation();
};
    