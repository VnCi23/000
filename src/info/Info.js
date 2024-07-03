import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(1, 152, 104)", "rgb(6, 1, 144)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Vince Christian ",
    lastName: "Gaurino",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "Aspiring Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Based in the Philippines'
        },
        {
            emoji: "💼",
            text: "Front-end Developer"
        },
        {
            emoji: "📧",
            text: "vincegaurino@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/VnCi23",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vnci23/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://vnci23.github.io/link/",
            icon: 'fa fa-globe',
            label: 'globe'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hi! I’m a web dev enthusiast from the Philippines. I love making cool and user-friendly websites. Always learning new stuff to keep my sites top-notch.Right now, I’m diving into the MERN stack. Can’t wait to be a MERN expert!",
    skills:
        {
            proficientWith: ['html5', 'css3', 'javascript', 'react', 'git', 'github', 'tailwindCSS'],
            exposedTo: ['MernStack', 'python', 'Java', 'figma']
        }
    ,
    hobbies: [
        {
            label: 'Sleeping',
            emoji: '💤'
        },
        {
            label: 'Programing',
            emoji: '👨‍💻'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "chat app",
            live: "https://vnci23.github.io/chat/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/VnCi23/chat", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "link",
            live: "https://vnci23.github.io/link/",
            source: "https://github.com/VnCi23/link",
            image: mock2 
        },
        {
            title: "MiniMusicPlayer",
            live: "https://vnci23.github.io/MiniMusicPlayer/",
            source: "https://github.com/VnCi23/MiniMusicPlayer",
            image: mock3
        },
        {
            title: "Quiz-App",
            live: "https://vnci23.github.io/Quiz-App/",
            source: "https://github.com/VnCi23/Quiz-App",
            image: mock4
        },
        {
            title: "CountMyDay app",
            live: "https://vinceeeeeeeeeee.netlify.app/",
            source: "https://github.com/VnCi23/CountMyDay",
            image: mock5
        }
    ]
}