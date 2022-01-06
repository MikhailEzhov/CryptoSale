# CryptoSale website

**My job:** [https://mikhailezhov.github.io/CryptoSale/](https://mikhailezhov.github.io/CryptoSale/)

**Model:** [https://www.figma.com/community/file/1026993776863154922](https://www.figma.com/community/file/1026993776863154922)



## Run the CryptoSale website locally

### Step 1: Clone project

```sh
git clone https://github.com/MikhailEzhov/CryptoSale.git CryptoSale
cd CryptoSale
```

### Step 2: Install npm dependencies

```sh
npm i
```

### Step 3: Run in the desired mode

mode development:

```sh
npm run dev
```

mode production:

```sh
npm run build
```



## To use assembly for your projects you need
1. install extension into code editor : Path Autocomplete
2. add settings to the code editor - Preferences: Open Settings (JSON):
```sh
"path-autocomplete.pathMappings": {
    "@img": "${folder}/src/img", // alias for images
    "@scss": "${folder}/src/scss", // alias for scss
    "@js": "${folder}/src/js", // alias for js
}
```
3. path for connected files must start with @

   example: `<img src="@img/aaaaa.svg">`
   
4. this is necessary so that the paths of the included files are correct when building the project, since the html modules are located in a separate folder.



## What is used in this project
- bootstrap grid system
- glidejs slider
- gulp
    - gulp-cli
    - browser-sync
    - del
    - gulp-autoprefixer
    - gulp-clean-css
    - gulp-file-include
    - gulp-if
    - gulp-imagemin
    - gulp-newer
    - gulp-notify
    - gulp-plumber
    - gulp-rename
    - gulp-replace
    - gulp-sass
    - sass
- webpack
    - webpack-stream
    - babel/cli
    - babel/core
    - babel/polyfill
    - babel/preset-env
    - babel-loader
    - core-js
