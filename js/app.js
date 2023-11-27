const navBtn = document.getElementById( "nav-toggle" );
const links = document.getElementById( "nav-links" );

navBtn.addEventListener( "click", () =>
{
    navBtn.classList.toggle( "is-active" );
    links.classList.toggle( "show-links" );
} );

// set date
const date = ( document.getElementById( "date" ).innerHTML = new Date().getFullYear() );

// add box shadow to nav on scroll
const navbar = document.getElementById( "navbar" );

window.onscroll = function()
{
    if ( window.scrollY > 22 )
    {
        navbar.classList.add( "shadow-nav" );
    } else
    {
        navbar.classList.remove( "shadow-nav" );
    }
};

// Get the URL parameters
const params = new URLSearchParams( window.location.search );

// Check if the status parameter is 'success'
if ( params.get( 'status' ) === 'success' )
{
    // Display a success message using Toastify
    Toastify( {
        text: 'Message sent successfully!',
        duration: 3000,  // Display duration in milliseconds (e.g., 3000ms = 3 seconds)
        gravity: 'top', // Display position: 'top', 'bottom', 'center'
        position: 'right', // Display position: 'left', 'right', 'center'
        backgroundColor: 'green', // Background color of the toast
        close: true, // Show close button
    } ).showToast();
}

// const lightbox = GLightbox({
//     touchNavigation: true,
//     loop: true,
//     autoplayVideos: true
// });