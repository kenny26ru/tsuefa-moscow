// HUMBURGER IN HEADER
window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    })
    
    // HUMBURGER IN GALLERY FOR M-MENU
    window.addEventListener('DOMContentLoaded', () => {
      const menu = document.querySelector('.gallery_m_menu'),
      menuItem = document.querySelectorAll('.menu_item'),
      hamburger = document.querySelector('.gallery_hamburger');
    
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('gallery_hamburger_active');
          menu.classList.toggle('gallery_m_menu_active');
      });
    
      menuItem.forEach(item => {
          item.addEventListener('click', () => {
              hamburger.classList.toggle('gallery_hamburger_active');
              menu.classList.toggle('gallery_menu_active');
          })
      })
    })