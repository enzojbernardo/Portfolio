# NPM Guide

This guide shows the basic npm commands you need to install dependencies and run the project.

## What npm does

Npm manages packages for JavaScript projects. It installs tools your app needs and runs scripts defined by the project.

## Common commands

Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm run dev
```

Run a different script if the project defines one:

```bash
npm run script-name
```

See the scripts available in the project:

```bash
npm run
```

## When to use npm

Use npm after you clone a project, after dependencies change, or when you need to run a project task like dev, build, or test.

## Troubleshooting

If a command fails, read the message from top to bottom. The first error is often the important one.

If node_modules looks broken, reinstall dependencies:

```bash
rm -rf node_modules
npm install
```

If the project later adds a lockfile, keep it committed so installs stay consistent.

## Beginner tips

- Use `npm install` instead of installing packages by hand.
- Use `npm run dev` to start local development.
- Use `npm run` to discover available scripts.
- If you are not sure what a command does, ask before running it.
