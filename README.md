This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Tracksly.me
This React project uses Spotify's playlist API along with React Router to allow any user with a Spotify account to create and upload playlists to their Spotify app.

## Summary
The web app asks new user to authenticate their Spotify account credentials upon visiting. After granting access, the user is able to search for any songs or artists they want, and a list of 20 songs will populate on the left side of the screen (desktop), or underneath the search bar (mobile). Users are then able to press the add button to populate songs of their choosing in the playist section of the app (right side, desktop; underneath search results, mobile). At this point, the user can then continue to search for songs and add them to their playlist as desired. When the playlist is complete, users can then choose a name for their new playlist and press the save button to upload it directly to their Spotify accounts. Returning users on the same device will not have to re-authenticate their Spotify accounts upon re-visiting the app.

## Technologies Used
This application was built using React.js and CSS.

## Live App
http://tracksly.me

## Screenshots
Mobile Results:
![tracksly-mobile-results](https://user-images.githubusercontent.com/54727677/103707659-e4910d00-4f63-11eb-9a1e-b3c61c4f9add.png)

Desktop Results:
![Tracksly-Desktop-Hero-Results](https://user-images.githubusercontent.com/54727677/103707645-df33c280-4f63-11eb-9eb5-4544a9e7b695.png)

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
