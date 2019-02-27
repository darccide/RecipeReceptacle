module.exports = {
  'Demo test Google': function(client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'nightwatch')
      .pause(1000)
      .assert.containsText('#main', 'nightwatch')
      .end();
  }
};
