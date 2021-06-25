![skrrt logo](https://github.com/montoya1256/skrrt/blob/main/wiki-resources/skrrt-logo-black.png?raw=true)
# skrrt

[Skrrt](https://skrrt-project.herokuapp.com/) is a cone of flickr. This app focuses on having users upload images of their cars. Users can also come by and with an account, comment on other users images.

# Core
- Images - Users will be able to upload images with a title, description, and a tag.
- Tags - Users will be able to add a tag for their image which corresponds to the model of the car.
- comments - Users will be able to add comments to users images. 

# Main Page
![skrrt landing page](https://github.com/montoya1256/skrrt/blob/main/wiki-resources/skrrt-main.png?raw=true)

The main page of this application shows all the images that users have posted to the site. These images are displayed 12 per page. Using a library free pagination formula, users are able to click on a number at the bottom of the page to redirect that user to the images page. These numbers display the next 12 pictures in the sequence. Using React functional components, it is also easy to change how many images are displayed per page. 


# Upload Page
![skrrt Upload page](https://github.com/montoya1256/skrrt/blob/main/wiki-resources/skrrt-upload.png?raw=true)

In this page of the application users are able to upload images through AWS S3. Before completeing the upload process users can preview the image that is being upload. In this same page users can title the image, give it a description, and choose what model car it is. After clicking on upload picture, the image is sent to the AWS service and returns a link to that image and stores it in my customized backend database.

# Each Image Page
![Skrrt each image page](https://github.com/montoya1256/skrrt/blob/main/wiki-resources/skrrt-single.png?raw=true)

Being able to click on an image is one of the best parts of this application. Users can click on an image and get a blown up version of it. In this same page users can comment on the image. If the image belongs to the logged in user, this is where they will be able to make changes. In the comments, owners of the comments can also edit their comments.
