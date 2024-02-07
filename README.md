# Use the following scripts to better understand the project

This project is containerized and you can run the it by using either npm command or running the container. Below are different available npm commands and their description.

## Available npm Scripts

In the project directory, you can run:
### `npm install`
then run the following command to start the app.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run storybook`

Runs storybook for components documentation.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Docker files

There are two docker files ('Dockerfile.dev' and 'Dockerfile') available in this project. The first one is used for development purpose and the second one is for production. The docker-compose file uses image build from Dockerfile.dev file.

## Available docker commands

## `docker-compose up --build`
The above command will lounch a docker container and map port 3000 to 3000.

### `docker build -t <tag name> .`
#### `Example`
### `docker build -t dagtad/web -f Dockerfile.dev .`
### `docker run -p 3000:3000 dagtad/web`

This command creates docker images for development purpose.