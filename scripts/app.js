document.addEventListener('DOMContentLoaded', function() {
    const simButton = document.getElementById('sim');
    const naoButton = document.getElementById('nao');
    const container = document.querySelector('.container');
    
    // Function to handle when "Sim" is clicked
    simButton.addEventListener('click', function() {
        alert('Boa escolha! 😉');
    });
    
    // Function to make "Não" button move when mouse approaches
    naoButton.addEventListener('mouseover', function() {
        // Generate random position within container boundaries
        const containerRect = container.getBoundingClientRect();
        const buttonRect = naoButton.getBoundingClientRect();
        
        // Calculate maximum positions to keep button within container
        const maxX = containerRect.width - buttonRect.width - 40; // Adjust for padding
        const maxY = containerRect.height - buttonRect.height - 40; // Adjust for padding
        
        // Generate random positions
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        // Apply new position to the button
        naoButton.style.position = 'absolute';
        naoButton.style.left = randomX + 'px';
        naoButton.style.top = randomY + 'px';
    });
    
    // Prevent actual clicks on "Não" button just in case
    naoButton.addEventListener('click', function(event) {
        event.preventDefault();
        naoButton.style.position = 'absolute';
        
        const containerRect = container.getBoundingClientRect();
        const buttonRect = naoButton.getBoundingClientRect();
        
        const maxX = containerRect.width - buttonRect.width - 40;
        const maxY = containerRect.height - buttonRect.height - 40;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        naoButton.style.left = randomX + 'px';
        naoButton.style.top = randomY + 'px';
    });
});