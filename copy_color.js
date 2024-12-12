const tiles = document.querySelectorAll(".grid-item");

tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        const hex = getComputedStyle(tile)['background-color'].split('(')[1].split(')')[0].split(',').map((x) => x.trim()).map((x) => { x = parseInt(x).toString(16); return (x.length === 1) ? '0' + x : x }).join('');
        copyToClipboard(hex);
    });
});

function copyToClipboard(hex) {
    navigator.clipboard.writeText(`#` + hex)
    .then(() => {
        console.log(`${hex} was copied successfully`)
    })
    .catch((e) => {
        console.error(`copy failed: ${e}`)
    });
};