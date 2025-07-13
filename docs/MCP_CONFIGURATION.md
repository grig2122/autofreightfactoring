# MCP (Model Context Protocol) Configuration Guide

## Installed MCP Servers

### 1. Context7 MCP
- **Package**: `@upstash/context7-mcp@latest`
- **Purpose**: Provides up-to-date documentation for libraries and frameworks
- **Usage**: Add `use context7` to prompts when you need current docs
- **Example**: `Create a Next.js 15 app with app router. use context7`

### 2. Firebase MCP
- **Package**: `@gthumb/firebase-mcp@latest`
- **Purpose**: Direct interaction with Firebase services
- **Configuration Required**:
  ```bash
  export FIREBASE_PROJECT_ID="your-project-id"
  export FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'
  ```
- **Features**: Firestore operations, Auth management, Storage handling

### 3. Vercel MCP
- **Package**: `@mistertk/vercel-mcp@latest`
- **Purpose**: Comprehensive Vercel platform management (114+ tools)
- **Configuration Required**:
  ```bash
  export VERCEL_TOKEN="your-vercel-api-token"
  ```
- **Get Token**: https://vercel.com/account/tokens
- **Features**: Deployments, domains, DNS, projects, teams, monitoring

### 4. GitHub MCP
- **Package**: `@modelcontextprotocol/server-github@latest`
- **Purpose**: GitHub repository and workflow management
- **Configuration Required**:
  ```bash
  export GITHUB_PERSONAL_ACCESS_TOKEN="your-github-pat"
  ```
- **Get Token**: https://github.com/settings/tokens
- **Features**: Repo management, PRs, issues, Actions workflows

### 5. Puppeteer MCP (Pre-installed)
- **Package**: `@modelcontextprotocol/server-puppeteer`
- **Purpose**: Web automation and scraping
- **Features**: Navigate, screenshot, click, fill forms, evaluate JS

## Environment Setup

Add these to your shell profile (`~/.zshrc` or `~/.bash_profile`):

```bash
# Firebase Configuration
export FIREBASE_PROJECT_ID="autofreightfactoring"
export FIREBASE_SERVICE_ACCOUNT_KEY='<paste-your-service-account-json>'

# Vercel Configuration
export VERCEL_TOKEN="<your-vercel-token>"

# GitHub Configuration
export GITHUB_PERSONAL_ACCESS_TOKEN="<your-github-pat>"
```

## Quick Start Commands

```bash
# List all MCPs
claude mcp list

# Restart Claude Code to load new MCPs
# (Close and reopen your terminal session)

# Test Context7
# In your next prompt, add "use context7" to get latest docs

# Firebase operations will be available after setting env vars
# Vercel operations will be available after setting VERCEL_TOKEN
# GitHub operations will be available after setting GITHUB_PERSONAL_ACCESS_TOKEN
```

## Next Steps

1. Set up environment variables for each service
2. Restart your terminal/Claude Code session
3. Test each MCP with simple operations
4. Check logs if any MCP fails to initialize

## Troubleshooting

If an MCP isn't working:
1. Check if environment variables are set: `echo $VARIABLE_NAME`
2. Check Claude Code logs: `claude logs`
3. Ensure you've restarted Claude Code after configuration
4. Try reinstalling the MCP: `claude mcp remove <name>` then add again