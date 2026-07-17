# Terminal Guide

This guide shows the basic terminal commands you need to move around the project and run common tasks.

## What the terminal does

The terminal lets you type commands directly to your computer. In this project, it is how you install packages, start the app, and run checks.

## Open the terminal

In VS Code, open the integrated terminal from the menu or with the keyboard shortcut for your system.

If you are already in the terminal, you can confirm the current folder with:

```bash
pwd
```

## Move around

Show the files in the current folder:

```bash
ls
```

Go into a folder:

```bash
cd scripts
```

Go back up one folder:

```bash
cd ..
```

## Run project commands

Install dependencies from the project root:

```bash
npm install
```

Start the app in development mode:

```bash
./scripts/run.sh
```

You can also run the Vite dev script directly:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## Stop a running command

If a command keeps running, press `Control + C` to stop it.

## Useful tips

- Run commands from the project root unless the guide says otherwise.
- Read error messages from top to bottom.
- Use `npm run` to see which scripts are available.
- If you are not sure what folder you are in, run `pwd` first.