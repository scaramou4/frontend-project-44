#Makefile
install: #установить зависимости
	npm ci

brain-games: #запуск игры
	node bin/brain-games.js

publish: #публикация проекта
	npm publish --dry-run

lint: #запуск линтера
	npx eslint .
