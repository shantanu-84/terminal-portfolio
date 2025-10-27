// Terminal logic and event handlers

// Get DOM elements
const terminalContent = document.getElementById('terminal-content');
const terminalInput = document.getElementById('terminal-input');
const banner = document.getElementById('banner');

// Command history
let commandHistory = [];
let historyIndex = -1;

// Function to add output character by character with animation
function addOutput(command, outputLines) {
    const commandLine = document.createElement('div');
    commandLine.className = 'output';
    commandLine.innerHTML = `<span class="prompt">guest@shantanu:~$</span> <span class="text">${command}</span>`;
    terminalContent.appendChild(commandLine);
    
    if (outputLines && outputLines.length > 0) {
        const outputDiv = document.createElement('div');
        outputDiv.className = 'output';
        terminalContent.appendChild(outputDiv);
        
        let totalDelay = 0;
        
        // Display each line character by character
        outputLines.forEach((line) => {
            const lineElement = document.createElement('div');
            lineElement.className = 'text';
            lineElement.textContent = ''; // Start with empty text
            outputDiv.appendChild(lineElement);
            
            // Display each character with delay
            // If line contains HTML (like <a href=...>), skip animation and render directly
if (line.includes("<a")) {
    lineElement.innerHTML = line;
} else {
    [...line].forEach((char, charIndex) => {
        setTimeout(() => {
            lineElement.textContent += char;

            // Scroll to bottom after each character
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' });
            const parentElement = terminalContent.parentElement;
            if (parentElement) {
                parentElement.scrollTop = parentElement.scrollHeight;
            }
        }, totalDelay + (charIndex * 3));
    });
}

            
            // Update total delay for next line (wait for current line to finish)
            totalDelay += line.length * 3; // Wait for all chars in current line
        });
    }
}

// Function to handle command execution
function handleCommand(input) {
    const trimmedInput = input.trim().toLowerCase();
    
    if (!trimmedInput) return;
    
    // Add to history
    commandHistory.push(input.trim());
    historyIndex = commandHistory.length;
    
    // Execute command
    if (commands && commands[trimmedInput]) {
        const outputLines = commands[trimmedInput]();
        addOutput(input, outputLines);
    } else {
        addOutput(input, [
            `Command not found: ${input}`,
            "Type 'help' for a list of available commands."
        ]);
    }
}

// Handle keyboard input
terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = terminalInput.value;
        handleCommand(command);
        terminalInput.value = '';
        terminalContent.scrollTop = terminalContent.scrollHeight;
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            terminalInput.value = commandHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            terminalInput.value = commandHistory[historyIndex];
        } else {
            terminalInput.value = '';
            historyIndex = commandHistory.length;
        }
    }
});

// Keep input in view on scroll
terminalInput.addEventListener('input', () => {
    terminalContent.scrollTop = terminalContent.scrollHeight;
});

// Focus terminal on page load
window.addEventListener('load', () => {
    terminalInput.focus();
});

// Click anywhere to focus
document.addEventListener('click', () => {
    terminalInput.focus();
});

// Handle clicks on banner
banner.style.cursor = 'pointer';
banner.addEventListener('click', () => {
    window.location.reload();
});

// Console welcome message
console.log('%c Welcome to Shantanu\'s Terminal! ', 'background: #000; color: #0f0; font-size: 20px; padding: 10px;');
console.log('%c Type commands in the terminal below ', 'background: #000; color: #0f0;');
