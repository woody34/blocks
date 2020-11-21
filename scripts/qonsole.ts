import { execSync } from 'child_process';
import { exit, kill } from 'process';
import { asTree } from 'treeify';
import { ExitStatus } from 'typescript';

export interface NodeError {
  stdout: Buffer;
  stderr: Buffer;
  message: Buffer;
  status: number;
}

const cyan = '\x1b[36m';
const magenta = '\x1b[35m';
const red = '\x1b[31m';
const yellow = '\x1b[33m';
const reset = '\x1b[0m';
const green = '\x1b[32m';

export const log = (...args: string[]): void =>
  console.log(cyan, ...args, reset);
export const info = (...args: string[]): void =>
  console.log(magenta, ...args, reset);
export const warn = (...args: string[]): void =>
  console.log(red, ...args, reset);
export const error = (...args: string[]): void =>
  console.log(yellow, ...args, reset);
export const success = (...args: string[]): void =>
  console.log(green, ...args, reset);

export const qonsole = {
  log,
  error,
  warn,
};

export const exitWithError = (
  e: NodeError,
  title: string,
  stderrLineFilter?: (line: string) => boolean,
  callback?: (e: NodeError) => void,
) => {
  const lineFilter = (line: string) => !!line && !line.includes('npm ERR');
  const errLines = splitOnNl(e.stdout.toString());
  const msgLines = splitOnNl(e.message.toString());

  // mutates/trim the logs if they are 20+ lines
  [errLines, msgLines].forEach(lines => {
    if (lines.length > 20) {
      lines.length = 20;
      lines.push('...');
    }
  });

  const cleanOut = errLines?.filter(stderrLineFilter ?? lineFilter) || [];
  const cleanMsg = msgLines?.filter(stderrLineFilter ?? lineFilter) || [];

  const treeErr = stripNl(asTree({ err: `exit ${e.status}` }, true, true));
  const treeLog = stripNl(asTree({ log: title }, true, true));

  warn(treeErr);
  log(treeLog);
  cleanMsg.forEach(msg => {
    const treeMsg = stripNl(asTree({ msg }, true, false));
    return info(treeMsg);
  });
  cleanOut.forEach((out: string) => {
    const treeOut = stripNl(asTree({ out }, true, false));
    return error(treeOut);
  });

  if (callback) {
    callback(e);
  }

  exit(e.status ?? 1);
};

export const run = (command: string): Buffer => {
  return execSync(command);
};

const stripNl = (line: string) => line.replace('\n', '').trim();
const splitOnNl = (line: string): string[] =>
  line
    .split('\n')
    .map(v => v.trim())
    .filter(Boolean);
