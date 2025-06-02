#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "ScratchpadTool",
  version: "1.0.2"
});

server.tool("scratchpad",
  "Use the scratchpad to write notes, organize your thoughts, " +
  "and plan steps to help you think through the user's requests, " +
  "especially for complex problems. Use this tool as often as needed " +
  "throughout your work. Use markdown to format your notes.",
  {
    title: z.string().describe("A brief description of what you are thinking about"),
    content: z.string().describe("Your thoughts and/or notes in Markdown")
  },
  async () => ({ content: [{ type: "text", text: "ok" }] })
);

const transport = new StdioServerTransport();
await server.connect(transport);
