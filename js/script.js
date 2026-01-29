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
//お問い合わせフォーム
// ===== CONTACT FORM mailto送信 =====
const form = document.getElementById("contact_form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // 通常送信を止める

  const name = document.getElementById("name").value;
  const company = form.querySelector('input[name="会社名"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const message = document.getElementById("message").value;

  const body = `
【お名前】
${name}

【会社名】
${company}

【返信用メールアドレス】
${email}

【お問い合わせ内容】
${message}
  `;

  const mailtoLink =
    "mailto:yuri1011meishu@gmail.com" +
    "?subject=" + encodeURIComponent("ポートフォリオからのお問い合わせ") +
    "&body=" + encodeURIComponent(body);

  window.location.href = mailtoLink;
});
