function animateCounter(counter) {
    const target = parseInt(counter.dataset.target);
    const duration = 2000; // Animation duration in milliseconds
    const step = Math.ceil(target / (duration / 10));
    let count = 0;

    const timer = setInterval(() => {
        count += step;
        if (count >= target) {
            clearInterval(timer);
            count = target;
        }

        counter.textContent = count + "%";
    }, 10);
}

// Get all the counter elements
const counters = document.querySelectorAll(".counter");

// Loop through each counter and animate it
counters.forEach(counter => {
    animateCounter(counter);
});

// Toggle the drawer menu
const drawerToggle = document.querySelector('.drawer-toggle');
const drawerNavLinks = document.querySelector('.drawer-nav-links');

drawerToggle.addEventListener('click', () => {
    drawerNavLinks.classList.toggle('show-drawer');
    drawerToggle.classList.toggle('active');
});

// Close the drawer menu when a link is clicked
const drawerLinks = document.querySelectorAll('.drawer-nav-links li a');

drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
        drawerNavLinks.classList.remove('show-drawer');
        drawerToggle.classList.remove('active');
    });
});

document.getElementById("download-link").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the default link behavior
  
    // Get the download URL from the "download" attribute
    var downloadUrl = this.getAttribute("download");
  
    // Create a temporary link element
    var link = document.createElement("a");
    link.href = downloadUrl;
  
    // Set the "download" attribute to trigger the download
    link.setAttribute("download", "");
  
    // Append the link to the document body
    document.body.appendChild(link);
  
    // Programmatically click the link to start the download
    link.click();
  
    // Remove the temporary link from the document body
    document.body.removeChild(link);
});

