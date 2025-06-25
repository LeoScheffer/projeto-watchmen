const timelineItems = document.querySelectorAll('[class*="timeline__list__item"]');

timelineItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        timelineItems.forEach(el => {
            el.className = el.className.replace('--is-active', '');
        });

        item.className = item.className.replace('timeline__list__item', 'timeline__list__item--is-active');
        
        const selected = 'timeline_item_';

        switch (item.id) {
            case 'timeline_item_1':
                document.documentElement.style.setProperty('--background-image', 'url(/src/images/timeline/Murder.png)')
                break;
            case 'timeline_item_2':
                document.documentElement.style.setProperty('--background-image', 'url(/src/images/timeline/RORSCHACH_INVESTIGATES.png)')
                break;
            case 'timeline_item_3':
                document.documentElement.style.setProperty('--background-image', 'url(/src/images/timeline/Manhatam.png)')
                break;
            default:
                console.log('Nenhum caso bateu');
        }
    });
});