
function isInIframe () {
  try {
      return window.self !== window.top;
  } catch (e) {
      return true;
  }
}

const style = `<style type="text/css">
header {
    display: none;
    
  }
  
  div#tabs {
    margin-top: 0;
    height: 100vh; 
  }

  #tabs #result {
    padding: 0;
    height: 100vh !important;
  }

  body.vsc-initialized {
    background-color: transparent;
  }
  </style>
`;

if (isInIframe() && !document.documentElement.getAttribute("slick-uniqueid")) {
  document.head.insertAdjacentHTML('beforeend', style);
}