// Lightweight site interactions: hamburger, mobile nav, reveal on scroll, contact form demo
(function(){
  'use strict';

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navbar = document.getElementById('navbar');

  if(hamburger && navMenu){
    hamburger.addEventListener('click', ()=>{
      const expanded = hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', String(expanded));
    });

    // close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
      if(window.innerWidth <= 1000){
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded','false');
      }
    }));
  }

  // add scrolled class
  function onScroll(){
    if(window.scrollY > 20) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');

    // reveal
    document.querySelectorAll('.scroll-fade, .card[data-animate], .tile, .participate-card').forEach(el=>{
      const r = el.getBoundingClientRect();
      if(r.top < window.innerHeight - 70) el.classList.add('visible');
    });
  }
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  // contact form demo handler
  window.handleFormSubmit = function(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value || '';
    const email = form.email.value || '';
    const message = form.message.value || '';

    const subject = encodeURIComponent('Contatto sito - ' + name);
    const body = encodeURIComponent('Da: ' + name + ' (' + email + ')\n\n' + message);
    window.location.href = 'mailto:lacompagniadellarteaps@pec.it?subject=' + subject + '&body=' + body;
  };

})();
