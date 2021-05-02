import changePlayerPosition from './changePlayerPosition';
import showMsg from './showMsg';

import playerSettings from '../settings/playerSettings';
import mazeSettings from '../settings/mazeSettings';

function playerControls(wayToExit) {
    document.addEventListener('keydown', function (e) {
        if (e.key.slice(0, 5) !== 'Arrow') {
            return;
        }
        const buttonName = e.key.slice(5).toLowerCase();
        const markerX = playerSettings.playerX;
        const markerY = playerSettings.playerY;

        const playerPositionId = `${markerX},${markerY}`;
        const playerPositionCell = document.getElementById(`${playerPositionId}`);

        switch (buttonName) {
            case 'up':
                const borderTop = playerPositionCell.style.borderTop;

                if (borderTop === 'none' && markerY < mazeSettings.height) {
                    playerSettings.playerY++;
                    changePlayerPosition(playerPositionCell, playerSettings);
                }
                break;
            case 'down':
                const borderBottom = playerPositionCell.style.borderBottom;

                if (borderBottom === 'none' && markerY > 1) {
                    playerSettings.playerY--;
                    changePlayerPosition(playerPositionCell, playerSettings);

                }
                break;
            case 'left':
                const borderLeft = playerPositionCell.style.borderLeft;

                if (borderLeft === 'none' && markerX > 1) {
                    playerSettings.playerX--;
                    changePlayerPosition(playerPositionCell, playerSettings);
                }
                break;
            case 'right':
                const borderRight = playerPositionCell.style.borderRight;

                if (borderRight === 'none' && markerX < mazeSettings.width) {
                    playerSettings.playerX++;
                    changePlayerPosition(playerPositionCell, playerSettings);
                }
                break;
        }
    });

    document.addEventListener('keyup', () => {
        const newPositionId = `${playerSettings.playerX},${playerSettings.playerY}`;
        const finish = wayToExit[wayToExit.length - 1];
        const finishId = `${finish.x},${finish.y}`;
        if (newPositionId === finishId) {
            showMsg();
        }
    });
}


export default playerControls;