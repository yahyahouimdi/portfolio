const publicAsset = (path: string) => `/portfolio${path}`;

export const navbar = [
  "about",
  "education",
  "skills",
  "projects",
  "associative-work",
  "certifications",
  "contact",
];

export const site = {
  title: "Yahya Houimdi | AI Research and Computer Vision",
  description:
    "Portfolio of Yahya Houimdi, an AI researcher and computer engineering student specializing in computer vision and machine learning.",
};

export const sectionContent = {
  profile: {
    intro:
      "AI researcher and computer engineering student focused on computer vision, machine learning, and intelligent systems.",
    viewWorkLabel: "View my projects",
  },
  about: {
    heading: "AI research with real-world impact",
    strengthsHeading: "Research interests",
  },
  skills: {
    heading: "Technical skills",
  },
  education: {
    heading: "Education",
  },
  projects: {
    heading: "Selected AI projects",
    categoriesAriaLabel: "Portfolio categories",
  },
  associativeWork: {
    heading: "Associative work and leadership",
  },
  certifications: {
    heading: "Certifications",
  },
  contact: {
    heading: "Contact me",
    text: "I am open to research collaborations, AI engineering opportunities, and projects involving intelligent systems.",
  },
};

export const profile = {
  name: "Yahya Houimdi",
  pic: publicAsset("/images/profile.png"),
  title: "AI Researcher | Computer Vision | Machine Learning Engineering",
  email: "yahya.houimdi@etudiant-enit.utm.tn",
  phone: "+216 58 625 730",
  location: "Sousse, Tunisia",
  social: {
    linkedin: "https://www.linkedin.com/in/yahya-houimdi-163492338/",
    github: "https://github.com/yahyahouimdi",
  },
};

export const about = {
  descriptions: [
    `<strong>I am a final-year Computer Engineering student at ENIT pursuing a double-degree Master's in Information System Techniques with the University of Tunis El Manar and TU Braunschweig.</strong> My work focuses on AI and machine learning, with research experience in computer vision, vision-language models, remote sensing image captioning, and intelligent systems.`,
    `I enjoy reproducing research baselines, designing deep-learning experiments, evaluating models, and building AI systems that connect strong research ideas with practical applications.`,
  ],
  majors: {
    "AI Research":
      "Researching computer vision, vision-language models, remote sensing image captioning, deep learning, and intelligent systems.",
    "Computer Vision":
      "Building systems for image understanding, object detection, tracking, video analysis, and remote sensing imagery.",
    "Machine Learning Engineering":
      "Designing reproducible training pipelines, feature-processing strategies, model evaluation workflows, and production-oriented inference systems.",
    "Applied AI Systems":
      "Developing real-time, event-driven AI systems with agentic reasoning, Apache Kafka, APIs, and distributed architectures.",
  },
};

export const skills: Record<string, string[]> = {
  "AI and Machine Learning": [
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Large Language Models",
    "Agentic AI",
    "Retrieval-Augmented Generation",
  ],
  "AI Frameworks and Libraries": [
    "PyTorch",
    "TensorFlow",
    "Transformers",
    "scikit-learn",
    "OpenCV",
    "YOLO",
  ],
  "Programming and Data": [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "PostgreSQL",
  ],
  "Backend and Systems": [
    "FastAPI",
    "RESTful APIs",
    "Apache Kafka",
    "Docker",
    "Linux",
    "Git",
  ],
  "Software Engineering": [
    "Java",
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
    "Spring Boot",
    "React",
    "Angular",
    "Flutter",
  ],
};

export const certifications = [
  {
    name: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    image: publicAsset("/images/certifications/ai_azure_associate/ai_azure_associate-1.png"),
    pdf: publicAsset("/certificates/ai_azure_associate.pdf"),
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    image: publicAsset("/images/certifications/google_ai_essentials/google_ai_essentials-1.png"),
    pdf: publicAsset("/certificates/google_ai_essentials.pdf"),
  },
  {
    name: "Introduction to AI",
    issuer: "Online Certification",
    image: publicAsset("/images/certifications/introduction_to_ai/introduction_to_ai-1.png"),
    pdf: publicAsset("/certificates/introduction_to_ai.pdf"),
  },
  {
    name: "Discover the Art of Prompting",
    issuer: "Online Certification",
    image: publicAsset("/images/certifications/Discover_the_Art_of_Prompting/Discover_the_Art_of_Prompting-1.png"),
    pdf: publicAsset("/certificates/Discover_the_Art_of_Prompting.pdf"),
  },
  {
    name: "Maximize Productivity with AI",
    issuer: "Online Certification",
    image: publicAsset("/images/certifications/maximize_productivity/maximize_productivity-1.png"),
    pdf: publicAsset("/certificates/maximize_productivity.pdf"),
  },
  {
    name: "Stay Ahead of AI Curves",
    issuer: "Online Certification",
    image: publicAsset("/images/certifications/stay_ahead_ai_curves/stay_ahead_ai_curves-1.png"),
    pdf: publicAsset("/certificates/stay_ahead_ai_curves.pdf"),
  },
  {
    name: "Use AI Responsibly",
    issuer: "Online Certification",
    image: publicAsset("/images/certifications/use_ai_responsably/use_ai_responsably-1.png"),
    pdf: publicAsset("/certificates/use_ai_responsably.pdf"),
  },
];

