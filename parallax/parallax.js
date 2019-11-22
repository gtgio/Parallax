function processedScrollEvent() {
  let scrollWorth = this.pageYOffset;
  console.log(scrollWorth);
  pasDelenAan(scrollWorth)

  if (scrollWorth > 1500) {
    voegClassToe();
  } else {
    verwijderClass();
  }
}

window.addEventListener('scroll', processedScrollEvent);

function pasDelenAan(getal) {
  document.getElementsByClassName('deel--2')[0].style.backgroundPositionY = -getal/14 + 'px';
  document.getElementsByClassName('deel--4')[0].style.backgroundPositionY = -getal/20 + 'px';
  document.getElementsByClassName('deel--6')[0].style.backgroundPositionY = -getal/18 + 'px';
  if (getal>400) {
    let tussenruimte = getal-400;
    document.getElementsByClassName('deel__span--links')[0].style.marginLeft = -tussenruimte/2 + 'px';
    document.getElementsByClassName('deel__span--rechts')[0].style.marginLeft = tussenruimte*2 + 'px';
  } else {
    document.getElementsByClassName('deel__span--links')[0].style.marginLeft = 0;
    document.getElementsByClassName('deel__span--rechts')[0].style.marginLeft = 0;
  }
  if (getal>1500) {
    let tussenruimte = getal-1500;
    document.getElementsByClassName('deel__span--links2')[0].style.marginLeft = -tussenruimte/2 + 'px';
    document.getElementsByClassName('deel__span--rechts2')[0].style.marginLeft = tussenruimte*2 + 'px';
  } else {
    document.getElementsByClassName('deel__span--links2')[0].style.marginLeft = 0;
    document.getElementsByClassName('deel__span--rechts2')[0].style.marginLeft = 0;
  }
  if (getal>2600) {
    let tussenruimte = getal-2600;
    document.getElementsByClassName('deel__span--links3')[0].style.marginLeft = -tussenruimte/2 + 'px';
    document.getElementsByClassName('deel__span--rechts3')[0].style.marginLeft = tussenruimte*2 + 'px';
  } else {
    document.getElementsByClassName('deel__span--links3')[0].style.marginLeft = 0;
    document.getElementsByClassName('deel__span--rechts3')[0].style.marginLeft = 0;
  }
}

function voegClassToe() {
  let alleSecties = document.getElementsByTagName('section');
  for (let i=0; i<alleSecties.length; i++) {
    alleSecties[i].classList.add('accent');
  }
}

function verwijderClass() {
  let alleSecties = document.getElementsByTagName('section');
  for (let i=0; i<alleSecties.length; i++) {
    alleSecties[i].classList.remove('accent');
  }
}
