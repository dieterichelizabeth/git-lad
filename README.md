# GitLad

A tool for viewing your repos and commit history 🦉

Gitlad is a project built for managing personal repositories and their issues. This project's design is HEAVILY inspired by Github Skyline and Github itself.

Important: This is a view only tool. This project was not meant to be a place where users can update their repository information within the applicaiton- and is not set to connect to Github's OAth authorizations API. There are several links provided by within this app's search results which send you back to Github itself if you wish to modify your repositories.

## About

Gitlad offers users the ability to get a brief overview of their repositories. Users can search for their own Github username to see a list of (up to 30) repos, and view the issue count for each one. Users can click on the full repository name to see a additional information of the open issues. Users can click on the repository's full name to see the repo in Github, or issue/pull request buttons to open the issue itself on Github.

Currently, this application will only display 30 results per search as it is Github's default paginated results- to clone the repo and change the pagination yourself, [please refer to this resource](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#pagination). Additional information provided below.

This project offers the ability to search for open issues by language. Language based searches will return featured repositories based on the language, as well as their open issues count, for those who would like to search for open source projects to contribute to. At present, the term "JavaScript" will not return many repositories with open issues- I have left more information below if you would like to change the language buttons for personalized use after cloning the repo.

Commit History functionality is in the works...

## Screenshots

Welcome Page

<img width="1440" alt="Screen Shot 2022-06-05 at 11 44 48 PM" src="https://user-images.githubusercontent.com/95142863/172096498-5aad8a1d-6441-4e22-87bb-8e241c1219eb.png">

Example of Search result from "Search for Repository"

<img width="1425" alt="Screen Shot 2022-06-05 at 11 46 47 PM" src="https://user-images.githubusercontent.com/95142863/172096593-d3745a65-ad7c-4234-8c1b-5a9583e58995.png">

Example of a Single Repository and it's listed issues

<img width="1431" alt="Screen Shot 2022-06-05 at 11 47 07 PM" src="https://user-images.githubusercontent.com/95142863/172096667-d19aa52d-d71d-4097-a214-ac5ab9c0fc18.png">

## Run Locally

This project requires Node.js- [here is a resouce to get started](https://nodejs.org/en/). One Node.js is installed, in the terminal:

1. Clone the Repo

```bash
git clone https://github.com/dieterichelizabeth/GitLad.git
```

2. Install the dependencies

```bash
npm install
```

3. Start the project

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Updating Default Pagination

Currently, there are two files which handle the fetch requests to Github's API. Below are the file names and code blocks which handle the URL requests.

Note: Github's API contains rate limiting. Increasing the size of fetch responses may impact the functionality of this application. Please read through the [documentation](https://docs.github.com/en/rest/rate-limit) before proceeding.

1. SearchIssues.js

   Both lines 28 and 49 set URL parameters of their fetch request. Both URLs use the "repoName" variable to complete fetch requests based on user input. To modify the URL with the custom page (per_page) parameter, add the new parameter string to the end of these URLs.

   ```
   28. let apiURL = "https://api.github.com/repos/" + repoName + "/issues?direction=asc";

   49. let apiUrl = "https://api.github.com/repos/" + repoName;

   Github's documentation example per_page parameter URL: "https://api.github.com/user/repos?page=2&per_page=100"
   ```

2. Search.js

   Both lines 15 and 37 set URL parameters of their fetch request and use the "username" or "language" variable to complete fetch requests based on user input. To modify the URL with the custom page (per_page) parameter, add the new parameter string to the end of these URLs (example shown above).

   ```
   15. let apiUrl = "https://api.github.com/users/" + username + "/repos";

   37. let apiUrl = "https://api.github.com/search/repositories?q=" + language + "+is:featured&sort=help-wanted-issues";
   ```

## Updating Language Buttons

The Language buttons are set in the file Search.js lines 98-130. The buttons contain the same basic content shown below.

```
<button
    className="lng-btn"
    onClick={() => handleButtonClick("React.js")}
    >
    React.js
</button>
```

To update the language buttons, change the innerHtml of a single button and the string passed to handleButtonClick. For example-

```
<button
    className="lng-btn"
    onClick={() => handleButtonClick("jQuery")}
    >
    jQuery
</button>
```

Add additional buttons or remove inapplicable ones to yourself for personalization.

## Documentation

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [API Documentation](https://docs.github.com/en/rest)
- [API Documentation - repositories endpoint](https://docs.github.com/en/rest/reference/repos)
- [API Documentation - issues](https://docs.github.com/en/rest/reference/issues)
- [Query String Wiki](https://en.wikipedia.org/wiki/Query_string)
- [Link pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
- [Search for Repository Documentation](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)
