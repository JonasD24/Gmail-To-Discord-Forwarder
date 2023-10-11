function forwardEmailToDiscord() {
  // Your Webhook
  var discordWebhookURL = 'Your shiny Webhook😋';

  // Email adress of sender
  var senderEmail = 'noreply@zuginfo.nrw';

  // search for unread threads of sender
    var threads = GmailApp.search('is:unread from:' + senderEmail);

  // Iterate through all threads
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var messages = thread.getMessages();

    // Iterate through all mails from a thread
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      var subject = message.getSubject();
      var body = message.getPlainBody(); // mail without formatting
      
       if (body.length > 2000) {
        body = body.substring(0, 1900); // Since Discord Webhooks only allow messages with a length of 2000. You have to shorten it.
      }

      // Create payload with embed to make it look cool
      var payload = {
        content: ''  ,
        embeds: [
      {
      title: subject,
      description: body,
      color: 16711680,
      }]
      };

      if (message.isUnread() == true){
      sendToDiscordWebhook(discordWebhookURL, payload);
      }
      // mark mail as read
      message.markRead();
    }
  }
}

function sendToDiscordWebhook(webhookURL, payload) {
  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };
  UrlFetchApp.fetch(webhookURL, options);
}
