const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    // {
    //   name: "Testimonials",
    //   link: "#testimonials",
    // },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 2, suffix: "+", label: "Years of Hands on Experience" },
    { value: 2, suffix: "+", label: "Satisfied Clients" },
    { value: 3, suffix: "+", label: "Completed Projects" },
    { value: 100, suffix: "%", label: "Team Collaboration Index" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    // {
    //   name: "Project Manager",
    //   imgPath: "/images/logos/git.svg",
    // },
  ];
  
  const techStackIcons = [
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    // {
    //   name: "Project Manager",
    //   modelPath: "/models/git-svg-transformed.glb",
    //   scale: 0.05,
    //   rotation: [0, -Math.PI / 4, 0],
    // },
  ];
  
  const expCards = [
    {
      review: "Hospital Administration Platform",
      imgPath: "",
      logoPath: "/images/pythonlogo.png",
      title: "Python Developer",
      // date: "January 2023 - Present",
      responsibilities: [
        "Implemented secure user authentication (Flask-Login, session management) for admins, doctors, and patients.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Built RESTful APIs using Flask to manage patient, doctor, and appointment data.",
      ],
    },
    {
      review: "Claim Management System",
      imgPath: "",
      logoPath: "/images/pythonlogo.png",
      title: "Backend Developer",
      // date: "June 2020 - December 2023",
      responsibilities: [
        "Developed a web-based claims management application for insurance/claims operations.",
        "Implemented user authentication, role-based access, claim submission, tracking, and dashboard analytics.",
        "Used MySQL as the relational database to store users, claims, statuses, and audit logs.",
      ],
    },
    {
      review: "Clothing Store App",
      imgPath: "",
      logoPath: "/images/pythonlogo.png",
      title: "Fullstack Developer",
      // date: "March 2019 - May 2020",
      responsibilities: [
        "Developed a responsive front-end using HTML, CSS, and JavaScript for seamless UX",
        "Designed back-end RESTful APIs with Flask to manage product and user data.",
        "Managed MySQL database for dynamic content handling and scalability.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "",
      mentions: "",
      review:
        "",
      imgPath: "",
    },
    {
      name: "",
      mentions: "",
      review:
        "",
      imgPath: "",
    },
    {
      name: "",
      mentions: "",
      review:
        "",
      imgPath: "",
    },
    {
      name: "",
      mentions: "",
      review:
        "",
      imgPath: "",
    },
    {
      name: "",
      mentions: "",
      review:
        "",
      imgPath: "",
    },
    {
      name: "",
      mentions: "",
      review:
        "",
      imgPath: "",
    },
  ];
  
  const socialImgs = [
    {
      name: "linkedin",
      url:"https://www.linkedin.com/in/onkarsavaratkar/",
      imgPath: "/images/linkedin.png",
      
    },
    {
      name: "Git",
      url:"https://github.com/Onkar9818/",
      imgPath: "/images/git.png",
      
    },
    {
      name: "x",
      url:"https://x.com/onkar_21?s=11",
      imgPath: "/images/x.png",
      
    },
    {
      name: "insta",
      url:"https://www.instagram.com/fitwithonkar/",
      imgPath: "/images/insta.png",
      
    },
    
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };