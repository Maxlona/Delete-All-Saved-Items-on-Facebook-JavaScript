const unsaveInterval = setInterval(() => {
  // 1. Open the "More options" menu
  const menuBtn = [...document.querySelectorAll('[role="button"]')]
    .find(b => b.getAttribute('aria-label')?.includes('More options'));
  if (!menuBtn) {
    console.log('✅ No more saved items found. Stopping...');
    clearInterval(unsaveInterval);
    return;
  }
  menuBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  // 2. Wait for menu to render, then click "Unsave"
  setTimeout(() => {
    const unsaveBtn = [...document.querySelectorAll('[role="menuitem"]')]
      .find(e => e.textContent.trim() === 'Unsave');
    if (unsaveBtn) {
      unsaveBtn.click();
      console.log('🗑️ Item unsaved...');
    } else {
      console.log('⚠️ Unsave button not found yet...');
    }
  }, 300); // small delay for FB menu render
}, 1000); // 🔁 runs every 1 second
