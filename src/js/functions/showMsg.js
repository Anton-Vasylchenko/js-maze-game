document.addEventListener('click', (e) => {
    const bgPopup = document.querySelector('.bg-popup');
    const msgDiv = document.querySelector('.msg-block');
    if (e.target.classList.contains('play-btn')) {
        msgDiv.style.display = 'none';
        bgPopup.style.display = 'none';
        location.reload();
    }
});

function showMsg() {
    const bgPopup = document.querySelector('.bg-popup');
    const msgDiv = document.querySelector('.msg-block');
    bgPopup.style.display = 'block';
    msgDiv.style.display = 'block';
}

export default showMsg;