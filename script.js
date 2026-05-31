const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');

// Highlight drop zone on drag over
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    }, false);
});

// Remove highlight when dragged away or dropped
['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
    }, false);
});

// Handle the actual file drop
dropZone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    fileInput.files = files; // Pass the dropped files into your existing input
    // You can trigger your existing compression function here
});