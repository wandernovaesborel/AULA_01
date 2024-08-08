let counter = 0;

document.getElementById('incrementBtn').addEventListener('click', function() {
    counter++;
    document.getElementById('counter').innerText = counter;
});
