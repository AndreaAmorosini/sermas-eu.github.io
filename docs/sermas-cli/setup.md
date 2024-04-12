---
sidebar_position: 10
---

# Setup

The SERMAS CLI offers an interface to manage and configure the SERMAS Toolkit API

**NOTE** Set up the [../intro](SERMAS Toolkit API) first!


## With Docker

```sh
alias sermas-cli="docker run --rm -it -v `pwd`/sermas-cli-data:/data ghcr.io/sermas-eu/cli:latest"
```

## With node.js
In case you have nodejs, from npm 

```sh
sudo npm install -g @sermas/cli
```

you can now use `sermas-cli` command
