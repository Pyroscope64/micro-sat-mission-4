In order to make a collision detection system, all satellites were calibrated to the same radio channel, 10, in order to not interfere with any other micro:bits. Our micro:satellites only emit a signal at set intervals, not too rapidly, which means that power is not constantly being used. Each satellite used radio frequency to detect whenever another satellite was within 1m of another satellite. Each satellite would play a different sound whenever it was nearby another satellite, which allowed us to determine which satellites were close to which. 

Our micro:sat code successfully works as a collision detection system and is available on Github under an open-source licence.

> Open this page at [https://pyroscope64.github.io/micro-sat-mission-4/](https://pyroscope64.github.io/micro-sat-mission-4/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/pyroscope64/micro-sat-mission-4** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/pyroscope64/micro-sat-mission-4** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
