#!/bin/bash

echo "Setting up development environment..."

# Install dependencies
echo "Installing npm dependencies..."
npm install

# Install Claude Code globally
echo "Installing Claude Code..."
npm install -g claude-code

# Verify Claude Code installation
echo "Verifying Claude Code installation..."
claude-code --version

# Set up Claude Code API key if provided
if [ ! -z "$CLAUDE_API_KEY" ]; then
    echo "Setting up Claude Code API key..."
    claude-code config set apiKey "$CLAUDE_API_KEY"
fi

echo "Development environment setup complete!"
echo "To use Claude Code, run: claude-code"
echo "Remember to set your API key with: claude-code config set apiKey YOUR_API_KEY"