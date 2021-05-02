import getOppositeBorder from './getOppositeBorder';

String.prototype.firstLetterCaps = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function generateRandomRoads() {
    const table = document.querySelector('table');
    for (let i = 0; i < table.children.length; i++) {
        const tr = table.children[i];
        for (let y = 0; y < tr.children.length; y++) {
            const td = tr.children[y];
            const tdId = td.id;
            const tdX = +tdId.split(',')[0];
            const tdY = +tdId.split(',')[1];

            const directionsArray = {};

            directionsArray.Left = document.getElementById(`${tdX - 1},${tdY}`);
            directionsArray.Right = document.getElementById(`${tdX + 1},${tdY}`);
            directionsArray.Top = document.getElementById(`${tdX},${tdY + 1}`);
            directionsArray.Bottom = document.getElementById(`${tdX},${tdY - 1}`);

            for (const key in directionsArray) {
                if (directionsArray[key]) {
                    const borderOff = getOppositeBorder(key.toLowerCase());

                    if (directionsArray[key].style[`border${borderOff.firstLetterCaps()}`] === 'none') {
                        td.style[`border${key}`] = 'none';
                    }
                }
            }
        }
    }
}

export default generateRandomRoads;