# Software Requirements

## Table of Contents
- [Software Requirements](#software-requirements)
    - [Main README](#main-readme)
    - [Vision](#vision)
    - [Scope](#Scope)
    - [Functional Requirements](#functional-requirements)
    - [Non-Functional Requirements](#non-functional-requirements)

## Main README
Link to the main [README.md](./README.md)

## Vision
The vision of our product is to create a slackbot which is capable of automating common utilities in order to increase efficiency in decision-making between team members, including the following tasks:

* Coin Flips
* Dice Rolls
* Set Timers

It is a helpful application that eliminates the stress of making in-the-moment decisions when co-working such as who presents first, which option of many good options to go with, etc.

## Scope

#### IN
* will perform the functions assigned to the commands given by the user
    * will send heads or tails upon coinFlip
    * will send integer 1-6 upon dieRoll
    * will start a timer at 00:00 upon setTimer or a countdown from xx:xx upon setCountdown
* will work in any slack workspace it is added to
 * will work in a general channel or within direct messages between users

#### OUT
* will not perform commands not given by the user
* will not maintain history of or track previous commands/calls
* will not work outside of slack workspaces

#### MVP
Create a working Slack bot that can perform the following actions given specific commands:
* Flip A Coin
* Roll a Die
* Set Timer
* Set Countdown

#### Stretch Goals
* Create another bot for a separate chat application (i.e. Discord) to alert Discord user when their Slack account receives a Direct Message or Mention
* Link Bot to Trello or Github Projects to remotely create and edit tasks
* Use Bot to gather workplace coffee or lunch orders
* Use Bot as a Task Manager: 
    * Send Reminders (Meetings, Assignments, etc)
    * Birthday Reminders
    * Create a To-Do List

## Functional Requirements
* A user can interact with the bot using specific commands
* An admin can add new functionality or alter existing functionality of the bot

#### Data Flow
Once bot is added to the slack workspace:

1. User sends one of the following commands
    * @rolldie
    * @flipcoin
    * @settimer
    * @setcountdown-MIN:SEC
2. Corresponding function is called
3. Bot emits function output to channel or user, depending on context

## Non-Functional Requirements
* Testability
    * utilizing jest mocks, unit test all bot functions to determine that the bot is responding properly to the commands given
* Compatibility
    * ensure that the bot is compatible with slack workspaces via mobile or desktop (all operating systems) by creating it as a slack application