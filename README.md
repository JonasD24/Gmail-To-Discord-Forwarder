# zuginfo-Email-to-Discord Forwarder

This Google Apps Script allows you to forward emails from a specific sender, in this case, "zuginfo.nrw," to a Discord webhook. It's a convenient way to receive email notifications in your Discord server.

## Prerequisites

Before you can use this script, you need the following:

1. A Gmail account with the emails you want to forward.

2. A Discord server with a webhook URL. You can create a webhook in your Discord server by following these steps:
   - Go to your Discord server settings.
   - Select "Integrations" and then "Webhooks."
   - Click on "New Webhook" and follow the prompts to create a webhook. Note down the webhook URL.

## Usage

1. **Script Deployment:**
   - Copy the script code provided in this repository.
   - Open your Google Apps Script editor at [https://script.google.com](https://script.google.com).
   - Create a new project (if you don't already have one).
   - Paste the script code into the script editor.
   - Save the project and give it an appropriate project name.
   - Click the floppy disk icon to save your project.
   - Click on the clock icon ⏰ on the left
   - Click on add trigger on the bottom right.
   - Choose the `forwardEmailToDiscord` function
   - In the "Event Source" section, select "Time-driven." and choose your desired time interval.
   - Hit save and you're done.

2. **Configuration:**
   - Set your Discord webhook URL: Replace `var discordWebhookURL` with your Discord webhook URL.
   - Configure the sender's email address: Update `var senderEmail` with the email address you want to forward.

3. **Run the Script:**
   - After configuring the script, run the `forwardEmailToDiscord` function by selecting it in the script editor and clicking the play (triangle) button.
   - This function will check for unread emails from the specified sender and forward them to your Discord server.

4. **Customization:**
   - You can modify the content and format of the messages being forwarded by editing the `payload` object in the script. Please keep in mind that the message in discord may not exceed 2000 characters.

## Support

If you encounter any issues or have questions, please feel free to [open an issue](https://github.com/JonasD24/Gmail-To-Discord-Forwarder/issues).

## Disclaimer

This script is provided as-is and without any warranty. Please use it responsibly and in compliance with Discord's and Gmail's terms of service.


