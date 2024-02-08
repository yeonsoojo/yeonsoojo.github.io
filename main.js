//new script, color script
['.ul-wrap', '.color-wrap'].forEach(function(selector) {
    var slider = document.querySelector(selector);
    var isDown = false;
    var startX;
    var scrollLeft;

    function startAction(e) {
        isDown = true;
        slider.classList.add('active');
        startX = getEventPageX(e) - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    function endAction() {
        isDown = false;
        slider.classList.remove('active');
    }

    function moveAction(e) {
        if(!isDown) return;
        e.preventDefault();
        var x = getEventPageX(e) - slider.offsetLeft;
        var walk = (x - startX) * 1; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    }

    function getEventPageX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    }

    slider.addEventListener('mousedown', startAction);
    slider.addEventListener('touchstart', startAction);

    slider.addEventListener('mouseleave', endAction);
    slider.addEventListener('mouseup', endAction);
    slider.addEventListener('touchend', endAction);

    slider.addEventListener('mousemove', moveAction);
    slider.addEventListener('touchmove', moveAction);
});

