SHELL := /bin/bash

MAKEFLAGS := --silent --no-print-directory

ni: # install npm dependencies in src, alias: ni
	cd src && npm install

t: # run typescript tests, alias: t
	cd src && npm run test

fmt: # format source code, alias: fmt
	cd src && npm run fmt

c: # compile the typescript code, alias: c
	cd src && npm run compile

l: # run ESLint on the source code and fix whatever it can, alias: l
	cd src && npm run lint
