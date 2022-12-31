# Student_assistant_bot
A simple Whatsapp bot for guiding students built with Twilio as the messaging client, Google's Dialog flow for intent filtering, and runs on a Node.js server.


# Requirements
- [Ngrok](https://ngrok.com/) account
- [Dialogflow](https://dialogflow.cloud.google.com/) account
- [Twilio](https://www.twilio.com/) account
- [GCP](https://console.cloud.google.com/) service account
# Initial Set up and Installation
## Clone the repo & Install the required packages
```bash
git clone https://github.com/Dev-Elie/Student_assistant_bot.git
cd Student_assistant_bot
npm install
```

## Step1: Setting Up Dialogflow
### Creating an Agent

1. Go to the Dialogflow website (https://dialogflow.cloud.google.com/) and sign up for an account.

2. On the Dialogflow console, click the Create Agent button in the top left corner.

![](/assets/readme-media/Aspose.Words.9789cd7e-697b-4b5a-9414-7a82b2d5865d.001.png)

3. Enter a name for your agent and select the default language and time zone. Then click on the Create button.

![](/assets/readme-media/Aspose.Words.9789cd7e-697b-4b5a-9414-7a82b2d5865d.002.png)

### Creating an Intent

1. In the left sidebar of the Dialogflow console, click on the Intents option.

![](/assets/readme-media/Aspose.Words.9789cd7e-697b-4b5a-9414-7a82b2d5865d.003.png)

2. Click on the Create Intent button.

![](/assets/readme-media/Aspose.Words.9789cd7e-697b-4b5a-9414-7a82b2d5865d.004.png)

3. Add some training phrases that represent the user's input. These phrases should represent the type of input the intent is designed to handle.

![](/assets/readme-media/Aspose.Words.9789cd7e-697b-4b5a-9414-7a82b2d5865d.005.png)

As you will see in the later steps, a user can respond to the bot using phrases above or others that match the intent and get the desired response.

4. Under the Action and parameters section, define an [action](https://cloud.google.com/dialogflow/es/docs/intents-actions-parameters#actions). We describe an action `studentassistant.MENU` that triggers the show welcome menu logic in your service.

![](/assets/readme-media/Aspose.Words.9789cd7e-697b-4b5a-9414-7a82b2d5865d.006.png)

When a user says something similar to a training phrase, Dialogflow matches it to the intent, which is responsible for showing the welcome menu message.

This action-based response logic `\controllers\response\controller.js` file.

5. Click on the Save button to save your changes.

6. Repeat the same process for portals and events. The training phrases are everyday words or stuff we say. For example, for the Portal intent, we can have training phrases like “portal,” “my portal,” “students portal,” and a number depending on how the options appear in the response. Say, we have the responses in this order, ```
1. Portals
2. Events
```

we can have `1` and `2` as training phrases.

You are free to add as many intents as you desire while adding more logic to handle the same.

That’s it; Dialogflow is ready to match user responses to the right actions.
# Step 2: Creating a Google Cloud Service Account and Downloading client.json File

Here’s a [video tutorial](https://www.youtube.com/watch?v=gb0bytUGDnQ) to help you set up.

Once you have downloaded the `client.json` file, proceed to `\config\config.js` and fill it in with your keys from the downloaded file. Remember, these are sensitive credentials, and the news is there’s no unique way I have handled them in this project. You might want to store them as `environment variables`.

Good job, just one more set up to go, buddy 🙂
# Step 3: Setting up Twilio

1. Log in to your Twilio console (<https://console.twilio.com/>)

2. On the top right, click on the Account menu.

![](/assets/readme-media/Aspose.Words.9789cd7e-697b-4b5a-9414-7a82b2d5865d.007.png)

3. On the drop-down, select API Keys & tokens. Once created, add the **Live credentials**;

`TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` to your `.env` file.

![](/assets/readme-media/Aspose.Words.9789cd7e-697b-4b5a-9414-7a82b2d5865d.008.png)


4. Start Ngrok as follows.

`ngrok http 3000`

For more info on setting up Ngrok, see the [Getting started steps](https://dashboard.ngrok.com/get-started/setup).

5. On the Twilio console, on the left sidebar, go to `Messaging > Settings > WhatsApp sandbox settings`.

6. On the Ngrok terminal, copy the forwarding URL and paste it in the space “WHEN A MESSAGE COMES IN” in the following format.

`https://f749-197-156-137-143.eu.ngrok.io/webhook`

Make sure to append `/webhook` at the end of the URL.

![](/assets/readme-media/Aspose.Words.9789cd7e-697b-4b5a-9414-7a82b2d5865d.009.png)

7. Save the changes.

8. Finally, on your WhatsApp, send a message to the WhatsApp number in the WhatsApp sandbox participants section with the issued code.

If you get the error 

`RestException [Error]: Twilio could not find a Channel with the specified From address; double-check that you are using the Live credentials and not the Test credentials.`

Viva! That’s all to it. Go ahead and test the bot. 

![](/assets/readme-media/Aspose.Words.9789cd7e-697b-4b5a-9414-7a82b2d5865d.010.jpeg)

Happy hacking, let’s connect on Twitter [@dev_elie](https://twitter.com/dev_elie)
