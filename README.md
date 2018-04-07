# Hugo Site

> My website theme for static generator goHugo.io. Theme use jQuery, Bootstrap 4.0, FontAwesome 5

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Hugo](https://gohugo.io/)

## Development

Start development web server watching for file change and live reload. The `-D` param will build even content containing `draft: true`.

    hugo serve -D

## Production Build

The production ready build will be placed into `public` folder. To create build run:

    hugo
