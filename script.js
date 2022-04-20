$('.tab__btn').click(function() {
    if (!$(this).hasClass('active')) {
        $('.tab__content').toggleClass('active')
    }
    $('.tab__btn').removeClass('active')
    $(this).addClass('active')
})

$('.program__content__prog-courses__head').click(function() {
  $(this).toggleClass('active')
})

$('.program__name').click(function() {
  $(this).toggleClass('active')
})

$('.FAQ__content__wrap').click(function() {
  $(this).toggleClass('active')
})

let tabFormat = function () {
  let tabNav = document.querySelectorAll('.learning__formats__tabs__btn'),
  tabContent = document.querySelectorAll('.learning__formats__content__item'),
  tabName;

  tabNav.forEach(item=> {
    item.addEventListener('click', selectTabNav)
  })

  function selectTabNav() {
    tabNav.forEach(item=>{
      item.classList.remove('active')
    });
    this.classList.add('active')
    tabName = this.getAttribute('data-tab-name')
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item=> {
      item.classList.contains(tabName)
      ? 
      item.classList.add('active')
      :
      item.classList.remove('active')
    })

  }

};

let tabFAQ = function () {
  let tabNav = document.querySelectorAll('.FAQ__wrap__btn'),
  tabContent = document.querySelectorAll('.FAQ__content'),
  tabName;

  tabNav.forEach(item=> {
    item.addEventListener('click', selectTabNav)
  })

  function selectTabNav() {
    tabNav.forEach(item=>{
      item.classList.remove('active')
    });
    this.classList.add('active')
    tabName = this.getAttribute('data-tab-name')
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item=> {
      item.classList.contains(tabName)
      ? 
      item.classList.add('active')
      :
      item.classList.remove('active')
    })

  }

};

tabFormat();
tabFAQ();

$('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });

