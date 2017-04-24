# Work Assistant
A NodeJS CLI for helping with common tasks in the command line.

# Installation
```bash
git clone https://github.com/MaartenGDev/work-assistant
cd work-assistant
npm install -g
```

# Commands
All commands start with wa.

## Git commands

Open current repository on github
```bash
wa gh open
```

## Web commands

Check status of all websites specified in `./src/web/webStatus.js`

```bash
wa web status
```

## Dot files

Generates common dot files.

```bash
wa dot eslint
```
