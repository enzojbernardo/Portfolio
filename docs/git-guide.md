# Git Guide

This guide shows the most common git commands you need to work on a project safely.

## What git does

Git tracks changes in your files so you can save progress, compare versions, and share work.

## First checks

See what changed in your repo:

```bash
git status
```

See the history of commits:

```bash
git log --oneline
```

## Basic workflow

1. Check your status.
2. Edit files.
3. Check status again.
4. Stage the files you want to save.
5. Create a commit.

Stage one file:

```bash
git add path/to/file
```

Stage everything you changed:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Describe your change"
```

## Branches

A branch is a separate line of work.

Create a new branch:

```bash
git checkout -b my-branch-name
```

Switch to an existing branch:

```bash
git checkout branch-name
```

## Remote repositories

A remote is the online copy of your repo, usually GitHub.

Send your branch to the remote:

```bash
git push -u origin my-branch-name
```

Get the latest changes from the remote:

```bash
git pull
```

## Safe habits

- Run `git status` before and after you make changes.
- Commit small, clear chunks of work.
- Use short commit messages that describe the outcome.
- Ask for help before force-pushing or rewriting history.

## Common troubleshooting

If you want to discard local changes, make sure you are sure first. A safer choice is to ask for help or make a backup branch.

If git says a file has conflicts, open the file, look for the conflict markers, and choose the correct version before committing.
