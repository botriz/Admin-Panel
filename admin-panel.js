import { identity } from "suraya-global-intelligence-core/suraya-identity.js";
import { isLocked, isSavior } from "suraya-global-intelligence-core/suraya-lock.js";

export function adminStatus() {
  const core = identity();

  if (isSavior()) {
    return {
      mode: "SAVIOR",
      access: "FULL",
      note: "Admin Panel in Savior mode. Full access granted."
    };
  }

  if (isLocked()) {
    return {
      mode: "LOCKED",
      access: "NONE",
      note: "Admin Panel locked by core."
    };
  }

  return {
    mode: "NORMAL",
    access: "LIMITED",
    note: "Admin Panel running normally."
  };
}
