document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});


function openTab(event, tabName) {
    var i, tabContent, tabLinks;
    
    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove the active class from all tab links
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Open the first tab by default
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.tab-link').click();
});


document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".description");
    const originalText = textElement.textContent;
    let index = originalText.length;
    let deleting = true;

    function deleteText() {
        if (index >= 0) {
            textElement.textContent = originalText.slice(0, index);
            index--;
            setTimeout(deleteText, 30); // Adjust the speed of deletion here (100ms per character)
        } else {
            deleting = false;
            setTimeout(addText, 500); // Pause before starting to add text
        }
    }

    function addText() {
        if (index < originalText.length) {
            textElement.textContent = originalText.slice(0, index + 1);
            index++;
            setTimeout(addText, 30); // Adjust the speed of adding text here (100ms per character)
        } else {
            deleting = true;
            setTimeout(deleteText, 500); // Pause before starting to delete text again
        }
    }

    deleteText();
});
