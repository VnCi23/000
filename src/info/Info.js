import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import cer1 from "../img/cer1.png"
import cer2 from "../img/cer2.png"
import cer3 from "../img/cer3.png"
import cer4 from "../img/cer4.png"
import cer5 from "../img/cer5.png"
import cer7 from "../img/cer7.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.jpeg"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0, 110, 255)", "rgb(0, 32, 192)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multiple to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Vince Christian Gaurino",
    // lastName: "Gaurino",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "Aspiring Software-Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Based in the Philippines'
        },
        // {
        //     emoji: "💼",
        //     text: "Front-end Developer"
        // },
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
    bio: "I'm a web developer from the Philippines who enjoys creating user-friendly websites. I mainly focus on front-end development but also have experience with basic full-stack development using the MERN stack. I'm currently studying for a Bachelor of Science in Information Systems and I am always wanting to learn new technologies and improve my skills.",
    skills:
        {
            proficientWith: ['html5', 'CSS3', 'Javascript', 'ReactJS', 'TailwindCSS', 'Git & Github', 'VScode'],
            exposedTo: ['MongoDB', 'ReactJS', 'ExpressJS', 'NodeJS', 'ElectronJS', 'React Native', 'Figma', 'Firebase', 'Vercel', 'Python', 'Java', ],
        }
    ,
    hobbies: [
        {
            label: 'Sleeping',
            emoji: '💤'
        },
        {
            label: 'Programming',
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
            title: "Certificate : Responsive Web-Design",
            live: "https://www.freecodecamp.org/certification/vnci23/responsive-web-design",
            source: "https://www.freecodecamp.org/", 
            image: cer2
        },
        {
            title: "Certificate : Front-End Libraries",
            live: "https://www.freecodecamp.org/certification/vnci23/front-end-development-libraries",
            source: "https://www.freecodecamp.org/", 
            image: cer3
        },
        {
            title: "Certificate : JavaScript Data Structures and Algorithms",
            live: "https://www.freecodecamp.org/certification/vnci23/javascript-algorithms-and-data-structures",
            source: "https://www.freecodecamp.org/",
            image: cer1
        },
        {
            title: "Certificate : Introduction to Artificial Intelligence (AI)",
            live: "https://www.linkedin.com/learning/certificates/dfeae28f914f3eaca2b98ac3373117dcf5f8cb0efdce79b522e0665d4a78a5b4?trk=share_certificate",
            source: "https://www.linkedin.com/learning",
            image: cer4
        },
        {
            title: "Certificate : Ethics in the Age of Generative AI",
            live: "https://www.linkedin.com/learning/certificates/a7da33bc25b15543983bcad5f1129b326de8f12262d775d65a013310d63bcb7f?trk=share_certificate",
            source: "https://www.linkedin.com/learning",
            image: cer5
        },
        {
            title: "Assessment Passer : Describe security and compliance concepts",
            live: "https://learn.microsoft.com/en-us/users/vincechristiangaurino-6191/achievements/4lxvmezk",
            source: "https://learn.microsoft.com/en-us/",
            image: cer7
        },
        {
            title: "Full-stack College Grading System",
            live: "https://iscp-grading-system-wnvm.vercel.app/",
            source: "https://github.com/VnCi23/",
            image: mock7 
        },
        {
            title: "IS Professional Elective 3 - MExp2",
            live: "https://mexp2.vercel.app/",
            source: "https://github.com/VnCi23/",
            image: mock8
        },
        {
            title: "Front-end Ecommerce app",
            live: "https://000-store.vercel.app/",
            source: "https://github.com/VnCi23/",
            image: mock6 
        },
        {
            title: "Chat App",
            live: "https://vnci23.github.io/chat/", 
            source: "https://github.com/VnCi23/chat", 
            image: mock1
        },
        {
            title: "My Contact Link",
            live: "https://link-xi-three.vercel.app/",
            source: "https://github.com/VnCi23/",
            image: mock2 
        },
        {
            title: "Mini Music Streaming App",
            live: "https://vnci23.github.io/MiniMusicPlayer/",
            source: "https://github.com/VnCi23/",
            image: mock3
        },
        {
            title: "My Day Counter",
            live: "https://vnci.vercel.app/",
            source: "https://github.com/VnCi23/",
            image: mock5
        },
        {
            title: "Information System Quiz-App",
            live: "https://vnci23.github.io/Quiz-App/",
            source: "https://github.com/VnCi23/",
            image: mock4
        },
    ]
}