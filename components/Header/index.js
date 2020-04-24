// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

  function Header() {
    const headerContainer = document.querySelector('.header-container')

    const header = document.createElement('header')
    const dateSpan = document.createElement('span')
    const h1 = document.createElement('h1')
    const tempSpan = document.createElement('span')

    header.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    dateSpan.innerText = 'March 28, 2019'
    h1.innerText = 'Lambda Times'
    tempSpan.innerText = '98°'

    header.appendChild(dateSpan)
    header.appendChild(h1)
    header.appendChild(tempSpan)

    headerContainer.appendChild(header)
  }

  Header()
