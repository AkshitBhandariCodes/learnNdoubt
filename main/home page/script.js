 // Get modal element
 var modal = document.getElementById("loginModal");
        
 // Get button that opens the modal
 var btn = document.getElementById("loginBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementById("closeModal");
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
     modal.style.display = "flex"; // Show modal with flex
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 // Handle login option button clicks (You can add your login functionality here)
 const loginOptions = document.querySelectorAll('.login-option');
 loginOptions.forEach(option => {
     option.addEventListener('click', function() {
         // Add functionality for each login option here
         alert(`You selected: ${this.textContent}`);
         modal.style.display = "none"; // Close modal after selection
     });
 });

 // Handle header button clicks (You can add functionality here)
 document.getElementById('aboutBtn').onclick = function() {
     alert("About Us: This is a placeholder for the About Us section.");
 };

 document.getElementById('contactBtn').onclick = function() {
     alert("Contact Us: This is a placeholder for the Contact Us section.");
 };

 document.getElementById('roadmapBtn').onclick = function() {
     alert("Roadmap: This is a placeholder for the Roadmap section.");
 };
 // Existing JavaScript code...

// Handle footer button clicks
document.getElementById('footerAboutBtn').onclick = function() {
 alert("About Us: This is a placeholder for the About Us section.");
};

document.getElementById('footerContactBtn').onclick = function() {
 alert("Contact Us: This is a placeholder for the Contact Us section.");
};