var exec = require('child_process').exec,
  chalk = require('chalk'),
  epiq_dir = '../../../../../../profiles/recruiter/themes/epiq',
  cmd = 'cd node_modules/recruiter_epiq_deps && gulp styleguide-kss --epiq_dir ' + epiq_dir;

console.log('Compiling styleguide - ' + chalk.yellow('gulp styleguide-kss'));
exec(cmd, function (error, stdout, stderr) {
  // command output is in stdout
  if (!error) {
    console.log(chalk.green(stdout));
  }
  else {
    console.log(chalk.white(stdout));
    console.log(chalk.red(error));
  }
  console.log(chalk.red(stderr));
});