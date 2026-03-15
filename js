// run auto-scroll first
setInterval(() => {
  window.scrollTo(0, document.body.scrollHeight);
}, 2000);

// run unsave items...
const wait = ms => new Promise(r => setTimeout(r, ms));
async function removeSaved() {
  while (true) {
    const menuBtn = document.querySelector('[aria-label="More options for saved item"]');
    if (!menuBtn) {
      console.log("No saved items left");
      break;
    }
    menuBtn.click();
    await wait(700);
    const unsaveBtn = [...document.querySelectorAll('[role="menuitem"]')]
      .find(e => e.innerText.trim().toLowerCase().includes("unsave"));
    if (unsaveBtn) {
      unsaveBtn.click();
      console.log("Unsaved one item");
    } else {
      console.log("Unsave option missing");
      break;
    }
    await wait(1200);
  }
}
removeSaved();
