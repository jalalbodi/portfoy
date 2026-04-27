type LogLevel = "info" | "warn" | "error";

type LogFields = Record<string, unknown>;

function writeLog(level: LogLevel, event: string, fields: LogFields = {}) {
  const entry = {
    level,
    event,
    service: "portfolio",
    timestamp: new Date().toISOString(),
    ...fields,
  };

  const serialized = JSON.stringify(entry);

  if (level === "error") {
    console.error(serialized);
    return;
  }

  if (level === "warn") {
    console.warn(serialized);
    return;
  }

  console.log(serialized);
}

export function logInfo(event: string, fields?: LogFields) {
  writeLog("info", event, fields);
}

export function logWarn(event: string, fields?: LogFields) {
  writeLog("warn", event, fields);
}

export function logError(event: string, fields?: LogFields) {
  writeLog("error", event, fields);
}
