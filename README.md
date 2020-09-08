# PROJECT NAME

## Table of Contents
- [Project Name](#project-name)
    - [Overview](#overview)
    - [Project Management Board](#project-management-board)
    - [Software Requirements](#software-requirements)
    - [Installation](#installation)
    - [Deployment](#deployment)
    - [Commands](#commands)
        - [Timer](#timer)
        - [Countdown](#countdown)
        - [DieRoll](#dieroll)
        - [CoinFlip](#coinflip)
    - [UML Data Model](#uml-data-model)
    - [Approach to Testing](#approach-to-testing)
    - [Authors](#authors)
    - [Collaborations](#collaborations)
    - [License](#license)
    - [Acknowledgements / Resources](#acknowledgements-/-resources)

## Overview

## Project Management Board
This project utilizes GitHub Workflow / Projects boards. You can visit this board and see agile practices in action by clicking the link below.
[Workflow Board](https://github.com/orgs/401Mid/projects/1)


## Software Requirements
Please visit this link to view the [Software Requirements](./requirements.md)


## Installation
First clone down a copy of the repository from here [Repo Link](https://github.com/401Mid/project).

```bash
$ git clone https://github.com/401Mid/project/
```

Next move into project directory and install all required dependencies.

```bash
$ cd project/
$ npm install
```

Before we can get to running this application locally, you will need to create yourself a classic Slack Bot and assign it to your workspace. Please refer to the Slack API Documentation.
- [Slack API](https://api.slack.com/authentication/basics)

To see follow the steps we used to set up this bot checkout these set up instructions. This will go over creating a slack app, setting up initial scope, enabling listening events, and adding the appropriate slash commands required to run this project.
- [BotBot Setup Instructions](./slackBotInstructions.md)

Once you have completed the initial creation of your slack app, we can move into assigning some environment variables. In this project we use `dotenv` library to hold these values. Start off by creating this file.

```bash
$ touch .env # Note the . before env as this is a hidden file
```

After it is created you will need to add the following key value pairs

```bash
BOT_USER_TOKEN: # This is the Bot User OAuth token provided to you after creating a new Slack App
SLACK_SIGNING_SECRET: # Slack Signing Secret provided to you after creating a new Slack App
PORT: # Port number that you wish to use when running locally
```

Almost there! You have completed the initial setup of this bot application, leading into deploying and using this bot.


## Deployment
These instructions will over how to deploy it locally utilizing `localhost` and a tunneling library called `ngrok`. In order for you to successfully run this bot locally you will need some way for outside users to access your `localhost` url. `ngrok` Exposes a local webserver to the internet. Please review the official documentation at the link below.
- [ngrok Documentation](https://ngrok.com/docs)

VSCode has several extensions that utilize ngrok and are quite intuitive. Our team used the following extension.
- [ngrok for VSCode](https://marketplace.visualstudio.com/items?itemName=philnash.ngrok-for-vscode) by philnash

Once you have set up ngrok to work with you, we can finally launch the bot! Lets start the application locally
```bash
$ npm start # Run from the root of your file
```
Set up ngrok to work on your the `PORT` you are running your server on. `Ngrok` will provide you an exposed web URL for use to hit your server. This URL will need to be added to your Slack App. There are two places this will need to be added:
- `Event Subscriptions`: Update the Request URL to match your `ngrok` exposed URL.
- `Slash Commands`: Each slash command will need the request url to match your `ngrok` exposed URL.

You are finally ready to see your bot in action! You can now travel over to your Slack Workspace where you have installed your bot and start using the built-in commands.



## Commands
These are the currently available slash commands for this bot application.
- `NOTE:` Ensure you have read through all the [Installation](#installation) instructions to make sure you have set up your Slack App to work with these commands.

### Timer
Info coming soon...


### Countdown
Info coming soon...


### DieRoll
Info coming soon...


### CoinFlip
- Slash Command:
    - `/coinflip`
- Description:
    - Simulates flipping a two-sided coin. Heads or Tails. The outcome will state the number of coins flipped, and the percentage ratio of the win.
    - Optional parameter that can be passed in to indicate how many flips to occur.
- Example: These commands are executed within the Slack Workspace where the bot is installed.
    ```
        /coinflip
        A coin was flipped 1 time and the results were 100.0% HEADS.

        /coinflip 100
        A coin was flipped 50 times and the results were 56.0% TAILS.
    ```

## UML Data Model
![some model picture]()


## Approach to Testing
In this application we are utilizing a testing library called `jest`. We have automated unit and integration tests for the current state of this application.
- `NOTE:` Anything you change / add on this application may or may not break these tests and that is the risk you have to take.
Currently this application is configured to run the following command
```bash
$ npm test
# OR
$ npm watch
```


## Authors
- Software Developer: Cas Ibrahim
    - [Official Github](https://github.com/mamacas)
- Software Developer: Kateryna Shydlovska
    - [Official Github](https://github.com/KaterynaShydlovska)
- Software Developer: Joseph Zabaleta
    - [Official Github](https://github.com/joseph-zabaleta)
- Software Developer: Reagan Roberts
    - [Official Github](https://github.com/Rearo43)

## Collaborations
- none

## License
This project is under the [MIT License](./LICENSE).

## Acknowledgements / Resources
- [Bolt.js for SlackBots](https://github.com/slackapi/bolt-js)
- [ngrok documentation](https://ngrok.com/docs)
- [Ngrok for VSCode Extension](https://marketplace.visualstudio.com/items?itemName=philnash.ngrok-for-vscode)
- [Project WorkFlow](https://github.com/orgs/401Mid/projects/1)
- [Slack API](https://api.slack.com/authentication/basics)
- [Slack Bot Instructions](./slackBotInstructions.md)
- [Software Requirements](./requirements.md)

