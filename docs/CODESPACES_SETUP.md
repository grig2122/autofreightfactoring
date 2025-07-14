# Using GitHub Codespaces with Claude Code

This guide explains how to set up and use Claude Code within GitHub Codespaces for remote development.

## Prerequisites

- GitHub account with Codespaces access
- Claude API key from Anthropic

## Setup Instructions

### 1. Open in Codespaces

1. Navigate to your repository on GitHub
2. Click the green "Code" button
3. Select the "Codespaces" tab
4. Click "Create codespace on main" (or your preferred branch)

### 2. Initial Setup

The devcontainer configuration will automatically:
- Install Node.js 20
- Install project dependencies
- Install Claude Code globally
- Set up VS Code extensions for the project

### 3. Configure Claude Code

Once the Codespace is ready, open a terminal and configure your API key:

```bash
claude-code config set apiKey YOUR_ANTHROPIC_API_KEY
```

### 4. Verify Installation

Check that Claude Code is installed correctly:

```bash
claude-code --version
```

## Using Claude Code in Codespaces

### Basic Commands

- Start Claude Code: `claude-code`
- Get help: `claude-code --help`
- View configuration: `claude-code config list`

### Tips for Codespaces

1. **API Key Security**: 
   - Consider using GitHub Codespaces secrets to store your Claude API key
   - Add `CLAUDE_API_KEY` as a Codespace secret in your repository settings
   - The setup script will automatically configure Claude Code if the secret is available

2. **Performance**: 
   - Codespaces provides a full Linux environment, so Claude Code runs natively
   - File operations and terminal commands work as expected

3. **Persistence**: 
   - Your Claude Code configuration persists within the Codespace
   - Remember to reconfigure if you create a new Codespace

## Customizing the Environment

The `.devcontainer/devcontainer.json` file can be modified to:
- Add additional VS Code extensions
- Install other development tools
- Configure environment variables
- Set up additional features

## Troubleshooting

### Claude Code Not Found

If `claude-code` command is not found:

```bash
npm install -g claude-code
```

### Permission Issues

If you encounter permission errors:

```bash
sudo npm install -g claude-code
```

### API Key Issues

To update or check your API key:

```bash
claude-code config set apiKey NEW_API_KEY
claude-code config list
```

## Security Considerations

- Never commit your API key to the repository
- Use GitHub Codespaces secrets for sensitive information
- The devcontainer runs with limited privileges for security

## Additional Resources

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [GitHub Codespaces Documentation](https://docs.github.com/en/codespaces)
- [Dev Container Specification](https://containers.dev/)