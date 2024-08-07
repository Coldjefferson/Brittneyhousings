// Dynamic Property Filtering and Sorting
const properties = document.querySelectorAll('.property');
const filters = document.querySelectorAll('.filter');
const sortOptions = document.querySelectorAll('.sort-option');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    const filterValue = filter.getAttribute('data-filter');
    properties.forEach(property => {
      if (property.getAttribute('data-type') === filterValue || filterValue === 'all') {
        property.style.display = 'block';
      } else {
        property.style.display = 'none';
      }
    });
  });
});

sortOptions.forEach(option => {
  option.addEventListener('click', () => {
    const sortValue = option.getAttribute('data-sort');
    properties.forEach(property => {
      const price = parseInt(property.getAttribute('data-price'));
      if (sortValue === 'price-asc') {
        properties.sort((a, b) => a.getAttribute('data-price') - b.getAttribute('data-price'));
      } else if (sortValue === 'price-desc') {
        properties.sort((a, b) => b.getAttribute('data-price') - a.getAttribute('data-price'));
      }
    });
  });
});

// Interactive Property Details Modal
const propertyButtons = document.querySelectorAll('.property-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

propertyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const propertyId = button.getAttribute('data-property-id');
    const property = document.querySelector(`.property[data-id="${propertyId}"]`);
    const propertyDetails = property.querySelector('.property-details').innerHTML;
    modal.querySelector('.modal-content').innerHTML = propertyDetails;
    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Advanced Navigation Menu with Sub-Menus
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const subMenus = document.querySelectorAll('.sub-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

subMenus.forEach(subMenu => {
  subMenu.addEventListener('click', event => {
    event.stopPropagation();
    subMenu.classList.toggle('open');
  });
});

// Sticky Header with Scrolling Effects
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
