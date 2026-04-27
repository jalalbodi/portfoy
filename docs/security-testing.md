# Security Gate Testing

The security workflow runs Semgrep, Gitleaks, and Trivy. It fails on CRITICAL Trivy findings and on detected secrets.

## Safely Test a Failing Secret Scan

Do not commit real secrets. To test Gitleaks safely:

1. Create a throwaway branch.
2. Add a fake key in a temporary file:
   ```text
   AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
   ```
3. Open a pull request and confirm the security workflow fails.
4. Delete the temporary file and force-push or open a cleanup commit.
5. Close the branch after the test.

Never use a real cloud, mail, database, or API credential for testing.

## Safely Test Trivy

Use a temporary branch and intentionally pin an outdated base image in `Dockerfile`, then open a pull request. Revert the change immediately after confirming the gate behavior.

## Semgrep

Semgrep uses the `p/ci` rule pack. Treat findings as review prompts: inspect the flagged line, fix the issue, or document why a rule is not applicable before suppressing it.
