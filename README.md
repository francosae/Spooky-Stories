
![Capture](https://user-images.githubusercontent.com/69439997/197389334-e2ce2095-05e8-41e3-9341-271d613bd0dc.PNG)

## Inspiration
My inspiration was the r/nosleep subreddit where people share scary stories. I wanted to create a platform where people could share scary (spooky) stories in the spirit of Halloween. 

## What it does
My project is a web app where users can post and share stories, comment on each other's stories and interact with the post (liking and unliking). I also have a follow/follower feature for users. 

## How we built it
I built this using React with Vite.js. I also used TailwindCSS along with DaisyUI, HyperUI, and Flowbite which are TailwindCSS component libraries. For the backend, I used Node.js and Express with PostgreSQL and Prisma, a Node.js ORM. I deployed the backend via Heroku and the frontend via Netlify. 

## Challenges we ran into
I had some issues with CSS when it came to creating the Profile page and components due to some style properties on some of the components. Since I created them independently and had them off in separate .jsx files, I hadn't realized they had some conflicting CSS properties but I was able to fix it after debugging. I also ran into some issues with Twilio, I had hoped to use Twilio SendGrid for their Email messaging API but they restricted my account and sent me an email requiring some extensive verification that I was going to use their API for a hackathon so I wasn't able to implement it how I had hoped. 

## Accomplishments that we're proud of
I'm proud of how the styling on some of the components turned out, along with some of the functionality on the backend that took a while to do. Thankfully with Prisma, I was able to finish those features quickly without too much trouble. 

## What we learned
I refined some of my CSS and Frontend skills. I learned how to use React Hooks more efficiently and create my own Hooks. 

## What's next for Spooky Stories
I would like to incorporate some sort of notification system with Twilio, where you get an email when someone interacts with your post, whether it is a comment or a like. 

## Deployed at https://classy-twilight-07b30d.netlify.app/
