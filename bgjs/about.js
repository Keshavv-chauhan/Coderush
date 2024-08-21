window.addEventListener('scroll', function() {
    var aboutUsSection = document.getElementById('about-us');
    var hackathonSection = document.getElementById('hackathon');
    
    var aboutUsBounding = aboutUsSection.getBoundingClientRect();
    var hackathonBounding = hackathonSection.getBoundingClientRect();

    var aboutUsInViewport = aboutUsBounding.top < window.innerHeight && aboutUsBounding.bottom >= 0;
    var hackathonInViewport = hackathonBounding.top < window.innerHeight && hackathonBounding.bottom >= 0;

    if (aboutUsInViewport) {
        aboutUsSection.classList.add('scrolled');
    } else {
        aboutUsSection.classList.remove('scrolled');
    }

    if (hackathonInViewport) {
        hackathonSection.classList.add('scrolled');
    } else {
        hackathonSection.classList.remove('scrolled');
    }
});
const targets = document.querySelectorAll(".timeline ol li");
const threshold = 0.5;
const ANIMATED_CLASS = "in-view";

function callback(entries, observer) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(ANIMATED_CLASS);
      observer.unobserve(elem);
    } else {
      elem.classList.remove(ANIMATED_CLASS);
    }
  });
}
