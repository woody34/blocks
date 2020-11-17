import { log, exitWithError, NodeError, run } from './qonsole';

const checkLintConfig = () => {
  try {
    log('Lint config check...');
    run('npm run prettier:conflicts');
    log('Lint config good!');
  } catch (e) {
    exitWithError(e, 'Conflicts between eslint & pretter!');
  }
};

const strictLint = () => {
  try {
    log('Linting project...');
    run('eslint --ext .ts,.tsx,.yml,.yaml,.json . --max-warnings=0');
    log('Linting success!');
  } catch (e) {
    exitWithError(e, 'Linting failed!', undefined, lintFix);
  }
};

const lintFix = (e: NodeError): void => {
  log('Linting with autofix...');
  run('npm run lint');
  exitWithError(e, 'Linting failed: fix, save, add & commit again!');
};

checkLintConfig();

strictLint();
