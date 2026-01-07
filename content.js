document.addEventListener('keydown', (event) => {
    // 1. Prevent trigger if you are typing in an input or textarea
    const isTyping = event.target.tagName === 'INPUT' || 
                     event.target.tagName === 'TEXTAREA' || 
                     event.target.isContentEditable;
    
    if (isTyping) return;

    // 2. Map 'n' to the Notes button
    if (event.key.toLowerCase() === 'n') {
        const elements = document.querySelectorAll('.css-2bpbil');
        
        // Find the element with the class that specifically contains "Notes"
        const notesButton = Array.from(elements).find(el => 
            el.textContent.toLowerCase().includes('notes')
        );

        if (notesButton) {
            notesButton.click();
        } else if (elements.length > 0) {
            // Fallback to the first element if text match fails
            elements[0].click();
        }
    }
});