class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
      this.disableScroll = this.disableScroll.bind(this);
      this.enableScroll = this.enableScroll.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
  
      if (this.mobileMenu.classList.contains(this.activeClass)) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }
  
    disableScroll() {
      document.body.style.overflow = "hidden";
    }
  
    enableScroll() {
      document.body.style.overflow = "";
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    addOutsideClickEvent() {
      document.addEventListener("click", (event) => {
        const isClickInsideMenu = this.mobileMenu.contains(event.target);
        const isClickInsideNavList = this.navList.contains(event.target);
        if (!isClickInsideMenu && !isClickInsideNavList) {
          this.navList.classList.remove(this.activeClass);
          this.mobileMenu.classList.remove(this.activeClass);
          this.animateLinks();
          this.enableScroll();
        }
      });
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
        this.addOutsideClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavBar = new MobileNavBar(".mobile-menu", ".nav-list", ".nav-list li");
  mobileNavBar.init();
  
  var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
      counter = 1;
    }
  }, 5000);
  

// // Função para adicionar o indicador ao link de navegação ativo
// function addActiveIndicator() {
// var currentLocation = window.location.href; // Obtém o URL da página atual
  
// // Obtém todos os links de navegação
// var navLinks = document.getElementsByClassName('nav-link');
  
// // Percorre os links de navegação
// for (var i = 0; i < navLinks.length; i++) {
// var link = navLinks[i];
// var href = link.getAttribute('href');
  
// // Verifica se o URL da página atual corresponde ao link de navegação
// if (currentLocation.indexOf(href) !== -1) {
//                       link.classList.add('active'); // Adiciona a classe 'active' ao link
//                   }
//               }
//           }
  
//           // Chama a função quando a página terminar de carregar
// window.onload = addActiveIndicator;
  

