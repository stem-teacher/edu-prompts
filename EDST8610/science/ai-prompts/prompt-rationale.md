C.R.A.F.T. is solid for single‑model, linear tasks that need clear scoping and tidy deliverables.
For agentic, multi‑agent systems grounded in a knowledge graph, a graph‑first, protocol‑driven meta‑prompt performs better: it encodes state, handoffs, verification, and tool governance explicitly.
The best practice today is a hybrid: use your G.R.A.P.H. idea as the orchestration backbone, augmented with proven prompting patterns (ReAct, Chain‑of‑Verification, schema/guardrail I/O, routing, and optional reflexion/Best‑of‑N) and with a strict knowledge‑graph contract.
What else is out there — strengths and weaknesses

C.R.A.F.T. (Context, Role, Action, Format, Target)
Strengths: Simple, easy to teach; clarifies intent and audience; good default for single‑turn or few‑turn tasks.
Weaknesses: Linear; weak at tool budgets, verification, and multi‑agent handoffs; no explicit state contract or routing.
Use when: One model, one output, minimal tools, human‑in‑the‑loop review.
Your G.R.A.P.H. (Goals, Resources, Actions, Protocols, Handoffs)
Strengths: Graph over linear; explicit responsibilities and handoffs; verification bias; naturally agentic; maps cleanly to MCP events and KG state.
Weaknesses: Needs hardening on evidence policy, safety budgets, output schemas, recovery/rollback, and KG integrity constraints.
Use when: Multi‑agent workflows, shared state, and observable operations are required.
ReAct / Plan‑Act patterns (reasoning interleaved with tool calls)
Strengths: Reduces hallucination via act‑observe loops; good with retrieval/tools; pairs well with stop conditions and tool budgets.
Weaknesses: Can be chatty/slow without budgets; requires clear unsafe/irreversible action gates.
Use when: Tools/file edits/web search are central to task success.
Tree‑/Graph‑of‑Thought and routing
Strengths: Branching exploration, parallel avenues, then prune; good for design, proofs, or planning.
Weaknesses: Token/latency heavy; needs scoring functions and early‑stop rules.
Use when: Open‑ended generation or planning benefits from breadth, with a verifier to pick winners.
Chain‑of‑Verification (CoVe) and external tests
Strengths: Turns “self‑critique” into concrete checks (tests, citations, schema validation, KG constraints); measurably improves reliability.
Weaknesses: Requires investment in test or citation infrastructure.
Use when: Stakes are non‑trivial; outputs must be verifiable (APA7, specs, ops runbooks).
Reflexion, Self‑Consistency, Best‑of‑N
Strengths: Often boosts quality via multiple tries or post‑hoc reflection.
Weaknesses: Costly; reflection without ground truth can reinforce errors; prefer external verifiers over free‑form self‑talk.
Use when: You can afford extra passes or have a verifier to score them.
Guardrails / JSON‑Schema / Pydantic prompting
Strengths: Deterministic, machine‑readable outputs; ideal for MCP and KG ingestion.
Weaknesses: Over‑tight schemas can cause refusals or brittle outputs; needs graceful degradation.
Use when: Downstream automation depends on strict structure.
DSPy‑style programmatic prompting and learned prompts
Strengths: Prompts as code with metrics; can learn routers/verifiers; production‑friendly.
Weaknesses: Needs data and evaluation harness; adds build complexity.
Use when: You will iterate prompts and want measurable improvements over time.
Debate/critique agents (Socratic, adjudicated)
Strengths: Can expose failure modes; useful for safety‑critical choices.
Weaknesses: Adds complexity and latency; requires an adjudicator/verifier.
Use when: Decisions require scrutiny across viewpoints.
Recommendation

Keep G.R.A.P.H. as the orchestration spine, and add missing pieces to make it production‑grade for knowledge‑graph agent systems:
A knowledge‑graph contract (namespaces, schema, provenance, integrity constraints, and transaction policy).
A tool policy with budgets, unsafe‑action gates, and explicit pre/post‑conditions (ReAct‑style loops).
A verification layer (Chain‑of‑Verification) with tests/citations/schema checks/KG constraint checks.
A routing layer (intent → agent/skill) with fallback.
Execution parameters (reasoning effort, verbosity, preamble cadence, stop conditions) and monitoring.
The result is a hybrid “GRAPH‑KG” meta‑prompt. It outperforms C.R.A.F.T. for your use cases while remaining compatible with simple tasks.
GRAPH‑KG meta‑prompt template (use this to design other prompts)
Note: British English; plain text outputs; fill the placeholders.

Field Variables

use_case
primary_goal
audience_profile, reading_level
kg: {namespace_prefixes, schema_version, required_classes, required_properties, provenance_model, identity_policy, integrity_constraints}
agents: [{id, role, capabilities_can, capabilities_cannot, inputs, outputs, mcp_tools, risk_thresholds}]
orchestration_graph: {nodes=agents, edges=handoffs_triggers, start_nodes, end_nodes}
tool_policy: {allowed_tools, unsafe_actions, preconditions, validation_steps, tool_budget_max, offline_only}
execution: {reasoning_effort, verbosity, preamble_frequency, stop_conditions, ask_vs_assume_policy}
evidence: {citations_required, citation_style=APA7, source_quality_floor, quote_limits, verification_steps}
monitoring: {metrics, dashboards, alert_triggers}
governance: {privacy_constraints, licensing_constraints, audit_log, rollback_plan}
acceptance_criteria, test_plan, quality_rubric, reviewer_role
max_questions (0–3)
Global Directives

