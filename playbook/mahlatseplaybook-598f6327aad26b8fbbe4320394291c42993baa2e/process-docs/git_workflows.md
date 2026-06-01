## Process Docs (Aligned to Structure & Consistency)
These workflows reflect my strength:
* structured thinking
* repeatable systems

### Git Bash Workflows

**Setup Repo**
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin [repo-url]
git push -u origin main
```

**Clone Repo**
```bash
git clone [repo-url]
```

**Pull Repo**
```bash
git pull origin main
```

**Create Branch**
```bash
git checkout -b feature-name
```

**Merge Branch**
```bash
git checkout main
git merge feature-name
git push origin main
```
