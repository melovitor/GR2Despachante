//Menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

// Abre e fecha menu
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
//Menu Veiculos
const menuVeiculos = document.querySelector('#header div.veiculos nav')
const openVeiculosMenu = document.querySelectorAll('div .icon-veiculo_icon')
const closeVeiculosMenu = document.querySelectorAll('nav .icon-close')

for (const elementVeiculos of openVeiculosMenu) {
  elementVeiculos.addEventListener('click', function () {
    menuVeiculos.classList.add('show')
  })
}
for (const elementVeiculos of closeVeiculosMenu) {
  elementVeiculos.addEventListener('click', function () {
    menuVeiculos.classList.remove('show')
  })
}
// Menu CNH
const menuCNH = document.querySelector('#header div.CNH nav')
const openCNHMenu = document.querySelectorAll('div .icon-cnh_icon')
const closeCNHMenu = document.querySelectorAll('nav .icon-close')

for (const elementCNH of openCNHMenu) {
  elementCNH.addEventListener('click', function () {
    menuCNH.classList.add('show')
  })
}
for (elementCNH of closeCNHMenu) {
  elementCNH.addEventListener('click', function () {
    menuCNH.classList.remove('show')
  })
}
// Menu Infrações de transito
const menuInfracoes = document.querySelector('#header div.infracoes nav')
const openInfracoesMenu = document.querySelectorAll('div .icon-infracao_icon')
const closeInfracoesMenu = document.querySelectorAll('nav .icon-close')

for (const elementInfracoes of openInfracoesMenu) {
  elementInfracoes.addEventListener('click', function () {
    menuInfracoes.classList.add('show')
  })
}
for (elementInfracoes of closeInfracoesMenu) {
  elementInfracoes.addEventListener('click', function () {
    menuInfracoes.classList.remove('show')
  })
}
// Menu Gestão de Frota
const menuFrota = document.querySelector('#header div.frota nav')
const openFrotaMenu = document.querySelectorAll('div .icon-frota')
const closeFrotaMenu = document.querySelectorAll('nav .icon-close')

for (const elementFrota of openFrotaMenu) {
  elementFrota.addEventListener('click', function () {
    menuFrota.classList.add('show')
  })
}
for (elementFrota of closeFrotaMenu) {
  elementFrota.addEventListener('click', function () {
    menuFrota.classList.remove('show')
  })
}
// Menu Placa mercosul
const menuPlaca = document.querySelector('#header div.placa nav')
const openPlacaMenu = document.querySelectorAll('div .icon-placa')
const closePlacaMenu = document.querySelectorAll('nav .icon-close')

for (const elementPlaca of openPlacaMenu) {
  elementPlaca.addEventListener('click', function () {
    menuPlaca.classList.add('show')
  })
}
for (elementPlaca of closePlacaMenu) {
  elementPlaca.addEventListener('click', function () {
    menuPlaca.classList.remove('show')
  })
}

/*Validação menu placa */

const form = document.getElementById('form')
const placa = document.getElementById('placaVeiculo')
const veiculo = document.getElementById('tipoVeiculo')
const tipoPlaca = document.getElementById('tipoPlaca')
const enviar = document.getElementById('submit')

