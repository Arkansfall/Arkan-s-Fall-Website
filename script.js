window.addEventListener("load", function() {
  var footer = document.querySelector("footer");
  var rect = footer.getBoundingClientRect();
  var footerHeight = rect.height;
  var body = document.querySelector("body");
  var bodyHeight = body.clientHeight;
  var viewportHeight = window.innerHeight;

  if (bodyHeight + footerHeight < viewportHeight) {
    footer.style.position = "absolute";
    footer.style.bottom = "0";
  }

  var btnHome = document.getElementById('btnHome');
  const btnAbout = document.querySelector('#btnAbout');
  var btnTeam = document.getElementById('btnTeam');


  btnHome.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


btnAbout.addEventListener('click', function() {
  const headerHeight = document.querySelector('header').offsetHeight;
  const aboutSection = document.getElementById('about');
  const aboutSectionPosition = aboutSection.offsetTop - headerHeight - 20; // adjust padding as needed
  window.scrollTo({ top: aboutSectionPosition, behavior: 'smooth' });
});

  btnTeam.addEventListener('click', function() {
    const headerHeight = document.querySelector('header').offsetHeight;
    const teamSection = document.getElementById('team');
    const teamSectionPosition = teamSection.offsetTop - headerHeight - 20; // adjust padding as needed
    window.scrollTo({ top: teamSectionPosition, behavior: 'smooth' });
  });
});
