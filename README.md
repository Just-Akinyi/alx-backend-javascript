# Setup
>> Install NodeJS 12.11.x

(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v

v12.11.1

$ npm -v

6.11.3

>> Install Jest, Babel, and ESLint

in your project directory:

    Install Jest using: npm install --save-dev jest
    Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env
    Install ESLint using: npm install --save-dev eslint

# Configuration files
### package.json

~~~
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
~~~

### babel.config.js

### .eslintrc.js

> Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.