# Final Task Prompt — Stage 6 Investigating Science (GRAPH‑KG v1.1)

## Goals
Design teachable artefacts and a knowledge graph for **NSW Stage 6 Investigating Science** suitable for classroom delivery and assessment mapping.

## Deliverables
1. **Quarto project skeleton** for a unit (HTML+PDF) with APA‑7 refs.
2. **Worksheet & assessment shells** (editable `.qmd`).
3. **Knowledge Graph seed** as NDJSON (entities/relations); importable to SurrealDB.
4. **Verification pack**: tests (`quarto render --quiet`), KG schema validation, and CI checklist.

## Constraints & Defaults
- Language: British English; TZ: Australia/Sydney; Units: SI; Dates: ISO‑8601.
- Privacy: no real student data; use synthetic exemplars; redact PII.
- Standards: align to SWEBOK 4.0 for process; APA‑7 for citations; NSW Stage 6 for pedagogy.

## Agentic Posture & Roles
Use canonical roles: Intake → Router → Planner → Actor → Verifier → Scribe → Auditor.

## Tool Policy (allow‑list & budgets)
- Allowed: `cargo`, `rustfmt`, `clippy`, `quarto`, `surreal`, `fly`, `git`.
- Tool budget max: 30 calls; hard stop on breach.
- Unsafe actions: `db_write`, `deploy`; preconditions: dry‑run pass + backup + human confirm.

## Evidence Rules
Citations required (APA‑7). Prefer official NSW syllabus docs and peer‑reviewed sources. Record DOI/URL + tool versions in provenance.

## Output Schemas (must follow exactly)
- **Entities**: `{id, type ∈ [Agent,Prompt,Deliverable,Decision,Tool], props, provenance}`.
- **Relations**: `{from, to, label ∈ [IMPLEMENTS,HANDOFFS_TO,PRODUCES,DERIVES_FROM,VERIFIES,DECIDES], props, provenance}`.

## Acceptance Criteria
- Quarto renders without error; APA‑7 cites compile.
- KG seed validates vs JSON Schemas; SurrealDB dry‑run import OK.
- Checklists complete; `TO‑VERIFY` count = 0 at finalise.

## Stop Conditions
Budget exhausted; integrity violation; test failure; operator stop; unsafe gate not satisfied.

## Tasks (high level)
1) Build Quarto unit skeleton (front‑matter, outcomes table, lesson structure, assessment map, references).
2) Emit NDJSON seed for syllabus → modules → outcomes → assessments (use placeholders where exact codes are **TO‑VERIFY**).
3) Provide quick tests and CI checklist.

## Seed NDJSON (minimal example — placeholders to verify)
```ndjson
{"id":"project:invsci_stage6","type":"Deliverable","props":{"title":"Investigating Science Stage 6 KG","version":"0.1"},"provenance":{"source":"prompt","captured_at":"2025-08-26T00:00:00Z","agent_id":"agent:planner","tool":"llm","evidence_refs":["TO-VERIFY:NSW syllabus URL"]}}
{"id":"doc:unit_intro","type":"Deliverable","props":{"kind":"quarto","slug":"inv-sci-unit-1"},"provenance":{"source":"prompt","captured_at":"2025-08-26T00:00:00Z","agent_id":"agent:scribe","tool":"llm"}}
{"id":"decision:DD-001","type":"Decision","props":{"topic":"Use NDJSON staging + SurrealDB"},"provenance":{"source":"framework","captured_at":"2025-08-26T00:00:00Z","agent_id":"agent:auditor","tool":"policy"}}
{"id":"deliverable:worksheets","type":"Deliverable","props":{"kind":"qmd","count":2},"provenance":{"source":"prompt","captured_at":"2025-08-26T00:00:00Z","agent_id":"agent:actor","tool":"llm"}}
{"id":"tool:quarto","type":"Tool","props":{"name":"quarto","version":"TO-VERIFY"},"provenance":{"source":"system","captured_at":"2025-08-26T00:00:00Z","agent_id":"agent:actor","tool":"env"}}
{"from":"project:invsci_stage6","to":"doc:unit_intro","label":"PRODUCES","props":{},"provenance":{"source":"prompt","captured_at":"2025-08-26T00:00:00Z","agent_id":"agent:planner","tool":"llm"}}
{"from":"decision:DD-001","to":"project:invsci_stage6","label":"DECIDES","props":{},"provenance":{"source":"framework","captured_at":"2025-08-26T00:00:00Z","agent_id":"agent:auditor","tool":"policy"}}
{"from":"project:invsci_stage6","to":"deliverable:worksheets","label":"PRODUCES","props":{},"provenance":{"source":"prompt","captured_at":"2025-08-26T00:00:00Z","agent_id":"agent:planner","tool":"llm"}}
{"id":"doc:outcomes","type":"Deliverable","props":{"kind":"table","notes":"Stage 6 Investigating Science outcomes — codes TO‑VERIFY"},"provenance":{"source":"prompt","captured_at":"2025-08-26T00:00:00Z","agent_id":"agent:scribe","tool":"llm"}}
{"from":"doc:outcomes","to":"project:invsci_stage6","label":"DERIVES_FROM","props":{},"provenance":{"source":"prompt","captured_at":"2025-08-26T00:00:00Z","agent_id":"agent:verifier","tool":"llm"}}
```

## Quarto Unit Skeleton (files to create)
- `inv-sci-unit.qmd` (unit overview; outcomes table; lesson plan structure)
- `worksheet-1.qmd`, `worksheet-2.qmd` (placeholders)
- `references.bib` (APA‑7 entries; **TO‑VERIFY** items filled later)

## Quick Tests & Handover
- `quarto render --quiet`
- `surreal import --conn <DSN> --ns school --db invsci seed.ndjson --dry-run`
- `git add . && git commit -m "invsci seed + unit skeleton" && git tag v0.1`
