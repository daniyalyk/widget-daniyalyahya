# widget-daniyalyahya

## Open 2 instances of terminal/command prompt in the root folder:

### `widgetapp`

### Please make sure the port numbers:

#### `3000` & `3001` are available

## In the First Terminal Run `cd widgettest-daniyalyahya`

This takes you to the widget directory.
Make sure you run the widget before running the parent site.
Next, run:

### `npm install`

This should install all the dependencies and modules

Next, run:

### `npm run build`

This creates a build locally according to pre-defined configurations.
JS files in the static folder are what are embedded onto the parent website. Make sure to make the build before running the parent site.

Next, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## In the Second Terminal Run `cd main-widget-site`

This takes you to the parent website directory where you can view the widget in action.
Make sure the widget is running in the first terminal before running the parent site.
Next, run:

### `npm install`

This should install all the dependencies and modules

Next, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000] to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
