document.addEventListener("DOMContentLoaded", function() {
  hljs.initHighlightingOnLoad();
  
  const $iconClass = document.querySelector('icon').getAttribute('class');
  const $navigationLinks = document.querySelectorAll('nav ol li a');
  
  document.querySelector('button').addEventListener('click', function(e) {
    e.preventDefault();
    const $iconClass = document.querySelector('icon').getAttribute('class');
    if ($iconClass.includes('fa-angle-down')) {
      document.querySelector('icon').classList.remove('fa-angle-down');
      document.querySelector('icon').classList.add('fa-angle-up');
      document.querySelector('nav ol').classList.add('hidden');
    } else if ($iconClass.includes('fa-angle-up')) {
      document.querySelector('icon').classList.remove('fa-angle-up');
      document.querySelector('icon').classList.add('fa-angle-down');
      document.querySelector('nav ol').classList.remove('hidden');
    }
  });
  
  for (let $link of $navigationLinks) {
    $link.addEventListener('click', function(e) {
      if ($iconClass.includes('fa-angle-down')) {
        document.querySelector('icon').classList.remove('fa-angle-down');
        document.querySelector('icon').classList.add('fa-angle-up');
        document.querySelector('nav ol').classList.add('hidden');
      } else if ($iconClass.includes('fa-angle-up')) {
        document.querySelector('icon').classList.remove('fa-angle-up');
        document.querySelector('icon').classList.add('fa-angle-down');
        document.querySelector('nav ol').classList.remove('hidden');
      }
    });
  } 
});