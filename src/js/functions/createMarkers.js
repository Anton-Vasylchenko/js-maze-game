function createMarkers(playerX, playerY, playerIcon, exitIcon, wayToExit) {
    const tdStart = document.getElementById(`${playerX},${playerY}`);
    const finish = wayToExit[wayToExit.length - 1];
    const tdFinish = document.getElementById(`${finish.x},${finish.y}`);

    const finishMarkerDiv = document.createElement('div');
    finishMarkerDiv.classList.add('finish-icon');
    tdFinish.style.position = 'relative';
    tdFinish.appendChild(finishMarkerDiv);

    finishMarkerDiv.style.backgroundImage = `url(${exitIcon})`;
    tdStart.style.backgroundImage = `url(${playerIcon})`;
}

export default createMarkers;