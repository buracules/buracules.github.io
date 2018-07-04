---
layout: post
title:  "Git Cheatsheet"
date:   2017-03-09
categories: "Miscellaneous"
permalink: /git/
tags: [commandline]
---
### CREATE

| Key/Command | Description |
| ----------- | ----------- |
| `$ git clone ssh://user@gomain.com/repo.git`   | Clone an existing repository |
| `$ git init`   | Create new local repository |

---

### LOCAL CHANGES

| Key/Command | Description |
| ----------- | ----------- |
| `$ git status` | Changed files in your working directory |
| `$ git diff` | Changes to tracked files |
| `$ git add .` | Add all current changes to the next commit |
| `$ git add -p <file>`  | Add some changes in <file> to the next commit |
| `$ git commit -a` | Commit all local changes in tracked files |
| `$ git commit` | Commit previously staged changes |
| `$ git commit --amend` | Change the last commit (Don't amend published commits) |

---
### COMMIT HISTORY

| Key/Command | Description |
| ----------- | ----------- |
| `$ git log` | Show all commits, starting with newest |
| `$ git log -p <file>` | Show changes over time for a specific file |
| `$ git blame <file>` |Who changes what and when in <file> |

---
### BRANCHES & TAGS

| Key/Command | Description |
| ----------- | ----------- |
| `$ git branch -av` | List all existing branches |
| `$ git checkout <branch>` | Switch HEAD branch |
| `$ git branch <new-branch>` | Create a new brach based on your current HEAD |
| `$ git checkout --track <remote/branch>` | Create a new tracking branch base on a remote branch |
| `$ git branch -d <branch>` | Delete a local branch |
| `$ git tag <tag-name>` | Mark the current commit with tag |


---
### UPDATE & PUBLISH

| Key/Command | Description |
| ----------- | ----------- |
| `$ git remote -v` | List all configured remotes |
| `$ git remote show <remote>` | Show information about a remote |
| `$ git remote add <shortname> <url>` | Add new remote repository, named <remote> |
| `$ git fetch <remote>` | Download all changes from <remote>, but don't integrate into HEAD |
| `$ git pull <remote> <branch>` | Download changes and directly merge/integrate into HEAD |
| `$ git push <remote> <branch>` | Publish local changes on a remote |
| `$ git branch -dr <remote/branch>` | Delete a branch on the renote |
| `$ git push --tags` | Publish your tags |

---
### MERGE & REBASE

| Key/Command | Description |
| ----------- | ----------- |
| `$ git branch -av` | Merge <branch> into your current HEAD |
| `$ git rebase <branch>` | Rebase your current HEAD onto <branch> "Don't rebase published commits!"|
| `$ git rebase --abort` | Abort a rebase |
| `$ git rebase --continue` | Cpntinue a rebase after resolving conflicts |
| `$ git mergetool` | Use your configured merge tool to solve conflicts |
| `$ git add <resolved-file>` | Use your editor to manually solve conflicts and (after resolving) mark file as resolved |
| `$ git rm <resolved-file>` | Use your editor to manually solve conflicts and (after resolving) mark file as resolved |

---
### UNDO

| Key/Command | Description |
| ----------- | ----------- |
| `$ git reset --hard HEAD` | Discard all local changes in your working directory |
| `$ git checkout HEAD <file>` | Discard local changes in a specific file |
| `$ git revert <commit>` | Revert a commit (by producing a new commit with contrary changes) |
| `$ git reset --hard <commit>` | Reset your HEAD pointer to a previus commit and discard all changes since then |
| `$ git reset <commit>` | Reset your HEAD pointer to a previus commit and preserve all changes as unstaged changes |
| `$ git reset --keep <commit>` |Reset your HEAD pointer to a previus commit and preserve uncommitted local changes |


## GIT FLOW

`$ git flow init`

## FEATURE

| Key/Command | Description |
| ----------- | ----------- |
| `$ git flow feature [list] [-v]` | |
| `$ git flow feature start [-F] <name> [<base>]` | |
| `$ git flow feature finish [-rFk] <name|nameprefix>` | |
| `$ git flow feature publish <name>` | |
| `$ git flow feature track <name>` | |
| `$ git flow feature diff [<name|nameprefix>]` |  |
| `$ git flow feature rebase [-i] [<name|nameprefix>]` ||
| `$ git flow feature checkout [<name|nameprefix>]` ||
| `$ git flow feature pull <remote> [<name>]` ||

## RELEASE

| Key/Command | Description |
| ----------- | ----------- |
| `$ git flow release [list] [-v]` | |
| `$ git flow release start [-F] <version>` | |
| `$ git flow release finish [-Fsumpk] <version>` | |
| `$ git flow release publish <name>` | |
| `$ git flow release track <name>` | |

## HOTFIX

| Key/Command | Description |
| ----------- | ----------- |
| `$ git flow hotfix [list] [-v]` | |
| `$ git flow hotfix start [-F] <version> [<base>]` | |
| `$ git flow hotfix finish [-Fsumpk] <version>` | |
