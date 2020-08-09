# NextLevelWeek #02

<div align="center">
  <img alt="Proffy" src="https://github.com/lmaoclost/NextLevelWeek-2/blob/master/.github/logo.png" width="280"/>
</div>

<br />
<div align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-191A1E">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/renansmoliveira/">
    <img alt="Follow me Linkedin" src="https://img.shields.io/badge/Follow%20up-renansmoliveira-191A1E?style=social&logo=linkedin">
  </a>
</div>

Project for a [Course](https://nextlevelweek.com/episodios/omnistack/2/edicao/2) that has the purpose to code a project named Proffy using Node, ReactJS and React Native. This project connects teachers and students so they can study or teach.

## Some Images

### WEB
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <img alt="Web" src="https://github.com/lmaoclost/NextLevelWeek-2/blob/master/.github/web-landing.png" width="400px">
  <img alt="Web" src="https://github.com/lmaoclost/NextLevelWeek-2/blob/master/.github/web-list.png" width="400px">
</div>

### Mobile
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <img alt="Web" src="https://github.com/lmaoclost/NextLevelWeek-2/blob/master/.github/Home-mobile.png" width="250px">
  <img alt="Web" src="https://github.com/lmaoclost/NextLevelWeek-2/blob/master/.github/preview-mobile.png" width="250px">
</div>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

Node, yarn and a text editor. I'm using VSCode.

## Day 1, 3: FrontEnd
Open a terminal.
```
$ cd /web
$ yarn
$ yarn start
```
Go to http://localhost:3000 and the project is up and running! To use the backend, make sure that it is running.


## Day 2: BackEnd
Go to another terminal.
```
$ cd /server
$ yarn
$ yarn knex:migrate
$ yarn start
```
The Backend will be running in the http://localhost:3333. To test the routes, i'm leaving this [Insomnia file](Insomnia_2020-08-06.json).

## Day 4: Mobile
I'm using Expo, so make sure that you have it. Go to [Api.ts](https://github.com/lmaoclost/NextLevelWeek-2/blob/master/mobile/src/services/api.ts) and change the baseURL to the server IP. If you're running the backend on localhost, the IP has the one in the expo page.
```
$ cd /mobile
$ yarn
$ yarn start
```
Go to the expo page and connect.

## Built With

* [Typescript](https://devdocs.io/typescript/) - Main Language
* [Node.js](https://nodejs.org/en/) - Backend framework
* [React.js](https://reactjs.org/) - JS framework for WEB
* [React Native](https://facebook.github.io/react-native/) - JS framework for APPs
* [Knex](http://knexjs.org/) - JS SQL query builder
* [SQLite](https://www.sqlite.org/index.html) - Database
* [Expo](https://expo.io/) - Used to improve the app development

## Authors

* **Renan Oliveira** - [GitHub](https://github.com/lmaoclost), [LinkedIn](https://www.linkedin.com/in/renansmoliveira/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Made with ❤️ by Renan Oliveira.