'use strict'

let menuContainer = document.getElementById('menu-container'),
    submenues = document.getElementsByClassName('submenu');

menuContainer.addEventListener('mousemove', function(event) {
  let target = event.target;
  
  while (target.tagName != 'UL') {
    if (target.tagName == 'LI') {
      let li = target,
          childrenContainer;
      
      childrenContainer = li.getElementsByTagName('ul')[0];

      if (!childrenContainer && !target.classList.contains('submenu-item')) {
        closeSubmenues();
        return;
      }
      
      if (childrenContainer.classList.contains('open')) {
        return;
      }
      
      openSubmenu(childrenContainer);
    } else if (target == menuContainer) {
      closeSubmenues();
      return;
    }

    target = target.parentNode;
  }
  
});

menuContainer.addEventListener('mouseleave', function() {
  closeSubmenues();
});


function openSubmenu(item) {
  if (item.classList.contains('open')) {
    return;
  }
  item.classList.add('open');
}

function closeSubmenues() {
  for (let i = 0; i < submenues.length; i++) {
    if (submenues[i].classList.contains('open')) {
      submenues[i].classList.remove('open');
    }
  }  
}