

(function() {
    var clickSound = new Audio('click.wav');
    var buttonSound = new Audio('button.wav');

    document.addEventListener('click', function(e) {
        
        if (e.button === 0) {
            var target = e.target;
            
            if (target.closest('.back-to-portfolio')) {
                var sound = buttonSound.cloneNode();
                sound.play();
            } else if (target.closest('.btn')) {
                var sound = buttonSound.cloneNode();
                sound.play();
            } else {
                var sound = clickSound.cloneNode();
                sound.play();
            }
        }
    }, true);
})();