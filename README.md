# VUMCHandWashing
# 1. Description
Vanderbilt University Hand Washing is a comprehensive web app created for the purposes of auditing hand washing across various locations. The purpose of this app is to prevent patient to patient infection transmission. One would think these types of actions are heavily regulated, but that is not always the case. In 2009, manual auditing of hand hygiene improved compliance rates from 58% to 88%. In 2011, a basic mobile application further increased compliance at VUMC to 96%. While previous implementations were made specifically for in-house use, this app is being built from the ground up to support access from satellite offices, clinics, remote locations, etc. Certain "observers" spread across the medical center (or other sites) will have access to the app allowing them to record data on various hygienic practices; hand washing/scrubbing will be the primary measure of hygiene compliance. This app will be simple, straightforward, and uncluttered, allowing "observers" to quickly and easily chart and submit data on hygienic compliance. In addition to the data gathering functionality, the application will also include options to view and filter results in an appropriate fashion: using charts, graphs, or diagrams. This additional graphical analysis will be out of the way and may be limited to certain admin accounts.
#2. Checkout, build, and run
Install the latest version of XCode.

Check out the code from: https://github.com/astonking/VUMCHandWashing/tree/dev

You can test it using XCode's built in iOS simulator (top left drop down)

Run the simulator by pressing the play button (also in the top left)

Using valid credentials (tbd), you can sign into the application taking you to the home screen

From here you can navigate three large buttons specified for "New Observation", "Location", "Statistics"

New Observation allows you to select appropriate options in the observation (i.e. hands washed, contact precautions, gloves worn, gown worn, etc.)

Location will allow you to choose you current location in the hospital. (This is tentative, potentially unnecessary)

Statistic will allow you to view stats on observation data. Drop down menus allow you to filter results based on: time, location (tentative), and observations.

#3. Build cycles and associated milestones
1/21 - Initial readme, prototype