Single source of truth is the knowledge graph and its schemas/versioned state.
Prefer verifiable actions over introspective commentary.
When details are missing, ask up to max_questions; otherwise proceed and record Assumptions.
Knowledge Graph Contract

Namespaces and prefixes: list required prefixes.
Schema and version: schema_version; required classes and properties.
Provenance: record source, time, agent, tool, and evidence for each triple/entity.
Identity policy: deduplication keys and matching thresholds.
Integrity constraints: cardinalities, domain/range, SHACL‑like rules.
Transaction policy: atomic writes, read‑your‑writes, conflict resolution.
Agents

For each agent:
Role and objective: one measurable goal.
Capability boundaries: CAN/CANNOT.
Inputs/outputs: structured fields; JSON‑like description acceptable.
Tools: MCP tools permitted; preconditions; validation steps; unsafe action gates.
Metrics: success and quality metrics per agent.
Handoffs: upstream dependencies; downstream consumers; what to persist to the KG.
Orchestration

Process graph: nodes=agents; edges=handoffs and triggers; include start/end conditions.
Routing rules: intent classification, skill selection, and fallbacks.
Human escalation: explicit triggers (policy violation, resource constraint, conflict).
State synchronisation: event‑driven updates; versioning and audit log.
Tool Policy (ReAct‑style)

Before first tool call: emit a succinct plan.
During execution: act → observe → update plan; cache context; avoid redundant calls.
Budgets: tool_budget_max and early‑stop criteria.
Unsafe actions: require explicit confirmation and double‑verification.
Verification and Safety (Chain‑of‑Verification)

Evidence policy: citations_required; source_quality_floor; APA7 when applicable.
Output validation: enforce output schemas; run KG integrity checks.
Tests: unit/compile/linters for code; fact checks/citation checks for research; runbooks dry‑runs for ops.
Mark any unresolved item as TO‑VERIFY and continue where safe.
Execution Parameters

reasoning_effort: minimal/medium/high aligned to task difficulty.
verbosity: low/medium/high; keep preambles concise unless debugging.
preamble_frequency: none | key steps | every step.
stop_conditions: define success/fail/timeout/handback.
Outputs

Required artefacts per use_case with explicit fields.
Machine‑readable outputs first (schemas), followed by human‑readable summaries.
Assumptions and Decisions register.
Monitoring and Governance

Metrics, dashboards, alert thresholds.
Privacy/licensing checks; redaction rules.
Rollback plan and incident notes.
Quality Gates

Contradiction scan across instructions.
Schema compliance check.
Evidence and citation verification.
Domain overlay checklist satisfied.
Internal excellence rubric (hidden) evaluating correctness, completeness, clarity, efficiency, safety/compliance, and testability; iterate until high‑confidence.
Example overlays for your use cases (drop‑in blocks)

High School STEM Teaching
Outputs: lesson plan schema, worksheet items with answer keys, rubric, safety notes.
Constraints: age‑appropriate content, differentiation, formative checks.
AI Software Process Design
Outputs: architecture/spec, tool schemas, SLAs/SLOs, risk register, rollout plan.
Constraints: governance, experiment tracking, reproducibility.
Rust Engineering
Outputs: module diffs, code, tests/benches, build commands, MSRV, Clippy/rustfmt.
Constraints: ownership/borrowing, lifetimes, safety/perf budgets.
Quarto and APA7
Outputs: project YAML, .qmd scaffolds, citation file, build commands.
Constraints: APA7 style, reproducibility, accessibility.
Academic Research and Writing
Outputs: research question, protocol, PRISMA‑like steps, sources with DOIs, limitations.
Constraints: ethics, evidence hierarchy, no fabricated citations.
Masters Study
Outputs: learning outcomes, schedule, retrieval/spaced repetition plan, assessment map.
Fly.io Operations
Outputs: fly.toml patterns, deployment/runbook, rollback, health checks, SLOs.
MCP System
Outputs: tool schemas, capability negotiation, auth/scopes, rate limits, telemetry.
Educational Knowledge Graphs
Outputs: ontology/schema, sample graph, population strategy, QA checks, export formats.
Migration guidance from C.R.A.F.T. to GRAPH‑KG

Map Context → Goals + Resources + KG contract.
Map Role → Agents (role/capabilities) with explicit CAN/CANNOT.
Map Action → Orchestration graph and tool policy (ReAct loops with budgets).
Map Format → Output schemas + guardrails + KG persistence spec.
Map Target Audience → Routing rules and overlays.
Add verification, monitoring, and governance layers that C.R.A.F.T. lacks.
Two optional refinements

Introduce a lightweight router agent that classifies intent and dispatches to the right subgraph; keep a human escalation path.
Where reliability matters, add Best‑of‑N with a verifier (tests/KG constraints) rather than open‑ended “self‑critique”.
Would you like me to instantiate this GRAPH‑KG meta‑prompt for one of your use cases now (e.g., “AI Software Process Design” or “Educational Knowledge Graphs”), filling the Field Variables and overlay block to produce a ready‑to‑run prompt?
