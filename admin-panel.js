export function adminStatus() {
  return {
    mode: "LOCKED",
    access: "NONE",
    authenticated: false,
    reason: "AUTHENTICATION_NOT_IMPLEMENTED",
    note: "Administrative access remains disabled until server-side authentication, MFA, scoped roles, and audit logging are implemented."
  };
}
