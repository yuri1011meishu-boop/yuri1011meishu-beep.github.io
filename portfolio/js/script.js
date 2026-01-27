const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-open");
  sideMenu.classList.toggle("is-open");
});

const menuLinks = document.querySelectorAll('#sideMenu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      menuBtn.classList.remove('is-open');
      sideMenu.classList.remove('is-open');
    }, 100);
  });
});
$('#wrapper').on('scroll', function () {

  const wrapperScroll = $(this).scrollTop();
  const wrapperHeight = $(this).height();

  $('section').each(function () {

    const sectionTop = $(this).position().top;

    if (wrapperScroll > sectionTop - wrapperHeight + 100) {
      $(this).addClass('is-show');
    }

  });

});
