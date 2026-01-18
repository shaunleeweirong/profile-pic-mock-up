# Claude Code Instructions

## Working Style

1. **Think First, Read Code** - Before making changes, read the codebase for relevant files. Never speculate about code you haven't opened.

2. **Check In Before Major Changes** - Get user approval before implementing any significant changes.

3. **High-Level Explanations** - Provide brief summaries of what changes were made at each step.

4. **Simplicity First** - Keep every task and code change as simple as possible. Avoid massive or complex changes. Every change should impact as little code as possible.

5. **Maintain Documentation** - Keep an architecture documentation file (`ARCHITECTURE.md`) updated that describes how the app works.

6. **Grounded Answers Only** - Never make claims about code without investigating first. Read files before answering questions about them.

7. **Error Logging** - Include error logging with feedback on where and what the error is.

## MCP Response Handling

Any MCP response over 50 lines must be saved to `.context/mcp/`:

```bash
# After large MCP call, save response
echo '{response}' > .context/mcp/{server}/{tool}_$(date +%s).json

# Report summary only, e.g.:
# "Saved 200 lines to .context/mcp/supabase/execute_sql_1704729600.json. Found 12 tables."
```

## Task Workflow

1. Break work into small, reviewable tasks
2. Get approval for each task section before proceeding
3. Complete one task at a time
4. Summarize changes after each task
