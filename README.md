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

<img width="428" height="586" alt="image" src="https://github.com/user-attachments/assets/56fdcbf1-98cc-4f8f-a39e-91d505fa3358" />

running mode...

<img width="417" height="212" alt="image" src="https://github.com/user-attachments/assets/f714fc61-8462-4623-9c54-7c6f39a8886a" />

⚙️ What the Script Does

Automatically opens the More options menu for each saved item.

Clicks Unsave.

Waits 1 second between each action to prevent Facebook from blocking rapid automation.

Continues until no saved items remain.

Automatically stops when the list is exhausted.

⚠️ Important Notes

Do not navigate away from the page while the script is running.

If the script pauses due to Facebook lazy-loading:

You can stop the script at any time by running:

clearInterval(unsaveInterval); Or close the browser window

✅ Result

All saved items will be removed automatically — safely, gradually, and without triggering Facebook’s automation protections.
