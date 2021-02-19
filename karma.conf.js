// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter'),
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.js': ['coverage']
    },
    coverageReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      type: 'html',
    },

    reporters: ['progress', 'kjhtml', 'coverage', 'junit'],
    junitReporter: {
      outputDir: './karma', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'chrome-results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      useBrowserName: false, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {}, // key value pair of properties to add to the <properties> section of the report
      xmlVersion: null // use '1' if reporting to be per SonarQube 6.2 XML format
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome_headless'],
    customLaunchers: {
      Chrome_headless: {
        base: 'Chrome',
        flags: ['--no-sandbox', '--disable-web-security', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--single-run',
          '--no-proxy-server']
      }
    },
  });
};
