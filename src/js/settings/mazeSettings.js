import getRandomInt from '../functions/getRandomInt';
import getViewSize from '../functions/getViewSize';

const mazeSettings = {
    width: getRandomInt(10, 40),
    height: getRandomInt(10, 20),
    exitIcon: 'img/exit-icon.png',
}

export default mazeSettings;