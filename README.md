## Bozja Fate Notifications

A simple script that allows you to get notifications on when Skirmishes pop.
Requires [cactbot](https://github.com/quisquous/cactbot).

Modify `fate-config.js` to configure which Skirmishes you need notifications on and API tokens.
For push notifications, this overlay uses [Pushover](https://pushover.net/)."

### Installation

1. Make sure you have [ngld's OverlayPlugin and cactbot](https://gist.github.com/ngld/e2217563bbbe1750c0917217f136687d#how-do-i-install-overlayplugin-or-cactbot) installed.
2. Download the latest code from [the main branch](https://github.com/Makar8000/BozjaNotifications/archive/main.zip)
3. Extract the ZIP anywhere you like
4. In ACT, go to `Plugins` tab -> `OverlayPlugin.dll` tab -> Click on `New`.
5. Enter anything for the name (ex. Bozja Notifications) and in the Preset dropdown select `Custom` -> `MiniParse`.
6. Click on the Overlay you just created on the left panel, and uncheck `Show Overlay` (make sure `Enable Overlay` is still checked).
7. For the URL setting, click on the `...`, navigate to the folder you extracted and select `index.html`.
8. Edit `fate-config.js` to configure any settings you'd like.
9. Click on `Reload overlay`.