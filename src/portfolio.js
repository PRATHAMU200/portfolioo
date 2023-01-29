/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "prathamu200",
  title: "Hi all, I'm Pratham Upadhyay",
  subTitle: emoji(
    "A Engineering Student from Delhi 🚀 having an interest in Cybersecurity DataScience Programming and WebDevelopment."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hFkVQI42etvxgTMiRkf_Nid1ij8FVcgp/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/prathamu200",
  linkedin: "https://www.linkedin.com/in/pratham-upadhyay-6b04411a0/",
  gmail: "mahtarp2004@gmail.com",
  twitter: "https://www.twitter.com/@prathamu200",
  instagram: "https://instagram.com/upadhyay_pratham",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Tech DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Can find vulnerabilites in your website and help you in resolving them"),
    emoji(
      "⚡ Can help you in buiding softwares for Machine Learning and datascience in python."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "cybersecurity",
      fontAwesomeClassname: "fab fa-hackerrank"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "ai",
      fontAwesomeClassname: "fab fa-ai"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Delhi Technological University",
      logo: require("./assets/images/DTULogo.png"),
      subHeader: "Bachelors of Technology in Electrical Engineering [EE]",
      duration: "2022 - 2026",
      desc: "Right now stuying in 1st year.",
      descBullets: [
        "I am a member of IEEE Technical Society of DTU",
        "I am a Meber in Assets a financial Society of DTU"
      ]
    },
    {
      schoolName: "Indian Institue Of Technology, Madras",
      logo: require("./assets/images/iitmLogo.png"),
      subHeader: "Bachelors of Science in Programming & Data Science",
      duration: "2022 - Currently Studying",
      desc: "I have completed My First Term and my score till this Term is 8.5 CGPA",
      descBullets: [
        "I have been a part of Kanha Group and organised digital gaming contest",
        "I have also Score 7th rank in codechef contest in python organised by codechef"
      ]
    },
    {
      schoolName: "Hans Raj Smarak Sr. Sec. School",
      logo: require("./assets/images/school.png"),
      subHeader: "Senior Secondary [12th]",
      duration: "2020 - 2021",
      desc: "Scored 93% , I was having Science with Maths and CS as Subjects.",
      descBullets: ["Scored 99 in maths out of 100, and stand in Top 3 in the School"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cybersecurity",
      progressPercentage: "80%"
    },
    {
      Stack: "WebDevelopment",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "BugHunting",
      company: "Hackerone",
      companylogo: require("./assets/images/hackerone.png"),
      date: "June 2020 – Present",
      desc: "I have helped many companies by finding vulnerabilities in their Websites and reporting them.",
      descBullets: [
        ""
      ]
    },
    {
      role: "Front-End Developer",
      company: "DTU Society",
      companylogo: require("./assets/images/free.png"),
      date: "May 2017 – May 2018",
      desc: "Have helped in building website for my collage society"
    },
    {
      role: "Researcher and Analyser Intern",
      company: "The Cyber Agents",
      companylogo: require("./assets/images/TCALogo.jpeg"),
      date: "Dec 2020 – Mar 2021",
      desc: "I have worked in Research and Analysing Team"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "This is a Blogging Website with login Enabled",
  projects: [
    {
      image: require("./assets/images/mercykknight.jpeg"),
      projectName: "MercyKKnight",
      projectDesc: "This is a website made using HTML,CSS,Bootstrap as frontend and Firebase as Backend",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://mercykknight.github.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/brahmastra.png"),
      projectName: "BrahmastraSquad",
      projectDesc: "This is a project for connecting people having interest in pentesting, hacking and cybersecurity.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://brahmastrasquad.github.io/"
        }
      ]
    },
    {
      image: require("./assets/images/github.png"),
      projectName: "FakeProfile",
      projectDesc: "This is a website to generate Fake Profile. I have used some opensource AI to generate data and showed on this website.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://prathamu200.github.io/fakeprofile/"
        }
      ]
    },
    {
      projectName: "DTU Profile",
      projectDesc: "You can search for DTU Profile Here",
      footerLink: [
        {
          name: "Search For DTU Profile",
          url: "https://1e2b2ff4-c34e-461e-8f17-b882a1eec604.id.repl.co/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Keylogger in Python",
      projectDesc: "I have made a simple Keylogger using python",
      footerLink: [
        {
          name: "Visit Site",
          url: "https://prathamu200.github.io/fakeprofile/"
        }
      ]
    },
    {
      projectName: "student_chat_portal",
      projectDesc: "This is a Student Chat Application made using Python and Mysql as database.",
      footerLink: [
        {
          name: "Visit Site",
          url: "https://prathamu200.github.io/fakeprofile/"
        }
      ]
    },
    {
      projectName: "Face-Recognition Attendance Application",
      projectDesc: "I have made an application in python which uses face-recognition library to compare the faces and find the person.",
      footerLink: [
      ]
    },
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Codechef contest in Python By IITM",
      subtitle:
        "I have secured 7th rank in Codechef contest in Python out of 600 students.",
      image: require("./assets/images/codechef.jpg"),
      imageAlt: "COdechef-IITM",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1G-JL9X8a5gU25glcjPReESvOcZw3CkmU/view?usp=sharing"
        }
      ]
    },
    {
      title: "ICSI Certified Network Security Specialist(CNSS)",
      subtitle:
        "I have succesfully completed this Networking Course.",
      image: require("./assets/images/icsi.jpeg"),
      imageAlt: "ICSI logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.icsi.co.uk/certificates/kvrou0ggr7"
        }
      ]
    },

    {
      title: "Python Test",
      subtitle: "Completed Certifcation from HackerRank",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {name: "Certification", url: "https://www.hackerrank.com/certificates/007710ee70ed"},
      ]
    },
    {
      title: "The Cyber Agents Intership",
      subtitle: "Completed Intership Certifcation from The Cyber Agents in Cybersecurity",
      image: require("./assets/images/TCALogo.jpeg"),
      imageAlt: "TCA Logo",
      footerLink: [
        {name: "Certification", url: "https://verify.givemycertificate.com/verify/2008004111000095"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://prathamupadhyay.blogspot.com/",
      title: "Blog For Some Popular Books To read for free.",
      description:
        "You can read these freely available books."
    },
    {
      url: "https://mercykknight.blogspot.com/",
      title: "Wanna Know about Mariana Web",
      description:
        "Just read as fiction don't take it seriously."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9205106825",
  email_address: "mahtarp2004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "mercykknight", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
