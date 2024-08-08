document.addEventListener('DOMContentLoaded', (event) => {
    const voteButton1 = document.getElementById('vote-button1');
    const voteButton2 = document.getElementById('vote-button2');
    const voteCount1 = document.getElementById('vote-count1');
    const voteCount2 = document.getElementById('vote-count2');
    
    let count1 = 0;
    let count2 = 0;
    
    voteButton1.addEventListener('click', () => {
        count1++;
        voteCount1.textContent = count1;
    });
    
    voteButton2.addEventListener('click', () => {
        count2++;
        voteCount2.textContent = count2;
    });
});
