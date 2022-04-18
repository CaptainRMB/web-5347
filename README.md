# Group32:  What's the name of this website tho?
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Links
- [Canvas Page for this assignment](https://canvas.sydney.edu.au/courses/39701/assignments/358046)
- [MongoDB doc](https://www.mongodb.com/docs/manual/crud/)
- [Express doc](https://expressjs.com/en/4x/api.html)
- [Node.js doc](https://nodejs.org/docs/latest-v12.x/api/)

## Installation
The server is tested on [Node.js](https://nodejs.org/) **V12.13.0** only yet.
1. First, you have to import the [provided data](https://canvas.sydney.edu.au/courses/39701/files/21997637/download?download_frd=1) to your local mongoDB.
2. Then you have to modify the config file in **config/server.js**
    ```sh
    port : 8080,                                         //your app listening port
    mongoDB_port: 27017,                                 //your MongoDB listening port
    mongoDB_name: "COMP5347",                            //name of your MongoDB database
    mongoDB_usersCollection: "users",                    //name of the collection of your imported users data
    mongoDB_phonesCollection: "phones",                  //name of the collection of your imported phones data
    mongoDB_url: `mongodb://localhost:27017/COMP5347`,   //connecting link to mount your local MongoDB
    ```
3. Run server.js located at the root path.

Read the swagger document to figure out what the api requires and returns.
Read the note below **carefully** to comprehend the assignment requirment.

# Assignment Requirment
## Main Page

- The main page should display key items about the web application that are always shown in the top bar, such as: the name of the website, SellPhone.
  > The top bar will be only shown in this Main page and will be hidden when other pages are active.
    - a search bar to find phone (based on the title) with a search button.
    - a checkout button.
    - a sign-in button/two buttons instead if logged-in (profile and signout buttons)
    - a drop-down selection to filter based on the brand (only shown in “Search state”, please refer to the next details).
    - a range slider to filter the items based on maximum price (only shown in “Search state”, please refer to the next details).
- Below the top bar, the page consists of a website content with three states:
    - “Home” state, where the user has not searched anything or select any item. This state shows two sections:
        - “Sold out soon”: five phone listings (image and price) that have the least quantity ==available== (more than 0 quantity and not disabled).
        - “Best sellers”: five phone listings (image and rating) that have the highest average rating (==not disabled and at least two ratings given==).
    - “Search” state, where the users search something. This state shows all of items with titles that match the search word (case insensitive and partial).
    - “Item” state, where the users click/select of the phone listing. The page shows the details of the selected phone listing that includes:
        - The title of the selected phone.
        - The brand of the selected phone.
        - The image of the selected phone.
        - The available stock of the selected phone.
        - The seller's full name (concatenation of first name and last name).
        - The price of the selected phone.
        - The first 3 reviews with a button to show more (clicking it will show the next three. Each review consists of:
            - Full name of reviewer
            - Rating
            - Comment which is limited to 200 characters
            - Show more button for the comment if the comment is more than 200 characters, to show the rest of the comment.
        - A button to add the item to cart. Clicking add to cart button will pop-up/show a text field to ask for the quantity.
        - A box showing the current added quantity (show 0 if the item has not been added to cart).
        - A text input or textfield to accept comments from the users, rating selection, and a button to post the comment. When the comment is submitted, it will be stored in the database and it will be shown to other users.

> Each image will be used to replace each hardcoded “imageurl” in the phone listing dataset depending on the brand, e.g., use “Apple.jpeg” for all initial listing with brand Apple. Hint: you can run a mongodb command to update this field using Robo 3T.
## Sign-in and/or Sign-up Page
The user will be redirected to this page if the user tries to add an item to the cart without logging in first or if the user clicks the “sign in” button on the top bar in the Main Page. This page provides two options: Sign-up and Login.

- All users must sign-up/sign-in before they can add any item to the cart and go to the Checkout Page.
- To create an account, the user must provide a first name, last name, email address (as username) and password.
- You need to do appropriate data validation to ensure valid data is entered before creating an account.
- The sign-up and login functions must be secure in terms of sign-up and login.
- Password hashing (MD5) must be implemented so passwords must not be stored as plain texts in the database.
- Once all data is entered correctly, an account should be created and maintained in the database.
- Further, you need to implement email verification for the sign-up process to make sure that the email provided for sign-up is a valid email. Before the users validate their email address by clicking a certain link to activate their account, the users cannot sign-in using the provided email and password yet.

- **About sign out**
    - Once an account is created/logged in successfully, a user should be able to see the previously shown page if the user   previously wants to add an item to the cart.
    - Users should also be able to logout from your web application by clicking  Sign-out button on the top bar of the Main Page.
    - There should be a confirmation box before signing the user out.
    - After the user is signed out, the user should see the Main Page with “Home” state active.
    -
- **About sign in**
    - In the sign-in page, there is also a link to the reset password page. In the reset password page, the users are required to provide a valid/registered email address. If the email address provided is valid (in the database), the web application will send a link to reset the password via email. Upon clicking this link, it will redirect to the web application page where the user needs to provide a new password twice. The new password will be saved and the user can only sign-in using this password.



## Checkout Page
This page will be shown when the user clicks the checkout button on the top bar of the Main Page. This page will show these details:
- A back button to go back to the previous shown page.
- All of added items in the cart with these information
- The title of the phone listing.
- The price of each item.
- The quantity selected.
- A button and textbox to modify the quantity of the item (selecting 0 will remove the item.
- A button to remove an item.
- A text that shows the total price of selected items.
- A button to confirm the transaction.
- After clicking the transaction confirmation button, you can assume that the items have been paid and they have been delivered. The quantity of the items now must reflect the actual quantity after this transaction. After completing the transaction, the user will be redirected to the Main Page with “Home” state active.

## User Page
This page will be shown when the user has logged in and click the “profile” button in the top bar of the Main Page. This page has four tabs/modes:

- Edit profile: the page shows editable textboxes for first name, last name, email that are pre-filled with the current value. The page includes a button “Update profile” to update the data in the database. When the button is clicked, the user needs to fill in the correct password first.
- Change password: the page shows two textboxes where the first asking the current password and the second asking the new password. The page also includes a button to confirm this process.
- Manage listings: the page has a button to add a new listing that requires all details (e.g. title, price, etc.). This page also shows the list of phone listings created/associated to this user. The user should be able to enable/disable each listing and remove the listing item.
- View comments: the page shows a list of comments for each phone listing. The user can only read the comments, but there is no delete button provided.
- This page also has a Sign-out button regardless the tab/mode selected. After signing out, the user will be redirected to the Main Page with “Home” state active.

## Additonal Note
### Demo
Each group must demo their application during ==week 12==. Note the demo will ==use another dataset== that conforms to structure of the dataset included in this assignment. A demo set will be provided and all team members must prepare and participate in the demo. Each team member will be required to demo one part of the application, and they should be able to answer any question about the application design and implementation. In preparation for your demo:
- Expect to discuss edge cases.
- Adhere to good user design and user experience principles.
- Each member should have complete understanding of how the overall system works. i.e. someone worked delicately on the frontend must also be able to answer database questions. It is highly recommended to follow the bus factor.
- Following good software design principles is recommended.
- If you are using external libraries not discussed in the tutorials, discuss it with your tutor. Your tutor maybe unfamiliar with the library you're using. Expect to answer questions about the usage of the library in your assignment. e.g. reasons for using the library and alternative solutions.
### Contribution
If members of your group do not contribute sufficiently you should alert your tutor as soon as possible. The contributions of each group member will be checked from the project's GitHub repository. Failure to join and use the provided GitHub organization account (using your uni email) might result in 0% contribution. All group members must contribute ==effectively and equally== to the project. The contributions will be evident by the GitHub repo. and logs related to each project.


Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.





[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[Canvas]: <https://canvas.sydney.edu.au/courses/39701/assignments/358046>

