# Orion Meet Web 🥶

## Contributors
 - Kevin Osei      https://github.com/knosei
 - Hansen Koduah   https://github.com/hanskod
 - Kelvin Lamptey  https://github.com/CeoBlunt
 - Max Otuteye     https://github.com/maxotuteye

⚡   Next js & Tailwind Css

<br>

official website for Orion Meet # orionmeet.vercel.app

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


### Production ✨

Reviewed and tested stable app version
 https://orionmeet.vercel.app/

### Testing 💫

Staging area for new features
https://orion-meet-testing.herokuapp.com/

<br><br>


## Web App Indexing

"NoSSR was used for components which did not require SSR"

### _app.js

### about.js                  -   https://orionmeet.vercel.app/about
  - Header.jsx
  - About.jsx
  
 ### events.js
  - EventHeader.jsx
  - EventForm1.jsx
  - EventForm2.jsx
  - EventForm3.jsx
  - EventForm4.jsx
  - Completion.jsx
  - Welcome.jsx
  - Doodle.jsx
  - index.js
  - Hero.jsx
  - Header.jsx
  
  
 ### login.js                  -  https://orionmeet.vercel.app/login
  - Loginpage.jsx
  - Header.jsx
  
 ### organiserprofile.js      -  https://orionmeet.vercel.app/organiserprofile
  - Profile.jsx
    
 ### redirect.js
  - Header.jsx
    
 ### signup.js                -  https://orionmeet.vercel.app/signup
   - Signuppage.jsx
   - Header.jsx
   
 ### support.js               -  https://orionmeet.vercel.app/support
   - Header.jsx
   - Form.jsx
   - Accordion.jsx
   
 ### team.js                  -  https://orionmeet.vercel.app/team
   - Header.jsx
   - Team.jsx 
  
 ### verifymail.js
   - Header.jsx
   - Continue.jsx
   
   
 ## Web App Walk Through
   
   <br>
   
      -User is presented the Home Page upon arrival
     
     
      -User can access About, Support and Contact pages
     
      -User Visits the support page to utilise the contact form or accesses the FAQs 
      -User visits the about page to discover Orion Meet Organisation 
      -User visits the team page to discover Orion Meet body 
      
      -User cannot access Events and Organiser Profile Pages until signed up as an organiser
      -User is directed to redirect page if tries to access Events and Organiser Profile Pages
      
   
    -User Signs Up as an organiser 
  
    -User is directed to verify E-mail page & redirected to Login Page 
    -User must verify E-Mail in order to log in
   
   
    -User signs in as an organiser 
    -User is directed to Home Page 
    -User can now access events and Organiser profile pages
   
   
    -User visits event page to create events 
   
   
    -User visits organiser profile to view events created 


    -User can Logout 
