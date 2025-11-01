---
title: First Time Server Setup
description: Complete walkthrough for setting up your first game server with Infected Games Hosting.
---

## Welcome to Your New Server!

This guide will walk you through setting up your game server for the first time. Whether you've just purchased a Palworld, Minecraft, or ARK server, these steps will get you started quickly.

## Step 1: Access Your Game Panel

After your server is provisioned, you'll receive an email with:

- **Panel URL**: [panel.infectedgamehosting.com](https://panel.infectedgamehosting.com)
- **Username**: Your account email
- **Password**: Temporary password (change this immediately!)

### First Login

1. Visit the panel URL from your email
2. Enter your credentials
3. You'll be prompted to change your password on first login
4. Choose a strong password and save it securely

## Step 2: Locate Your Server

After logging in, you'll see your server dashboard:

1. Find your server in the list (it will show the game type)
2. Click on the server name to open the control panel
3. Bookmark this page for easy access later

## Step 3: Start Your Server

Before starting, verify:

- ✅ Server status shows "Offline" (yellow indicator)
- ✅ Installation is complete (no progress bars)
- ✅ No error messages in the console

**To start your server:**

1. Navigate to the **Console** tab
2. Click the green **Start** button
3. Watch the console output for startup messages
4. Wait for "Server is ready" or similar message (varies by game)

:::tip[Startup Time]
First-time startups can take 3-5 minutes as the server generates world files and configurations. Be patient!
:::

## Step 4: Find Your Connection Details

Your server connection information is displayed at the top of the panel:

- **Server IP**: The address players use to connect
- **Server Port**: Usually displayed next to the IP
- **RCON Port**: For admin tools (if applicable)

Example: `123.456.789.0:25565`

## Step 5: Connect and Test

### For Palworld Servers

1. Launch Palworld
2. Select **Join Multiplayer Game**
3. Choose **Connect to Server**
4. Enter your server IP and port
5. Click **Connect**

### For Minecraft Servers

1. Launch Minecraft
2. Go to **Multiplayer**
3. Click **Add Server**
4. Enter your server IP in the server address
5. Click **Done** and join your server

### For ARK Servers

1. Launch ARK
2. Go to **Join ARK**
3. Click the **Favorites** tab
4. Add your server IP and port
5. Connect to your server

## Step 6: Become an Admin

Most games require you to set yourself as admin:

### Palworld

1. Go to **Console** tab
2. Type: `/AdminPassword YourPasswordHere`
3. In-game, use `/admin YourPasswordHere` to gain admin access

### Minecraft

1. Go to **Console** tab
2. Type: `op YourUsername`
3. You'll have admin permissions when you reconnect

### ARK

1. Go to **Startup** tab
2. Find **Server Admin Password**
3. Set a password
4. Restart your server
5. In-game, press Tab and use `enablecheats YourPassword`

## Step 7: Customize Your Server

Now that your server is running, you can:

- **Change server name**: Edit configuration files in **File Manager**
- **Adjust settings**: Modify difficulty, rates, and gameplay options
- **Install mods**: Add mods through the panel or via FTP
- **Set up backups**: Create automatic backups in the **Backups** tab

## Common First-Time Issues

### Can't Connect to Server

**Check these things:**

- Server is running (green status)
- Using the correct IP and port
- No firewall blocking the connection
- Server didn't crash (check console for errors)

### Server Keeps Stopping

**Possible causes:**

- Out of memory (upgrade server resources)
- Corrupted configuration file
- Mod conflicts
- Insufficient disk space

Check the console for error messages and contact support if needed.

### Forgot Admin Password

Don't worry! You can reset it:

1. Stop your server
2. Navigate to **File Manager**
3. Find and edit the configuration file
4. Remove or change the admin password
5. Start your server

## Next Steps

Now that your server is running:

- 📖 Read your [game-specific guide](/games/palworld/getting-started/) for detailed configuration
- 🔄 Set up [automatic backups](/getting-started/backups/) to protect your progress
- 👥 [Add subusers](/getting-started/adding-subusers/) to help manage your server
- 🔧 Learn about [server schedules](/getting-started/schedules/) for automatic restarts

## Need More Help?

If you encounter any issues:

- Check game-specific guides in the sidebar
- Contact our 24/7 support: [Submit a ticket](https://billing.infectedgamehosting.com/submitticket.php)
- Join our Discord community for quick help
- Browse our knowledge base for solutions

Welcome to the Infected Games Hosting community! Enjoy your server! 🎮
