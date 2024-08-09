import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import cer1 from "../img/cer1.png"
import cer2 from "../img/cer2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["#0093fa", "rgb(6, 1, 144)"];
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
            link: "https://link-xi-three.vercel.app/",
            icon: 'fa fa-globe',
            label: 'globe'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I'm a web developer from the Philippines with a passion for creating user-friendly websites. I focus on front-end development, but I also have experience with basic full-stack development using the MERN stack. Currently, I'm a college student pursuing a Bachelor of Science in Information Systems, and I'm always eager to learn new technologies and best practices to improve my skills and collaborate with others.",
    skills:
        {
            proficientWith: ['html5', 'css3', 'javascript', 'react', 'tailwindCSS', '', 'git & github', 'vscode'],
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
            title: "Responsive Web Design",
            live: "https://www.freecodecamp.org/certification/fcc165ce4db-ae48-45f9-ada7-b85d6852a35b/responsive-web-design",
            source: "https://www.freecodecamp.org/", 
            image: cer2
        },
        {
            title: "JavaScript DSA",
            live: "https://www.freecodecamp.org/certification/fcc165ce4db-ae48-45f9-ada7-b85d6852a35b/javascript-algorithms-and-data-structures",
            source: "https://www.freecodecamp.org/",
            image: cer1
        },
        {
            title: "chat app",
            live: "https://vnci23.github.io/chat/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/VnCi23/chat", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Contact link",
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
            title: "CountMyDay",
            live: "https://vinceeeeeeeeeee.netlify.app/",
            source: "https://github.com/VnCi23/CountMyDay",
            image: mock5
        },
    ]
}