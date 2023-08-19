// Alternating row colors for all tables
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    const rows = table.querySelectorAll('tr:nth-child(even)');
    rows.forEach(row => {
      row.classList.add('alt-row');
    });
  });
  function toggleDropdown(element) {
	element.classList.toggle("active");
	}
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
	link.addEventListener('click', () => {
        event.preventDefault(); // Prevent automatic scrolling
		sections.forEach(section => {
			section.style.display = 'none';
		});
		document.querySelector(link.getAttribute('href')).style.display = 'block';
        window.scrollTo(0, 0); // Scroll to top
	});
});