document.addEventListener('DOMContentLoaded', (event) => {
    const voteButton1 = document.getElementById('vote-button1');
    const voteButton2 = document.getElementById('vote-button2');
    const voteCount1 = document.getElementById('vote-count1');
    const voteCount2 = document.getElementById('vote-count2');
    // Function to get a cookie by name
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    // Function to set a cookie
    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }
    // Initialize vote counts from cookies or default to 0
    let count1 = parseInt(getCookie('voteCount1')) || 0;
    let count2 = parseInt(getCookie('voteCount2')) || 0;
    voteCount1.textContent = count1;
    voteCount2.textContent = count2;
    voteButton1.addEventListener('click', () => {
        count1++;
        voteCount1.textContent = count1;
        setCookie('voteCount1', count1, 1); // Store the updated count in a cookie, expires in 1 day
    });
    voteButton2.addEventListener('click', () => {
        count2++;
        voteCount2.textContent = count2;
        setCookie('voteCount2', count2, 1); // Store the updated count in a cookie, expires in 1 day
    });
});
