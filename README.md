

## Intro

[JpG-TokenSwap](https://jagoan-pilot.online/) is an automated market maker (“**AMM**”) that allows two tokens to be exchanged on the [Binance Smart Chain](https://www.binance.org/en/smartChain) (BSC). It is fast, cheap, and allows anyone to participate.

##

This repo is responsible for the **exchange/pool** interfaace of the AMM: [dex.jagoan-pilot.online](https://dex.jagoan-pilot.online/)
## Dependencies  Install On Ubuntu 18.04
# Yarn
# Nodejs V 10.x
# Dependencies Cypress
# Nginx


#1 install yarn

```js
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
```

```js
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.listecho "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

```js
sudo apt update
sudo apt install yarn
```

#2 Nodejs

```bash
sudo apt-get install build-essential libsodium-dev npm libboost-all-dev libgmp-dev
sudo apt install nodejs node-gyp libssl1.0-dev -y
sudo apt install npm -y
sudo npm install n -g
sudo n v10
sudo apt purge nodejs npm -y
sudo ln -sf /usr/local/bin/node /usr/bin/node 
sudo ln -sf /usr/local/bin/npm /usr/bin/npm 
```

#3 Dependencies Cypress

```js
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

#4 Nginx

https://www.digitalocean.com/community/questions/how-do-i-point-my-custom-domain-to-my-ip-port-41-111-20-36-8080

## Run locally

Install packages

```js
yarn
```

Run application

```js
yarn run
```

## Change BSC network

To change the BSC network from test net, modify the `REACT_APP_CHAIN_ID` value in `.env`.

- MAIN NET `56`
- TEST NET `97`

## Run integration tets

Firstly, if you need to install cypress

```js
yarn cypress install
```

Then to run the Cypress suite in CLI

```js
yarn cypress run
```

Or, to run Cypress with its GUI

```js
yarn cypress open
```

# Localisation

_In order for the Crowdin API queries to work - you will need `REACT_APP_CROWDIN_APIKEY` & `REACT_APP_CROWDIN_PROJECTID` env variables set in your root `.env.development.local` file - please contact a dev if you need these._

## Forked PancakeSwap
