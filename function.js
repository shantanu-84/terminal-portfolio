// Helper function to get element by ID
function $(elid) {
    return document.getElementById(elid);
}

var cursor;
window.onload = init;

// Initialize cursor
function init() {
    cursor = $("cursor");
}

// Convert newlines
function nl2br(txt) {
    return txt.replace(/\n/g, '');
}

// Handle writing/typing
function writing(from, e) {
    if (!e) return;
    
    var w = document.getElementById("writer");
    var tw = from.value;
    
    if (!pw) {
        w.innerHTML = nl2br(tw);
    }
}

// Handle cursor movement
function moving(count, e) {
    if (!e) return;
    
    var keycode = e.keyCode || e.which;
    
    // Left arrow
    if (keycode == 37 && parseInt(cursor.style.left) >= (0 * ((count-1) * 10))) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } 
    // Right arrow
    else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
        cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
}


