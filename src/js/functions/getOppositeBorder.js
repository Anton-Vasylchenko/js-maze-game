function getOppositeBorder(border) {
    switch (border) {
        case 'right':
            return 'left';
        case 'top':
            return 'bottom';
        case 'bottom':
            return 'top';
        default:
            return 'right';
    }
}

export default getOppositeBorder;