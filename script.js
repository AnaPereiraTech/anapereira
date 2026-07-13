document.querySelectorAll('.anim').forEach(item => {

    item.addEventListener('mouseover', () => {

        item.style.transform = 'scale(1.05)';

        item.style.color = 'var(--dourado)';

    });

    

    item.addEventListener('mouseout', () => {

        item.style.transform = 'scale(1)';

        item.style.color = '';

    });

});



