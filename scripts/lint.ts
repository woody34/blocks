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
    run('eslint --ext .ts,.tsx . --max-warnings=0');
    log('Linting successful!');
  } catch (e) {
    exitWithError(e, 'Linting error!', undefined, lintFix);
  }
};

const lintFix = (e: NodeError): void => {
  log('Linting with autofix...');
  run('npm run lint');
  run('HUSKY=0');
  exitWithError(e, 'Linting failed, fix, save, add & commit again!');
};

checkLintConfig();

strictLint();
