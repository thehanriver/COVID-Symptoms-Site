**Note** Please only attempt to access the URL from a laptop or desktop computer. Mobile browsers appear to give it trouble and result in poor connection reliability. 

The web app should be running properly at the following URL: 
https://ec463-software-project.herokuapp.com/Home

The app may take some time to respond since it is being hosted on the free-tier on Heroku, which can sometimes be slow.
If the app is not running at the URL, please see the instructions below on how to run the app locally which can help resolve issues if the connection is poor. 

**In order to access the Administrator dashboard:**
1. Click on the "Login" section of the Navigation bar 
2. Click on the "Sign in with Google" button
3. when prompted, enter the following credentials:
   Username: MarioArnaudDesign@gmail.com
   Password: @dminUser1234
4. Once successfully signed in, click on the "Admin Dashboard" 
   section of the navigation bar
5. you should now be able to view graphs of the survey results as well 
   as a table with the raw data and emails of the survey participants


**Running the App Locally:**
1. Download the code
2. Navigate to the project directory in your terminal
3. Run the "npm install" command to install the necessary dependencies
4. Run the "npm start" command to start the web app
5. Once the npm start command is run, the web app will be running on  [http://localhost:3000](http://localhost:3000)


**About the App**

This is a web app that allows a user to view live statistics about the COVID-19 pandemic including number of cases, deaths, and recovered patients worldwide. These 
statistics are provided by: https://github.com/mathdroid/covid-19-api and formatted using code modeled closely after this resource: https://www.youtube.com/watch?v=khJlrj3Y6Ls&start=27s&ab_channel=JavaScriptMastery

Additionally, this website has a survey component which records the users email and asks a series of questions in order to screen for commonly reported symptoms of COVID-19. This was done by using a google forms which was then embedded into the webpage. The data gathered by the survey is then recorded in a google sheets document where it is aggregated and displayed in two different graphs. These graphs, along with the raw data table were also embedded in the webpage and availble for viewing in the Admin Dashboard. The Admin Dashboard is only able to be viewed if the user signs in using the Admin credentials in the above instructions. All other users will be treated as non-admin users and are only able to take the survey. If a user wishes to be added as an Admin, they must contact one of the project managers (hanmario@bu.edu) in order to be authenticated as an Admin. 

In this case, a web app was chosen since there is ample documentation regarding the development of nodeJS web applications using react. Firebase was used was used for similar reasons and due to the fact that it is free to use. All components in the development of this application were chosen for their ease of use and solid documentation. This design philosophy allowed for the easy implementation of a pleasing user interface with minimal headaches. A good example of this is the API implementation. The cards, counting animation, and graph are all imported packages and the bulk of the code is taken directly from the YouTube video referenced above. This resulted in fast development of a professional-looking home page. 


**Test Cases:**
1. Signing in using google account:pass
2. singing in using other email: pass
3. Signing in using "Admin" credentials: pass
4. Resetting password via noreply email: pass
5. Joining the website from various desktop browsers: pass
6. Signing in with wrong credentials and asked to create an account: pass
7. Non-admins redirected to non-admin page upon clicking admin dashboard: pass
8. Changing display name of user: pass
9. Redirecting anonymous users to login page: pass
10. Joining website from mobile browsers: fail

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
