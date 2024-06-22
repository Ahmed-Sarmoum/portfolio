const settings = {
  isSplash: true,
};

// Seo related settings
const seo = {
  title: "Ahmed SARMOUM",
  description:
    "My goal is to work on end products that develop sustainable and scalable social and technology systems to make an impact.",
  og: {
    title: "Ahmed SARMOUM Portfolio",
    type: "website",
    url: "https://ahmedsarmoum.com/",
  },
};

//Home Page
const greeting = {
  title: "Hi there, I'm ",
  logo_name: "Ahmed Sarmoum",
  nickname: "Ahmed SARMOUM",
  subTitle:
    "My goal is to work on end products that develop sustainable and scalable social and technology systems to make an impact.",
  resumeLink: "",
  portfolio_repository: "",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Ahmed-Sarmoum",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmed-sarmoum-87a633205/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sarmoumahmed@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ahmed_sarmoum",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/Sarmuom.Sidahmed/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        // "⚡ Knowledge of Data Science & AI",
        "⚡ Building resposive website front end using React-Redux Vue-Vuetify",
        "⚡ Developing Desktop applications using Java, JavaFX, Javascript ElectronJs ",
        "⚡ Developing mobile applications using Java, Kotlin, React Native ",
        "⚡ Creating application backend in Node Adonisjs, Express , PHP- Laravel, Spring",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        //  },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Translate data into valuable and comprehensible insights, my goal is to improve result, make the right decisions and save costs",
        "⚡ Accelerate time to value with visual data science tools.",
        "⚡ Get more value from your data with prediction models and machine learning technique, ",
        "⚡ Implement machine learning models in real world production systems using REST APIs",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on hostgator or OVH cloud etc",
        "⚡ Deploying machine learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    //  {
    //    title: "UI/UX Design",
    //    fileName: "DesignImg",
    //    skills: [
    //      "⚡ Designing highly attractive user interface for mobile and web applications",
    //      "⚡ Customizing logo designs and building logos from scratch",
    //      "⚡ Creating the flow of application functionalities to optimize user experience",
    //    ],
    //    softwareSkills: [
    //      {
    //        skillName: "Adobe XD",
    //        fontAwesomeClassname: "simple-icons:adobexd",
    //        style: {
    //          color: "#FF2BC2",
    //        },
    //      },
    //      {
    //        skillName: "Figma",
    //        fontAwesomeClassname: "simple-icons:figma",
    //        style: {
    //          color: "#F24E1E",
    //        },
    //      },
    //      {
    //        skillName: "Adobe Illustrator",
    //        fontAwesomeClassname: "simple-icons:adobeillustrator",
    //        style: {
    //          color: "#FF7C00",
    //        },
    //      },
    //      {
    //        skillName: "Inkscape",
    //        fontAwesomeClassname: "simple-icons:inkscape",
    //        style: {
    //          color: "#000000",
    //        },
    //      },
    //    ],
    //  },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.coursera.org/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Algerian University of Mathematics and Computer Science",
      subtitle: "Master degree in Software Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like OOP, Algorithms, DBMS, OS, Nitworking, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Feature Engineering",
      subtitle: "- Ryan Holbrook",
      logo_path: "feature_engineering",
      certificate_link:
        "https://www.kaggle.com/learn/certification/ahmedsarmoum/feature-engineering",
      alt_name: "Kaggle",
      color_code: "#1F70C199",
    },
    {
      title: "Python",
      subtitle: "- Colin Morris",
      logo_path: "python",
      certificate_link:
        "https://www.kaggle.com/learn/certification/ahmedsarmoum/python",
      alt_name: "Kaggle",
      color_code: "#8C151599",
    },
    {
      title: "Intro to Machine Learning",
      subtitle: "- Dan Becker",
      logo_path: "intro_ml",
      certificate_link:
        "https://www.kaggle.com/learn/certification/ahmedsarmoum/intro-to-machine-learning",
      alt_name: "Kaggle",
      color_code: "#7CB34299",
    },
    {
      title: "Intermediate Machine Learning",
      subtitle: "- Alexis Cook",
      logo_path: "intermid_ml",
      certificate_link:
        "https://www.kaggle.com/learn/certification/ahmedsarmoum/intermediate-machine-learning",
      alt_name: "Kaggle",
      color_code: "#0C9D5899",
    },
    {
      title: "Pandas",
      subtitle: "- Aleksey Bilogur",
      logo_path: "pandas",
      certificate_link:
        "https://www.kaggle.com/learn/certification/ahmedsarmoum/pandas",
      alt_name: "kaggle",
      color_code: "#FF80AB",
    },
    {
      title: "Data Visualization",
      subtitle: "- Alexis Cook",
      logo_path: "data_visualisation",
      certificate_link:
        "https://www.kaggle.com/learn/certification/ahmedsarmoum/data-visualization",
      alt_name: "Kaggle",
      color_code: "#D83B0199",
    },
    {
      title: "Intro to SQL",
      subtitle: "- Rachael Tatman & Alexis Cook",
      logo_path: "intro_sql",
      certificate_link:
        "https://www.kaggle.com/learn/certification/ahmedsarmoum/intro-to-sql",
      alt_name: "Kaggle",
      color_code: "#5C6BC099",
    },
    {
      title: "Advanced SQL",
      subtitle: "- Alexis Cook",
      logo_path: "advanced_sql",
      certificate_link:
        "https://www.kaggle.com/learn/certification/ahmedsarmoum/advanced-sql",
      alt_name: "Kaggle",
      color_code: "#00000099",
    },

    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I've worked with a startup company as a web, desktop, and Android developer and software engineer. I have a great passion in the field of artificial intelligence, machine learning and deep learning, The goal is to simplify people's lives and make the machine at the service of humanity",
  header_image_path: "experience.svg",
  experiences: [
    {
      id: 1,
      title: "My Portfolio",
      company: "Ahmed SARMOUM",
      company_url: "https://www.ahmedsarmoum.com/",
      logo_path: "logo192.png",
      duration: "Jun 2021 - August 2021",
      location: "Khemis Miliana, Ain Defla",
      description: "Portfolio for show some skills 😁😁😁😁😁",
      color: "#0879bf",
    },
    {
      id: 2,
      title: " Medical laboratory (Desktop Software)",
      company: "Voisinage PC",
      company_url: "https://www.voisinagepc.com/",
      logo_path: "legato_logo.png",
      duration: "February 2021 - PRESENT",
      location: "Khemis Miliana, Ain Defla",
      description: "Medical laboratory management software",
      color: "#0879bf",
    },
    {
      id: 3,
      title: "Medical Website",
      company: "Mesanalyses",
      company_url: "https://www.mesanalyses.net/annuaire/",
      logo_path: "muffito_logo.png",
      duration: "March 2020 - July 2020",
      location: "Khemis Miliana, Ain Defla",
      description:
        "Directory of medical analysis laboratories in Algeria,\n" +
        "Information about how to contact the medical laboratories,\n" +
        "Extracting medical test results from the Internet,\n" +
        "A point of contact between doctors and investors",
      color: "#C0CA33",
    },
    {
      id: 4,
      title: "Android Application",
      company: "Mesanalyses",
      company_url:
        "https://play.google.com/store/apps/details?id=dz.mesanalyses.mesanalyses",
      logo_path: "freecopy_logo.png",
      duration: "August 2020 - October 2020",
      location: "Khemis Miliana, Ain Defla",
      description: `Android application is a comprehensive directory of medical analysis laboratories this app to provide you with the best service for locating and downloading online analysis results and the most reliable information about analytical laboratories`,
      color: "#8E24AA",
    },
    {
      id: 5,
      title: "tejarati DZ (Android Application)",
      company: "Ahmed SARMOUM",
      company_url:
        "https://play.google.com/store/apps/details?id=dz.sarmoumahmed.havente",
      logo_path: "logo_tejarati.png",
      duration: "January 2020 - June 2020",
      location: "Theniet el had, Tissemsilt",
      description: `Buying and Selling Department, 
            Managing internal and external debt, 
            Notice to the user that the product is out of stock, 
            Statistics of all sales and expenses on a daily and monthly basis, 
            Helping the user to know the value of zakat`,
      color: "#2196F3",
    },
    {
      id: 6,
      title: "Dynamic website",
      company: "VIP Mesanalyses",
      company_url: "http://vpc.mesanalyses.dz/vip/accueil",
      logo_path: "dynamic_website.png",
      duration: "July 2020 - January 2021",
      location: "Khemis Miliana, Ain Defla",
      description: `A website for medical laboratories, where the laboratory can fully control the website through an integrated control panel`,
      color: "#00897B",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, JAVA, React, Vue, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Aphorism",
    subtitle:
      "It is Important to make the powerful decisions which can make impact on the life of not just you, but the people around you too. Because we are always one decision away from the completely different life",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Theniet El Had, located 173 km southwest of Algiers and located approximately 48 km from the capital of the wilaya of Tissemsilt.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+213 659 283 997",
    subtitle2: "+213 540 249 929",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
