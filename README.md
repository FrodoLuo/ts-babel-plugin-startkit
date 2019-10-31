# ts-babel-plugin-startkit

This project is created for quickly set up a babel plugin development project using TypeScript(For I think that TS is a really good language to develop babel plugins)

And this project is not stably developed, no any ensure for the usage, and it may cause something issues.

## Usage

### Download and setup

Clone or just download the whole project. And then setup the plugin's specified repo remote.

```sh
git clone https://github.com/FrodoLuo/ts-babel-plugin-startkit.git <YOU_PLUGIN_NAME>

git remote remove origin
git remote add origin <YOU_REPO_URL>
```

Modify the ``package.json`` file, set the name and description of your plugin. Otherwise it will emit error during install process.


### Development

As we take in the TS, developer should get benefit from the code intellisence by TS.

```sh
npm install
# or
yarn install
```

The entrypoint is defaultly set to ``./src/index.ts``, change it if you want, just remember to change the ``package.json`` and ``tsconfig.json`` too.

### Build and Publish

Just run ``npm run build`` or ``yarn build``, then TypeScript will compile the files. Target files will get put into ``./lib`` folder.

Publishing is no difference with standard NPM package.

## Feedbacks

As this is just a simple template to reduce work efforts during babel plugin developing. I can ensure no capability nor security issues.

But if you have any idea of making this template better, it'll be appreciate you can submit a pull request or issues :D