enviar.addEventListener('click', (e) =>{
  e.preventDefault();
  checkInputs()
 
})
function checkInputs() {
  const placaValue = placa.value.trim()
  const veiculoValue = veiculo.value.trim()
  const tipoPlacaValue = tipoPlaca.value.trim()
  const caracteres = document.querySelector('.caracteresCarro')
  const caracteresMoto = document.querySelector('.caracteresMotoLetras')
  const caracteresMotoNumeral = document.querySelector('.caracteresMotoNumeros')
  var placaMercosul = placaValue


 if (placaValue === '') {
    errorValidation(placa, 'Digite uma placa valida')
  } else if (placaMercosul.length > 8) {
    errorValidation(placa, 'Digite uma placa valida')

  }
    else if (placaValue != '') { 
    placaMercosul = placaMercosul.replace('-', '').toUpperCase()
    var regEx = /[A-Z]{3}[0-9]{4}/
    var teste = regEx.test(placaMercosul)
    var letras = placaMercosul.slice(0, 4)
    var numeros = placaMercosul.slice(5)
    var letra = placaMercosul.slice(4, 5)
    
    if (teste === true) {
      if (letra == '0') {
        placaMercosul = `${letras}A${numeros}`
        letras = placaMercosul.slice(0, 3)
        numeros = placaMercosul.slice(3)
        placaMercosul = `${letras}${numeros}`
        caracteres.innerText = placaMercosul
        caracteresMoto.innerText = placaMercosul.slice(0,3)
        caracteresMotoNumeral.innerText = placaMercosul.slice(3)
      } else if (letra == '1') {
        placaMercosul = `${letras}B${numeros}`
        letras = placaMercosul.slice(0, 3)
        numeros = placaMercosul.slice(3)
        placaMercosul = `${letras}${numeros}`
        caracteres.innerText = placaMercosul
        caracteresMoto.innerText = placaMercosul.slice(0,3)
        caracteresMotoNumeral.innerText = placaMercosul.slice(3)
      } else if (letra == '2') {
        placaMercosul = `${letras}C${numeros}`
        letras = placaMercosul.slice(0, 3)
        numeros = placaMercosul.slice(3)
        placaMercosul = `${letras}${numeros}`
        caracteres.innerText = placaMercosul
        caracteresMoto.innerText = placaMercosul.slice(0,3)
        caracteresMotoNumeral.innerText = placaMercosul.slice(3)
      } else if (letra == '3') {
        placaMercosul = `${letras}D${numeros}`
        letras = placaMercosul.slice(0, 3)
        numeros = placaMercosul.slice(3)
        placaMercosul = `${letras}${numeros}`
        caracteres.innerText = placaMercosul
        caracteresMoto.innerText = placaMercosul.slice(0,3)
        caracteresMotoNumeral.innerText = placaMercosul.slice(3)
      } else if (letra == '4') {
        placaMercosul = `${letras}E${numeros}`
        letras = placaMercosul.slice(0, 3)
        numeros = placaMercosul.slice(3)
        placaMercosul = `${letras}${numeros}`
        caracteres.innerText = placaMercosul
        caracteresMoto.innerText = placaMercosul.slice(0,3)
        caracteresMotoNumeral.innerText = placaMercosul.slice(3)
      } else if (letra == '5') {
        placaMercosul = `${letras}F${numeros}`
        letras = placaMercosul.slice(0, 3)
        numeros = placaMercosul.slice(3)
        placaMercosul = `${letras}${numeros}`
        caracteres.innerText = placaMercosul
        caracteresMoto.innerText = placaMercosul.slice(0,3)
        caracteresMotoNumeral.innerText = placaMercosul.slice(3)
      } else if (letra == '6') {
        placaMercosul = `${letras}G${numeros}`
        letras = placaMercosul.slice(0, 3)
        numeros = placaMercosul.slice(3)
        placaMercosul = `${letras}${numeros}`
        caracteres.innerText = placaMercosul
        caracteresMoto.innerText = placaMercosul.slice(0,3)
        caracteresMotoNumeral.innerText = placaMercosul.slice(3)
      } else if (letra == '7') {
        placaMercosul = `${letras}H${numeros}`
        letras = placaMercosul.slice(0, 3)
        numeros = placaMercosul.slice(3)
        placaMercosul = `${letras}${numeros}`
        caracteres.innerText = placaMercosul
        caracteresMoto.innerText = placaMercosul.slice(0,3)
        caracteresMotoNumeral.innerText = placaMercosul.slice(3)
      } else if (letra == '8') {
        placaMercosul = `${letras}I${numeros}`
        letras = placaMercosul.slice(0, 3)
        numeros = placaMercosul.slice(3)
        placaMercosul = `${letras}${numeros}`
        caracteres.innerText = placaMercosul
        caracteresMoto.innerText = placaMercosul.slice(0,3)
        caracteresMotoNumeral.innerText = placaMercosul.slice(3)
      } else if (letra == '9') {
        placaMercosul = `${letras}J${numeros}`
        letras = placaMercosul.slice(0, 3)
        numeros = placaMercosul.slice(3)
        placaMercosul = `${letras}${numeros}`
        caracteres.innerText = placaMercosul
        caracteresMoto.innerText = placaMercosul.slice(0,3)
        caracteresMotoNumeral.innerText = placaMercosul.slice(3)
      }
      successValidation(placa)   
    } else {
      errorValidation(placa, 'Digite uma placa valida')
    }   
    
    
    } else {
    successValidation(placa)
  }
  
  
  const placaCarroParticular = document.querySelector('.placaCarroParticular')
  const placaCarroOficial = document.querySelector('.placaCarroOficial')
  const placaCarroDiplomatico = document.querySelector('.placaCarroDiplomatico')
  const placaCarroColecionavel = document.querySelector('.placaCarroColecionavel')
  const placaCarroEspecial = document.querySelector('.placaCarroEspecial')
  const placaCarroCormercial = document.querySelector('.placaCarroCormercial')
  const placaMotoParticular = document.querySelector('.placaMotoParticular')
  const placaMotoOficial = document.querySelector('.placaMotoOficial')
  const placaMotoDiplomatico = document.querySelector('.placaMotoDiplomatico')
  const placaMotoColecionavel = document.querySelector('.placaMotoColecionavel')
  const placaMotoEspecial = document.querySelector('.placaMotoEspecial')
  const placaMotoCormercial = document.querySelector('.placaMotoCormercial')

  if (veiculoValue === '0') {
    errorValidation(veiculo, 'Selecione o tipo do veiculo')   

  } else if (veiculoValue ==='5' && tipoPlacaValue === '1' && placaValue !== ''){
    caracteresMoto.style.color = 'black'
    caracteresMotoNumeral.style.color = 'black'
    caracteresMoto.style.display = 'block' 
    caracteresMotoNumeral.style.display = 'block' 
    caracteres.style.display = 'none' 
    placaCarroParticular.style.display = 'none' 
    placaMotoParticular.style.display = 'block'
    placaCarroOficial.style.display = 'none' 
    placaCarroDiplomatico.style.display = 'none' 
    placaCarroColecionavel.style.display = 'none' 
    placaCarroEspecial.style.display = 'none' 
    placaCarroCormercial.style.display = 'none' 
    placaMotoOficial.style.display = 'none' 
    placaMotoDiplomatico.style.display = 'none' 
    placaMotoColecionavel.style.display = 'none' 
    placaMotoEspecial.style.display = 'none' 
    placaMotoCormercial.style.display = 'none' 
    successValidation(veiculo)
  } else if (veiculoValue ==='5' && tipoPlacaValue === '2'  && placaValue !== ''){
    caracteresMoto.style.color = 'red'
    caracteresMotoNumeral.style.color = 'red'
    caracteresMoto.style.display = 'block' 
    caracteresMotoNumeral.style.display = 'block' 
    caracteres.style.display = 'none' 
    placaCarroParticular.style.display = 'none' 
    placaCarroOficial.style.display = 'none' 
    placaCarroDiplomatico.style.display = 'none' 
    placaCarroColecionavel.style.display = 'none' 
    placaCarroEspecial.style.display = 'none' 
    placaCarroCormercial.style.display = 'none'
    placaMotoParticular.style.display = 'none' 
    placaMotoOficial.style.display = 'none' 
    placaMotoDiplomatico.style.display = 'none' 
    placaMotoColecionavel.style.display = 'none' 
    placaMotoEspecial.style.display = 'none' 
    placaMotoCormercial.style.display = 'block'
    successValidation(veiculo)
  }else if (veiculoValue ==='5' && tipoPlacaValue === '3'  && placaValue !== ''){
    caracteresMoto.style.color = 'green'
    caracteresMoto.style.display = 'block' 
    caracteresMotoNumeral.style.color = 'green'
    caracteresMotoNumeral.style.display = 'block' 
    caracteres.style.display = 'none' 
    placaCarroParticular.style.display = 'none' 
    placaCarroOficial.style.display = 'none' 
    placaCarroDiplomatico.style.display = 'none' 
    placaCarroColecionavel.style.display = 'none' 
    placaCarroEspecial.style.display = 'none' 
    placaCarroCormercial.style.display = 'none'
    placaMotoParticular.style.display = 'none' 
    placaMotoOficial.style.display = 'none' 
    placaMotoDiplomatico.style.display = 'none' 
    placaMotoColecionavel.style.display = 'none' 
    placaMotoEspecial.style.display = 'block' 
    placaMotoCormercial.style.display = 'none'
    successValidation(veiculo)
  }else if (veiculoValue ==='5' && tipoPlacaValue === '4'  && placaValue !== ''){
    caracteresMoto.style.color = 'white'
    caracteresMoto.style.display = 'block' 
    caracteresMotoNumeral.style.color = 'white'
    caracteresMotoNumeral.style.display = 'block' 
    caracteres.style.display = 'none' 
    placaCarroParticular.style.display = 'none' 
    placaCarroOficial.style.display = 'none' 
    placaCarroDiplomatico.style.display = 'none' 
    placaCarroColecionavel.style.display = 'none' 
    placaCarroEspecial.style.display = 'none' 
    placaCarroCormercial.style.display = 'none'
    placaMotoParticular.style.display = 'none' 
    placaMotoOficial.style.display = 'none' 
    placaMotoDiplomatico.style.display = 'none' 
    placaMotoColecionavel.style.display = 'block' 
    placaMotoEspecial.style.display = 'none' 
    placaMotoCormercial.style.display = 'none'
    successValidation(veiculo)
  }else if (veiculoValue ==='5' && tipoPlacaValue === '5'  && placaValue !== ''){
    caracteresMoto.style.color = 'blue'
    caracteresMoto.style.display = 'block' 
    caracteresMotoNumeral.style.color = 'blue'
    caracteresMotoNumeral.style.display = 'block' 
    caracteres.style.display = 'none' 
    placaCarroParticular.style.display = 'none' 
    placaCarroOficial.style.display = 'none' 
    placaCarroDiplomatico.style.display = 'none' 
    placaCarroColecionavel.style.display = 'none' 
    placaCarroEspecial.style.display = 'none' 
    placaCarroCormercial.style.display = 'none'
    placaMotoParticular.style.display = 'none' 
    placaMotoOficial.style.display = 'block' 
    placaMotoDiplomatico.style.display = 'none' 
    placaMotoColecionavel.style.display = 'none' 
    placaMotoEspecial.style.display = 'none' 
    placaMotoCormercial.style.display = 'none'
    successValidation(veiculo)
  }else if (veiculoValue ==='5' && tipoPlacaValue === '6'  && placaValue !== ''){
    caracteresMoto.style.color = '#f1a90b'
    caracteresMoto.style.display = 'block' 
    caracteresMotoNumeral.style.color = '#f1a90b'
    caracteresMotoNumeral.style.display = 'block' 
    caracteres.style.display = 'none' 
    placaCarroParticular.style.display = 'none' 
    placaCarroOficial.style.display = 'none' 
    placaCarroDiplomatico.style.display = 'none' 
    placaCarroColecionavel.style.display = 'none' 
    placaCarroEspecial.style.display = 'none' 
    placaCarroCormercial.style.display = 'none'
    placaMotoParticular.style.display = 'none' 
    placaMotoOficial.style.display = 'none' 
    placaMotoDiplomatico.style.display = 'block' 
    placaMotoColecionavel.style.display = 'none' 
    placaMotoEspecial.style.display = 'none' 
    placaMotoCormercial.style.display = 'none'
    successValidation(veiculo)
  }else if (veiculoValue !=='5' && tipoPlacaValue === '1'  && placaValue !== ''){
    caracteres.style.color = 'black'
    caracteresMoto.style.display = 'none' 
    caracteresMotoNumeral.style.display = 'none' 
    caracteres.style.display = 'block' 
    placaCarroParticular.style.display = 'block' 
    placaMotoParticular.style.display = 'none'
    placaCarroOficial.style.display = 'none' 
    placaCarroDiplomatico.style.display = 'none' 
    placaCarroColecionavel.style.display = 'none' 
    placaCarroEspecial.style.display = 'none' 
    placaCarroCormercial.style.display = 'none'
    placaMotoOficial.style.display = 'none' 
    placaMotoDiplomatico.style.display = 'none' 
    placaMotoColecionavel.style.display = 'none' 
    placaMotoEspecial.style.display = 'none' 
    placaMotoCormercial.style.display = 'none' 
    successValidation(veiculo)
  } else if (veiculoValue !=='5' && tipoPlacaValue === '2'  && placaValue !== ''){
    caracteres.style.color = 'red'
    caracteresMoto.style.display = 'none' 
    caracteresMotoNumeral.style.display = 'none' 
    caracteres.style.display = 'block' 
    placaCarroParticular.style.display = 'none' 
    placaCarroOficial.style.display = 'none' 
    placaCarroDiplomatico.style.display = 'none' 
    placaCarroColecionavel.style.display = 'none' 
    placaCarroEspecial.style.display = 'none' 
    placaCarroCormercial.style.display = 'block'
    placaMotoParticular.style.display = 'none' 
    placaMotoOficial.style.display = 'none' 
    placaMotoDiplomatico.style.display = 'none' 
    placaMotoColecionavel.style.display = 'none' 
    placaMotoEspecial.style.display = 'none' 
    placaMotoCormercial.style.display = 'none'
    successValidation(veiculo)
  }else if (veiculoValue !=='5' && tipoPlacaValue === '3'  && placaValue !== ''){
    caracteres.style.color = 'green'
    caracteresMoto.style.display = 'none' 
    caracteresMotoNumeral.style.display = 'none' 
    caracteres.style.display = 'block' 
    placaCarroParticular.style.display = 'none' 
    placaCarroOficial.style.display = 'none' 
    placaCarroDiplomatico.style.display = 'none' 
    placaCarroColecionavel.style.display = 'none' 
    placaCarroEspecial.style.display = 'block' 
    placaCarroCormercial.style.display = 'none'
    placaMotoParticular.style.display = 'none' 
    placaMotoOficial.style.display = 'none' 
    placaMotoDiplomatico.style.display = 'none' 
    placaMotoColecionavel.style.display = 'none' 
    placaMotoEspecial.style.display = 'none' 
    placaMotoCormercial.style.display = 'none'
    successValidation(veiculo)
  }else if (veiculoValue !=='5' && tipoPlacaValue === '4'  && placaValue !== ''){
    caracteres.style.color = 'white'
    caracteresMoto.style.display = 'none' 
    caracteresMotoNumeral.style.display = 'none' 
    caracteres.style.display = 'block' 
    placaCarroParticular.style.display = 'none' 
    placaCarroOficial.style.display = 'none' 
    placaCarroDiplomatico.style.display = 'none' 
    placaCarroColecionavel.style.display = 'block' 
    placaCarroEspecial.style.display = 'none' 
    placaCarroCormercial.style.display = 'none'
    placaMotoParticular.style.display = 'none' 
    placaMotoOficial.style.display = 'none' 
    placaMotoDiplomatico.style.display = 'none' 
    placaMotoColecionavel.style.display = 'none' 
    placaMotoEspecial.style.display = 'none' 
    placaMotoCormercial.style.display = 'none'
    successValidation(veiculo)
  }else if (veiculoValue !=='5' && tipoPlacaValue === '5'  && placaValue !== ''){
    caracteres.style.color = 'blue'
    caracteresMoto.style.display = 'none' 
    caracteresMotoNumeral.style.display = 'none' 
    caracteres.style.display = 'block' 
    placaCarroParticular.style.display = 'none' 
    placaCarroOficial.style.display = 'block' 
    placaCarroDiplomatico.style.display = 'none' 
    placaCarroColecionavel.style.display = 'none' 
    placaCarroEspecial.style.display = 'none' 
    placaCarroCormercial.style.display = 'none'
    placaMotoParticular.style.display = 'none' 
    placaMotoOficial.style.display = 'none' 
    placaMotoDiplomatico.style.display = 'none' 
    placaMotoColecionavel.style.display = 'none' 
    placaMotoEspecial.style.display = 'none' 
    placaMotoCormercial.style.display = 'none'
    successValidation(veiculo)
  }else if (veiculoValue !=='5' && tipoPlacaValue === '6'  && placaValue !== ''){
    caracteres.style.color = '#f1a90b'
    caracteresMoto.style.display = 'none' 
    caracteresMotoNumeral.style.display = 'none' 
    caracteres.style.display = 'block' 
    placaCarroParticular.style.display = 'none' 
    placaCarroOficial.style.display = 'none' 
    placaCarroDiplomatico.style.display = 'block' 
    placaCarroColecionavel.style.display = 'none' 
    placaCarroEspecial.style.display = 'none' 
    placaCarroCormercial.style.display = 'none'
    placaMotoParticular.style.display = 'none' 
    placaMotoOficial.style.display = 'none' 
    placaMotoDiplomatico.style.display = 'none' 
    placaMotoColecionavel.style.display = 'none' 
    placaMotoEspecial.style.display = 'none' 
    placaMotoCormercial.style.display = 'none'
    successValidation(veiculo)
  }    

  if (tipoPlacaValue === '0') {
    errorValidation(tipoPlaca, 'Selecione o tipo da placa')
  } else {
    successValidation(tipoPlaca)
  }

  function errorValidation(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message

  }
  function successValidation(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'

  }
}

/*ADD placa*/



/* Envia para o link clicado no menu */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Colocando a sombra no header quando der o scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/*Testmonials carousel slide swiper*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* SCROLL REVEAL mostrar elementro quando girar a page */

const scrollreveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollreveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  footer .brand, footer .social`,

  { interval: 100 }
)

/* ===== BUTTON BACK-TO-TOP =====*/

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

/* Seção do menu ativo conforme a pagina */
/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
})
