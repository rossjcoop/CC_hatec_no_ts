This is just a mock site pulling in data from a fake json server using React with Redux.

Directions to set up:

1. First, you must clone the repository to a directory on your computer. You must have git.
  - $ git clone git@github.com:rossjcoop/CC_hatec_no_ts.git

2. You need to have node installed on your computer, if you don't, visit https://nodejs.org/en/ to download.

3. In your CLI, navigate to the folder your just cloned and run the following command:

  - $ npm install

    This will download all of the dependencies needed to run this program.

4. Once, this is down go ahead and run:

  - $ npm start

5. The program is now running and should be broadcasting on localhost:3000. It should automatically open your browser and start it up.



This is a simple React/Redux project that is pulling in dummy data from the JSON Placeholder website. I've pulled in data in the form of posts, users, and comments and pooled them into the main application state. The landing page is all of the posts and each post can be clicked to view the post itself and the commentors. The tabs at the top only return to the home landing page at the moment, but will be a future feature that will be able to filter the data, or search for users.


RC


This project was created with create-react-app 
