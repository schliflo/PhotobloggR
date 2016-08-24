(function () {
  'use strict';

  var body, menuToggleId, menuActivationClass;

  var setDefaults = function () {
    menuToggleId = 'menu-trigger';
    menuActivationClass = 'menu-open';
  };

  var toggleMenu = function () {
    body.classList.toggle(menuActivationClass);
  };

  var registerEventListeners = function () {

    // menu toggle
    document.getElementById(menuToggleId).addEventListener('click', function () {
      toggleMenu();
    });
  };

  var init = function () {
    body = document.querySelector('body');
    setDefaults();
    registerEventListeners();
  };

  init();

})();
