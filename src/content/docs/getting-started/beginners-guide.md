---
title: Beginners Guide
description: Learn the basics of managing your game server with Infected Games Hosting.
---

## Welcome to Infected Games Hosting

This guide will help you understand the fundamentals of managing your game server through our control panel.

## Accessing Your Game Panel

Your game server is managed through our Pterodactyl-based control panel.

1. Visit [panel.infectedgamehosting.com](https://panel.infectedgamehosting.com)
2. Log in with your credentials (sent via email after purchase)
3. Select your server from the list

## Understanding the Control Panel

### Console Tab

The console is where you monitor your server's real-time output and send commands.

- **Start/Stop/Restart**: Control your server's power state
- **Kill**: Force stop an unresponsive server (use as last resort)
- **Console Output**: View real-time server logs
- **Command Input**: Send commands to your server

### File Manager

Access and modify your server files:

- **Navigate folders**: Click on folders to browse
- **Edit files**: Click the edit icon to modify configuration files
- **Upload files**: Drag and drop or use the upload button
- **Create files/folders**: Use the create button
- **Delete files**: Select items and click delete

:::caution
Always backup files before editing! Incorrect modifications can break your server.
:::

### Databases Tab

Create and manage MySQL databases for plugins and mods:

1. Click **Create Database**
2. Enter a database name
3. Note the connection details for your plugins
4. Use the provided credentials in your configuration

### Schedules Tab

Automate server tasks:

- **Restart schedules**: Automatically restart at specific times
- **Backup schedules**: Create automatic backups
- **Command schedules**: Run server commands on schedule
- **Custom tasks**: Chain multiple actions together

### Backups Tab

Protect your server data:

- **Create backup**: Generate a backup of your server
- **Restore backup**: Revert to a previous state
- **Download backup**: Save locally to your computer
- **Delete backup**: Remove old backups

### Network Tab

Manage server ports and allocations:

- **Primary allocation**: Your main server IP and port
- **Additional allocations**: Extra ports for plugins/mods
- **Create allocation**: Add more ports as needed

### Startup Tab

Configure server startup parameters:

- **Server version**: Select game version
- **Startup command**: View the command used to start your server
- **Variables**: Modify server-specific settings

## Basic Server Management

### Starting Your Server

1. Navigate to the **Console** tab
2. Click the **Start** button
3. Monitor console output for any errors
4. Wait for the "Server is ready" message

### Stopping Your Server

1. Click the **Stop** button in the console
2. Wait for the server to shut down gracefully
3. Check console shows "Server stopped"

:::tip
Always use Stop instead of Kill when possible. Kill forces termination and may corrupt files.
:::

### Restarting Your Server

1. Click the **Restart** button
2. Server will stop and start automatically
3. Monitor console for successful restart

## File Management Best Practices

### Before Editing Files

1. **Create a backup** of the file or entire server
2. **Note original values** for easy reverting
3. **Edit one file at a time** to isolate issues
4. **Test changes** before making more modifications

### Common Configuration Files

Different games have different config files:

- **Palworld**: `PalWorldSettings.ini`
- **Minecraft**: `server.properties`
- **ARK**: `GameUserSettings.ini`

Check your game-specific guide for detailed configuration instructions.

## Getting Help

### Resources

- **Game Guides**: Check our game-specific guides
- **Support Tickets**: [Submit a ticket](https://billing.infectedgamehosting.com/submitticket.php)
- **Discord**: Join our community for quick help
- **Knowledge Base**: Browse articles in our documentation

### What to Include in Support Requests

When contacting support, provide:

1. **Server name or IP**
2. **Description of the issue**
3. **Console errors** (if any)
4. **Steps to reproduce** the problem
5. **Recent changes** made to the server

## Next Steps

Now that you understand the basics:

- Explore [game-specific guides](/games/palworld/getting-started/) for your server
- Set up [automatic backups](/getting-started/backups/)
- Learn about [scheduling tasks](/getting-started/schedules/)
- Add [subusers](/getting-started/adding-subusers/) to help manage your server

Welcome to the Infected Games Hosting community! We're here to help you succeed.
