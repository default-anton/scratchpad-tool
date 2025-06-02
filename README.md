# Scratchpad Tool MCP Server

A Model Context Protocol server that provides a scratchpad tool for LLMs to organize thoughts, take notes, and plan approaches to complex problems.

## API

### Tools

- **scratchpad**
  - Use the scratchpad to write notes, organize your thoughts, and plan steps to help you think through the user's requests, especially for complex problems
  - Inputs:
    - `title` (string): A brief description of what you are thinking about
    - `content` (string): Your thoughts and/or notes in Markdown format
  - This tool is designed to be used internally by LLMs for planning and organization

## Usage

### Structured Thinking with Scratchpad

Add the following section to your custom instructions:

```markdown
# Structured Thinking with Scratchpad
Use the `scratchpad` tool to write notes, organize your thoughts, and plan steps to help you think through the user's requests, especially for complex problems.
```

### With Claude Desktop

1. Add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "scratchpad-tool": {
      "command": "npx",
      "args": ["-y", "scratchpad-tool"]
    }
  }
}
```

### With Claude Code

```
claude mcp add scratchpad-tool -- npx -y scratchpad-tool
```

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
