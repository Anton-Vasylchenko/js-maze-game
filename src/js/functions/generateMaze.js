import getRandomInt from './getRandomInt';
import getOppositeBorder from './getOppositeBorder';
import generateRandomRoads from './generateRandomRoads';
import createMarkers from './createMarkers';

import wayToExit from './generateMainRoad';
import playerControls from './playerControls';

import roadDirections from '../settings/roadDirections';
import mazeSettings from '../settings/mazeSettings';
import playerSettings from '../settings/playerSettings';

function generateMaze(container) {
    const mainContainer = container;

    const table = document.createElement('table');

    for (let i = mazeSettings.height; i > 0; i--) {
        const tr = document.createElement('tr');
        for (let z = 1; z <= mazeSettings.width; z++) {
            const td = document.createElement('td');

            td.setAttribute('id', `${z},${i}`);
            const correctTd = wayToExit.find(element => {
                if (element.y === i && element.x === z) {
                    return element;
                }
            });

            if (correctTd) {
                const borderPosition = getOppositeBorder(correctTd.border);
                td.setAttribute('style', `border-${borderPosition}:none;}`);
            } else {
                const randomBorderOff = roadDirections[getRandomInt(0, 7)];
                td.setAttribute('style', `border-${randomBorderOff}:none;`);
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    mainContainer.appendChild(table);

    playerControls(wayToExit);

    createMarkers(playerSettings.playerX,
        playerSettings.playerY,
        playerSettings.playerIcon,
        mazeSettings.exitIcon,
        wayToExit
    );

    generateRandomRoads();
};

export default generateMaze;