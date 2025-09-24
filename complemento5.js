document.addEventListener('mousemove', function(e) {
    const focus = document.querySelector('.focus');
    const blur = document.querySelector('.blur');
    const hover = document.querySelector('.hover');
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    const x = e.clientX;
    const y = e.clientY;

    // Efecto movimiento texto
    focus.style.transform = `translate(${(x - window.innerWidth/2)/30}px, ${(y - window.innerHeight/2)/30}px)`;
    blur.style.transform = `translate(${(x - window.innerWidth/2)/60}px, ${(y - window.innerHeight/2)/60}px)`;

    // Efecto hover bits
    hover.style.left = `${x - 35}px`;
    hover.style.top = `${y - 35}px`;

    // Efecto capas laterales
    leftSide.style.left = `${x}px`;
    rightSide.style.right = `${window.innerWidth - x}px`;
});
