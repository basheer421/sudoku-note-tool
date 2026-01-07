# UsDoku Notes Hotkey Extension

An unofficial browser extension for [UsDoku.com](https://www.usdoku.com) that adds a keyboard shortcut to toggle "Notes" mode.

## Features
* **Hotkey 'N':** Pressing the `N` key on your keyboard will automatically click the "Notes" toggle button on the game board.
* **Smart Focus:** The hotkey is disabled while you are typing in chat or input fields to prevent accidental triggers.

## Installation (Manual/Developer Mode)
Since this is a custom tool, you can install it manually in any Chromium-based browser (Chrome, Edge, Brave, Opera):

1. **Download** this repository as a ZIP file and extract it, or clone it using `git clone`.
2. Open your browser and navigate to `chrome://extensions/`.
3. Enable **"Developer mode"** using the toggle in the top-right corner.
4. Click the **"Load unpacked"** button.
5. Select the folder containing the extension files.
6. Open [UsDoku](https://www.usdoku.com) and start playing!

## How it Works
The extension monitors keyboard events. When it detects the `N` key, it searches for the React-generated class `.css-2bpbil` (the current identifier for the Notes button) and triggers a click event on that element.

## Troubleshooting
If the extension stops working, it is likely because UsDoku updated their website and changed the internal class names. 
1. Right-click the Notes button on the site and select **Inspect**.
2. If the class name is no longer `css-2bpbil`, update the `content.js` file with the new class.

## Disclaimer
This is an unofficial fan-made project and is not affiliated with, authorized, maintained, sponsored, or endorsed by UsDoku. Use of this extension is at your own risk.

