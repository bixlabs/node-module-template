'use strict';
//Require dependencies
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = generators.extend({
//Configurations will be loaded here.
  prompting: function() {
    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Module\'s Name',
      //Defaults to the project's folder name if the input is skipped
      default: 'bixlabs-hello-world-node-module'
    },{
      type: 'input',
      name: 'description',
      message: 'Module\'s Description',
      default: 'Simple Hello World module.'
    },{
      type: 'input',
      name: 'authorName',
      message: 'Author\'s Name',
      default: 'Bixlabs'
    },{
      type: 'input',
      name: 'authorEmail',
      message: 'Author\'s Email',
      default: 'info@bixlabs.com'
    },{
      type: 'input',
      name: 'githubUsername',
      message: 'Author\'s Github username or Organization',
      default: 'bixlabs'
    },{
      type: 'input',
      name: 'projectHomePage',
      message: 'Project Homepage',
      default: 'bixlabs.com'
    }];
    return this.prompt(prompts).then(function(answers) {
      this.props = answers;
    }.bind(this));
  },

  writing: {
    //Copy the configuration files
    config: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name,
          description: this.props.description,
          authorName: this.props.authorName,
          authorEmail: this.props.authorEmail,
          githubUsername: this.props.githubUsername,
          projectHomepage: this.props.projectHomepage,
        }
      );

      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'), {
          name: this.props.name,
          description: this.props.description,
          authorName: this.props.authorName,
          authorEmail: this.props.authorEmail,
          githubUsername: this.props.githubUsername,
          projectHomepage: this.props.projectHomepage,
        }
      );

      this.fs.copy(
        this.templatePath('_.gitignore'),
        this.destinationPath('.gitignore')
      );

      this.fs.copy(
        this.templatePath('_.editorconfig'),
        this.destinationPath('.editorconfig')
      );

      this.fs.copy(
        this.templatePath('_.npmignore'),
        this.destinationPath('.npmignore')
      );

      this.fs.copy(
        this.templatePath('.github/_PULL_REQUEST_TEMPLATE.md'),
        this.destinationPath('.github/PULL_REQUEST_TEMPLATE.md')
      );
    },

    //Copy application files
    app: function() {
      this.fs.copy(
        this.templatePath('src/hello-world/_index.js'),
        this.destinationPath('src/hello-world/index.js')
      );

      this.fs.copy(
        this.templatePath('test/hello-world/_index.test.js'),
        this.destinationPath('test/hello-world/index.test.js'));
    },


  },

    //Install Dependencies
  install: function () {
    this.installDependencies({bower: false});
  }

});
