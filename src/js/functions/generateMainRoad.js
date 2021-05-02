import getRandomInt from './getRandomInt';

import roadDirections from '../settings/roadDirections';
import mazeSettings from '../settings/mazeSettings';
import playerSettings from '../settings/playerSettings';

let startPlayerX = playerSettings.playerX;
let startPlayerY = playerSettings.playerY;

let roadsToExit = [];

function generateMainRoad(n = 0) {
    try {
        let turnDetails = {};
        let randomDirection = roadDirections[getRandomInt(0, 4)];
        let turn = '';

        switch (randomDirection) {
            case 'right':
                if (startPlayerX === mazeSettings.width) {
                    break;
                }
                startPlayerX++;
                turn = 'right';
                break;

            case 'top':
                if (startPlayerY === mazeSettings.height) {
                    return;
                }
                startPlayerY++
                turn = 'top';
                break;
            case 'left':
                if (startPlayerX === 1) {
                    break;
                }
                startPlayerX--;
                turn = 'left';
                break;
            case 'bottom':
                if (startPlayerY === 1) {
                    break;
                }
                startPlayerY--;
                turn = 'bottom';
                break;
        }

        turnDetails = {
            x: startPlayerX,
            y: startPlayerY,
            border: turn
        }

        roadsToExit.push(turnDetails);
        return generateMainRoad(n + 1);
    } catch (err) {
        return `There was an exception: "${err}" when tryin' to make iteration no. ${n}`;
    }
}

generateMainRoad();

export default roadsToExit;