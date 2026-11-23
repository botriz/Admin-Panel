# Suraya Admin Panel — locked foundation

This repository exposes only a status contract. Administrative access is intentionally disabled.

## Current contract

`adminStatus()` always reports:
- `mode: LOCKED`
- `access: NONE`
- `authenticated: false`

There is no login endpoint, session store, role manager, MFA, or administrative mutation API. Do not deploy this as an admin panel or infer authentication from a client-side user ID.

## Before enabling administration

Implement server-side identity verification, MFA, short-lived sessions, role-based authorization, CSRF protection, immutable audit logging, rate limits, and security tests. All privileged actions must be deny-by-default.

## Validation

```bash
npm test
```
