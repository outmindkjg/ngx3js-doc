module.exports = {
  packages: {
    'devextreme-angular':  {
      ignorableDeepImportMatchers: [
        /devextreme\//
      ]
    },
    '@ngx-translate/core':  {
      ignorableDeepImportMatchers: [
        /@ngx-translate\//
      ]
    }
  }
};