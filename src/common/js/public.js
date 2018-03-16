export const refresh = (title) => {
    document.title = title;
    let iframe = document.createElement('iframe');
    // iframe.src = require('../img/search.png');
    iframe.setAttribute('style', 'display:none;');
    let loadFn = function () {
      iframe.removeEventListener('load', loadFn);
      document.body.removeChild(iframe);
      console.info('Page Title IS ' + title);
      iframe = null;
      loadFn = null;
    }
    document.body.appendChild(iframe)
    iframe.addEventListener('load', loadFn);
  };
  //用的是export导出   导入的时候import 要用大括号:import {refresh}