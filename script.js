        //Create an Array to hold the image locations
        //TODO UPDATE IMAGES AND WRITE DESCRIPTION FOR ALT
        let ArrayImages = [
            "./Images/Portrait.jpg",
            "./ImagesHumanIcon.png",
            "./Images/EmailIcon.png",
            "./Images/Education.png",
            "./Images/books.png"
        ];

        // the first image is at index 0, so we will start there
        let CurrentSlide = 0;

        //Create a function to display the selected image
        function DisplayImage(ImgLocation){
            //Setup a nickname/shortcut to access the HTML image element that is going to hold the slideshow 
            let ImgElement = document.getElementById("ImgSlide")

            //Set the img source for the slide show to the index of the image array that was passed into the function
            ImgElement.src = ArrayImages[ImgLocation]
        }

        //function to navigate to previous slide.
        function PreviousSlide(){
            //Navigate to the previous slide by subtracting 1 from the current slide counter
            CurrentSlide = CurrentSlide - 1;
            //equivalent to CurrentSlide--;

            //check to see if we have an index less than 0, if so, I want to loop around to the last image in the array
            if (CurrentSlide < 0){
            // if you want image to stay on first image, CurrentSlide = 0;

            //set the index to the length of the array mine 1, so if there are 4 images, we want an index of 3
            CurrentSlide = ArrayImages.length - 1;
            }

            //Call the function to swap out the image with whatever our index is
            DisplayImage(CurrentSlide);
        }

        //function to naigate to the next slide
        function NextSlide(){

            //Navigate to the next slide by adding 1 to current slide counter
            CurrentSlide = CurrentSlide + 1;
            //equivalent to CurrentSlide ++;

            //Check if the current slide index is now out of bounts- is it equal to the length of the array
            if(CurrentSlide == ArrayImages.length){
                
                //you could stay here - CurrentSlide = ArrayImages.length - 1:
                //to loop around chane index to 0
                CurrentSlide = 0;
            }
            DisplayImage(CurrentSlide);
        }

        //load the first image when the page loads
        DisplayImage(CurrentSlide);