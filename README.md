
# Assignment-1

here, I will show you the requirement of an **assignment 1!**

## specifications 

> using mongoose and express

 - users collection -->schema [ firstName ,lastName, userName,  email , password , age , gander , phone ,posts] 
 - posts collection -->schema [ title , content , userID => must be related to the user collection ] 


## Modules

> User APIs :

 1. sign up ( email must be unique ) 
 2. sign in
 3. update user
 4. delete user
 5. search for user where his name starts with "X" and age less than Y=>   (X, Y => variables)
 6. search for user where his age is between X and Y
 7. get all user 
 8. get user profile with user posts(using populate)


> Post  APIs : 
 1. add post (make sure that user already exists)
 2. delete post (post creator only )
 3. update post (post owner only)
 4. get all posts
 5. get all posts with their owners information (using populate)
 6. sort posts descending (By date)

 
## Additional requirement

 - deploy on vercel
