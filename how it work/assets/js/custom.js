document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});


// active page js 
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll(".header-navigation__menu .nav-item .nav_link");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});


// accordion js
  document.addEventListener('shown.bs.collapse', function (e) {
    // Close all other open accordion panels
    const parent = e.target.closest('.faq__section .accordion');
    parent.querySelectorAll('.faq__section .accordion-collapse.show').forEach(collapseEl => {
      if (collapseEl !== e.target) {
        const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
        bsCollapse.hide();
      }
    });
  });



//   header dropdown js 
$('.header .dropdown > .nav_link').on('click', function (e) {
  var $this = $(this);
  var $parent = $this.parent('.dropdown');
  var windowWidth = $(window).width();

  if (windowWidth <= 991) {
    // Mobile behavior
    if (!$parent.hasClass('show')) {
      e.preventDefault(); // Prevent navigation first click
      $parent.addClass('show'); // Open dropdown
      $parent.find('.dropdown-menu').addClass('show'); // Show submenu
    } else {
      // Dropdown already open, navigate on second click
      window.location = $this.attr('href');
    }
  } else {
    // Desktop behavior: navigate immediately
    window.location = $this.attr('href');
  }
});

// Close dropdown if clicked outside (for mobile)
$(document).on('click', function (e) {
  if (!$(e.target).closest('.header .dropdown').length) {
    $('.header .dropdown').removeClass('show');
    $('.header .dropdown .dropdown-menu').removeClass('show');
  }
});



