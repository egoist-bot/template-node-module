const year = new Date().getFullYear();

module.exports = {
  enforceNewFolder: true,
  prompts: {
    project: {
      required: true,
      message: 'What is the name of the new project?',
      role: 'folder:name',
    },
    description: {
      message: 'How would you describe the new project?',
      default: 'Another fine project',
    },
    name: {
      message: 'What is your name?',
      role: 'git:name',
      store: true,
    },
    username: {
      message: 'What is your GitHub username?',
      role: 'git:name',
      store: true
    },
    nodeVersion: {
      message: 'What node version are you targetting?',
      default: '6',
    },
    airbnb: {
      type: 'confirm',
      message: 'Include airbnb eslint rules?',
      default: true,
    },
  },
  filters: {
    '.eslintrc': 'airbnb'
  },
  installDependencies: true,
  gitInit: true,
  post({ log, chalk, folderName, isNewFolder }) {
    log.success(`Project bootstrapped successfully into ${chalk.yellow(folderName)}`);
    const cmd = (isNewFolder) ? `cd "${folderName}"; npm start` : 'npm start';
    log.info(`Run ${chalk.cyan(cmd)} for additional instructions`);
  }
};
