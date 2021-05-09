SHELL := /bin/bash

MAKEFLAGS := --silent --no-print-directory

.PHONY: help

.DEFAULT_GOAL := help

help:
	@echo "Please use 'make <target>' where <target> is one of"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z\._-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

ni: npm.install
npm.install: ## Install npm dependencies in src, alias: ni
	cd src && npm install

t: npm.test
npm.test: ## Run typescript tests, alias: t
	cd src && npm run test

fmt: format
format: ## Format source code, alias: fmt
	cd src && npm run fmt

c: compile
compile: ## Compile typescript code to src/dist, alias: c
	cd src && npm run compile

l: lint
lint: ## Run ESLint on the source code and fix whatever it can, alias: l
	cd src && npm run lint