export const education = [
  {
    name: "Engineering Degree in Computer Science",
    duration: "2024 - Present",
    college:
      "National Engineering School of Tunis (ENIT) - Double-degree Master's Degree in Information System Techniques with University of Tunis El Manar and TU Braunschweig",
  },
  {
    name: "Preparatory Studies in Mathematics and Physics",
    duration: "2022 - 2024",
    college: "Preparatory Institute for Engineering Studies of Monastir (IPEIM)",
  },
  {
    name: "Baccalaureate in Mathematics",
    duration: "2022",
    college: "Honors: Good",
  },
];

type ProjectItem = {
  name: string;
  pic: string;
  link: string;
  description: string;
  tags: string[];
};

type BlogItem = {
  name: string;
  pic: string;
  link: string;
};

type WorkCategory =
  | { view: "list"; items: ProjectItem[] }
  | { view: "grid"; items: BlogItem[] };

export const work: Record<string, WorkCategory> = {
  projects: {
    view: "list",
    items: [
      {
        name: "Remote Sensing Image Captioning",
        pic: publicAsset("/images/projects/RSIC.jpeg"),
        link: "https://github.com/yahyahouimdi/RSIC_remote_sensing_image_captioning",
        description:
          "Transformer-based vision-language research for generating natural-language descriptions of satellite imagery. Reproduced the TSFE baseline, re-engineered the visual encoder with SwinV2-Base, designed a six-layer Transformer decoder, and achieved a 136.7% CIDEr improvement.",
        tags: ["Computer Vision", "Vision-Language Models", "SwinV2", "Transformers", "Image Captioning"],
      },
      {
        name: "Patient Monitoring with Agentic AI",
        pic: publicAsset("/images/projects/kafka%20project.jpeg"),
        link: "https://github.com/yahyahouimdi/patient-monitoring-kafka-agents",
        description:
          "Event-driven intelligent monitoring architecture combining real-time rule-based detection with reasoning-capable AI agents. The system unifies patient, wearable, and smart-home information into a common decision pipeline.",
        tags: ["Agentic AI", "Event-Driven Systems", "LLMs", "Apache Kafka", "Distributed AI"],
      },
      {
        name: "Tunisian Real Estate Price Prediction",
        pic: publicAsset("/images/projects/Price%20Prediction.jpeg"),
        link: "https://github.com/yahyahouimdi/Tunisian-real-estate-price-prediction-model",
        description:
          "End-to-end machine-learning pipeline for modeling Tunisian property prices. Built a market dataset, performed exploratory analysis and feature engineering, compared predictive approaches, and investigated geographic and property-level price drivers.",
        tags: ["Machine Learning", "Regression", "Feature Engineering", "Data Analysis"],
      },
      {
        name: "AI Football Analysis System",
        pic: publicAsset("/images/projects/football%20analysis.jpeg"),
        link: "https://github.com/yahyahouimdi/AI-Football-Analysis-System-",
        description:
          "Computer-vision pipeline for extracting structured information from football footage using YOLO and OpenCV. Explores player and ball detection, multi-frame tracking, occlusion, small-object detection, camera movement, and perspective changes.",
        tags: ["Python", "YOLO", "OpenCV", "Object Tracking"],
      },
      {
        name: "Sightector - Online Harassment Detection",
        pic: publicAsset("/images/projects/sightector.jpeg"),
        link: "https://github.com/yahyahouimdi/sightector",
        description:
          "NLP-based system for detecting harassment and harmful textual content in online environments. Built an end-to-end text-classification pipeline and deployed real-time inference through a Chrome extension.",
        tags: ["Python", "NLP", "Classification", "Social Impact"],
      }
    ],
  },
  "associative-work": {
    view: "list",
    items: [
      {
        name: "IEEE ENIT SIGHT Group",
        pic: publicAsset("/images/associative-work/IEEE_SIGHT.png"),
        link: "https://github.com/yahyahouimdi",
        description:
          "President and Chair from 2025 to 2026. Led the group to Best SIGHT Group of the Year globally and first place at the SDC Congress, while directing four or more technology-driven humanitarian initiatives and developing external partnerships.",
        tags: ["Leadership", "Humanitarian Technology", "IEEE", "Partnerships"],
      },
      {
        name: "INJAZ - Posidonia",
        pic: publicAsset("/images/associative-work/posidonia.png"),
        link: "https://github.com/yahyahouimdi",
        description:
          "CEO and project lead from 2025 to 2026. Led a 25-member team transforming Posidonia oceanica waste into environmentally responsible insulation materials, from research and formulation to functional prototyping.",
        tags: ["Sustainability", "Project Leadership", "Research", "Prototyping"],
      },
      {
        name: "Humanitarian Technology Initiatives",
        pic: publicAsset("/images/associative-work/IEEE_SIGHT.png"),
        link: "https://github.com/yahyahouimdi",
        description:
          "Directed technology-driven humanitarian initiatives including Sightector, RemindMeBox, CatchWise, and Give for Good through IEEE ENIT SIGHT.",
        tags: ["Social Impact", "AI Projects", "Team Coordination"],
      }
    ],
  },
};
