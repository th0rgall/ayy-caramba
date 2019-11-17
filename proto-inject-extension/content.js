/**
 * Insert buttons to copy the youtube-dl download command of videos on a ieonline.eitdigital.eu Moodle page
 * Because you can fast-forward downloaded videos with VLC!(or others) = profit
 * 
 * Usage
 * -----
 * 1. Download youtube-dl on https://youtube-dl.org/
 * 2. Install this extension
 * 3. Click the button you want. The required youtube-dl command is now copied to your clipboard.
 * 4. Open a terminal window
 * 5. Cmd+V or Ctrv+v to paste the command.
 * 6. Press Enter. The videos will now be downloaded in the current directory. Enjoy!
 * 
 * Tested on macOS
 * 
 * How does this work?
 * -------------------
 * The videos are embedded vimeo videos.  The plugin just copies the vimeo iframe src attributes for each video, 
 * so these can be pasted in youtube-dl
 * 
 * Date: 8/09/2019
 * Author: Thor Galle
 * */

const ytdlCommand = `youtube-dl --referer ${window.location} `;

// define style
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .theme-scrolltt.thr-copy-link {
      position: relative;
      top: 0;
      left: 10px;
    }

    .theme-scrolltt.thr-copy-link .pe-7s-angle-up {
      content: "🔗" !important;
    }

    .thr-btn {
        display: block;
        margin-top: 2px;
        margin-bottom: 30px;
    }

    .t1 {
      z-index: 9999;
      position: absolute;
      width: 305px;
      height: 243px;
      left: 8vw;
      top: 36vw;
    }

    // .pi-overlay {
    //   z-index: 9999;
    //   position: absolute;
    //   width: 40.7vw;
    //   height: 42.3vh;
    //   left: 6.6vw;
    //   top: 28.8vh;
    // }

    .pi-overlay {
      z-index: 9999;
      position: absolute;
      width: 38.9vw;
      height: 51.3vh;
      left: 8.5vw;
      top: 24.8vh;
      /* max-width: 389px; */
    }

  </style>
`);

const htmlToInject = `<iframe class="pi-overlay" width="100%" height="300" src="//jsfiddle.net/thorgalle/va0kz3pm/embedded/result/" allowfullscreen="true" allowpaymentrequest frameborder="0"></iframe>`

function injectHTML() {
  // define embed
  const embedElem = document.createElement("div");
  embedElem.id = "pi-inject-outlet";
  document.body.appendChild(embedElem);
  // seems to only work when in the page already, and "found" again
  document.getElementById("pi-inject-outlet").outerHTML = htmlToInject;
 }

injectHTML();

// window.onload = () => {

// };