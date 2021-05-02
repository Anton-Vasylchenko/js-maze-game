function changePlayerPosition(currentPosition, playerSettings) {
    currentPosition.style.backgroundImage = 'none';
    const playerBackground = playerSettings.playerIcon;
    const newPositionId = `${playerSettings.playerX},${playerSettings.playerY}`;
    const newPosition = document.getElementById(newPositionId);
    newPosition.style.backgroundImage = `url(${playerBackground})`;
}

export default changePlayerPosition;