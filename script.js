// Button Click Event Code
const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

button.addEventListener('click', function() {
    message.innerText = 'Congratulations! You successfully made your first website button work 🎉';
    message.style.color = '#00adb5';
    message.style.fontWeight = 'bold';
    message.style.marginTop = '15px';
});
