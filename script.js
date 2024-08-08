document.addEventListener('DOMContentLoaded', (event) => {
    const voteButton = document.getElementById('vote-button');
    const voteCount = document.getElementById('vote-count');
    
    let count = 0;
    
    voteButton.addEventListener('click', () => {
        count++;
        voteCount.textContent = count;
    });
});
