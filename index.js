// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log('Event was triggered')
    //document.getElementById('text').innerHTML = document.getElementById('text').innerHTML.replace('JavaScript is so cool. It lets me add text to my page programmatically.', 'This is really cool!')
    let elementText = document.getElementById('text');
    elementText.innerHTML = elementText.innerHTML.replace('JavaScript is so cool. It lets me add text to my page programmatically.', 'This is really cool!')
    console.log(elementText)
});
  