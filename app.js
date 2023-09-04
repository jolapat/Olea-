let toggleBtn = document.querySelector(".toggle-btn");
let mobileMenu = document.querySelector(".mobile-menu");
let barMark = document.querySelector(".fa-bars");
let closeMark = document.querySelector(".fa-xmark");

closeMark.style.display = "none";
let open = false;

function toggleMenu() {
 if (open == false) {
  closeMark.style.display = "inline-block";
  barMark.style.display = "none";
  mobileMenu.style.top = "10vh";
  open = true;
  
 }
 else{
  closeMark.style.display = "none";
  barMark.style.display = "inline-block";
  mobileMenu.style.top = "-200vh";
  open = false;
 }
}
toggleBtn.addEventListener("click", toggleMenu);



// Get references to the modal and link
const storeModal = document.getElementById("storeModal");
const storePageLink = document.getElementById("storePageLink");

// Function to open the modal
function openStoreModal() {
  storeModal.style.display = "block";
}

// Function to close the modal
function closeStoreModal() {
  storeModal.style.display = "none";
}

// Event listener for the link to open the modal
storePageLink.addEventListener("click", openStoreModal);

// Event listener to close the modal when clicking outside it (optional)
window.addEventListener("click", function (event) {
  if (event.target === storeModal) {
    closeStoreModal();
  }
});






