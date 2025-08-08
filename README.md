# mcp-vmo (Vegetable Marketing Organization MCP Server)

This MCP server provides access to Vegetable Marketing Organization (VMO) vegetable market data APIs.
It implements tools that allow clients to retrieve vegetable prices, market forecasts, produce information, and other agricultural data through the Model Context Protocol.

## Available Vegetable Market Data Tools

- List today winter vegetable(s) price (**list_prices_winter**)
- List today summer vegetable(s) price (**list_prices_summer**)
- List today leafy vegetable(s) price (**list_prices_leafy**)
- List today melon(s) price (**list_prices_melons**)
- List today fruit(s) price (**list_prices_fruits**)
- List today root vegetable(s) price (**list_prices_roots**)
- List today bean(s) price (**list_prices_beans**)
- List today herb(s) price (**list_prices_herbs**)
- List today mushroom(s) price (**list_prices_mushrooms**)
- List today other vegetable(s) price (**list_prices_others**)
- List today prices for all vegetable categories (**list_prices_all**)

## Usage Examples

### Get Winter Vegetable Prices
> **prompt:**
>
> what is the vegetable price for next Wed ?

### Get current vegetable market data
> **prompt:**
>
> what is the current vegetable market data ?

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the MCP development server:
```bash
npm run inspect
```

3. Build the MCP server:
```bash
npm run build
```

4. Run tests:
```bash
npm test
```

5. Run tests in watch mode:
```bash
npm run test:watch
```

Comprehensive tests have been created for all API functions. See [docs/TESTING.md](docs/TESTING.md) for details.

## Configuration (Claude Desktop / Kilocode)
```json
{
  "mcpServers": {
    "mcp-vmo": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "github:louiscklaw/mcp-vmo"
      ],
      "timeout": 600,
      "alwaysAllow": [
        "list_prices_winter",
        "list_prices_summer",
        "list_prices_leafy",
        "list_prices_melons",
        "list_prices_fruits",
        "list_prices_roots",
        "list_prices_beans",
        "list_prices_herbs",
        "list_prices_mushrooms",
        "list_prices_others",
        "list_prices_all"
      ]
    }
  }
}
```

## Configuration (docker)

```json
{
  "mcpServers": {
    "mcp-vmo-docker": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "mcp-vmo:latest"],
      "name": "mcp-vmo (Docker)",
    }
  }
}
```


## Project Structure
- `src/` - Server source code
- `src/lib/` - API implementation modules
- `documentation/` - API documentation and test cases
- `scripts/` - Development utilities
- `src/tests/` - Test files

## Server Architecture
The MCP server is built on the FastMCP framework and implements various tools that correspond to Vegetable Marketing Organization APIs.
The architecture is shown in two diagrams for better readability:

### Server Overview

### Detailed Tool Structure

#### REQ01xx: Seasonal Vegetable Data
T.B.A.

## Credits:

- [mcp-hk-transport-eta](https://github.com/kennyfong19931/mcp-hk-transport-eta)
