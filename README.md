📄 Script Description

This JavaScript automation script removes all Facebook Saved items by programmatically opening each item's More Options menu and selecting Unsave.
To avoid Facebook’s automation and rate-limiting safeguards, the script performs actions at a controlled 1-second interval, mimicking natural user behavior.

✅ How to Use

Log in to your Facebook account.

Open your Saved items page:
👉 https://www.facebook.com/saved

Open Chrome Developer Tools (F12)
(Chrome is the tested browser.)

Switch to the Console tab.
Type the following and press Enter:

Allow Pasting


Paste the JavaScript automation script from the repository into the console.

Press Enter to start the automated process.

<img width="422" height="580" alt="image" src="https://github.com/user-attachments/assets/b37cfdaa-3691-45b5-8e07-7294e0997842" />

running mode...
<img width="425" height="137" alt="image" src="https://github.com/user-attachments/assets/1a8560ba-a9cb-499d-b287-576a534734a4" />

⚙️ What the Script Does

Automatically opens the More options menu for each saved item.

Clicks Unsave.

Waits 1 second between each action to prevent Facebook from blocking rapid automation.

Continues until no saved items remain.

Automatically stops when the list is exhausted.

⚠️ Important Notes

Do not navigate away from the page while the script is running.

If the script pauses due to Facebook lazy-loading:

Scroll the page down once to load more items.

You can stop the script at any time by running:

clearInterval(unsaveInterval);

✅ Result

All saved items will be removed automatically — safely, gradually, and without triggering Facebook’s automation protections.
