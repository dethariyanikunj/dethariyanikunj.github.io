export const profile = {
  name: "Nikunj Dethariya",
  greeting: "Hello, I am Nikunj Dethariya.",
  title: "Senior Mobile App Developer",
  roles: [
    "Senior Flutter Developer (5+ Yrs)",
    "Native Android Engineer (5+ Yrs)",
    "Cross-Platform Mobile Engineer",
    "Mobile Tech Lead",
  ],
  email: "dethariyanikunj@gmail.com",
  phone: "+91 9033-670774",
  location: "Rajkot, Gujarat, India",
  resumeUrl: "./Nikunj-Dethariya-Resume.pdf",
  photo: "./img/avatar.png",
  linkedin: "https://linkedin.com/in/nikunj-dethariya-15392b136",
  github: "https://github.com/dethariyanikunj",
  intro:
    "Senior Mobile Engineer with 10+ years in mobile engineering, including 5+ years hands-on Flutter (Android, iOS, and Web) and 5 years Native Android (Java/Kotlin), delivering 20+ production apps across fintech, healthcare, edtech, real estate, travel, and social domains.",
  about: [
    "Deep expertise in Clean Architecture, BLoC/Cubit state management, white-label multi-brand platforms, CI/CD automation, and Flutter performance optimization.",
    "Leverages AI-powered tooling (ChatGPT, Claude, Gemini, Antigravity) to accelerate development velocity across code generation, refactoring, and automated testing.",
    "Proven record leading distributed teams and delivering enterprise-grade solutions for clients including Comviva (Tech Mahindra).",
  ],
  services: [
    {
      title: "Flutter & Cross-Platform Apps",
      description:
        "High-performance Flutter apps for iOS, Android, and Web with 90%+ modular code reuse and rapid delivery.",
    },
    {
      title: "Native Android Engineering",
      description:
        "5 years expert Java/Kotlin native development, background processing, security/encryption layers, and performance tuning.",
    },
    {
      title: "Architecture & State Management",
      description:
        "Clean Architecture, MVVM, MVC, SOLID principles, BLoC/Cubit, Provider, and GetX for scalable apps.",
    },
    {
      title: "CI/CD & DevOps Automation",
      description:
        "Automated build pipelines using Azure DevOps, GitHub Actions, Jenkins, Shorebird OTA, build flavors, and App Store / Play Store releases.",
    },
  ],
  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Production Apps", value: "20+" },
    { label: "Flutter Years", value: "5+" },
    { label: "White-Label Brands", value: "30+" },
  ],
};

export type SkillItem = {
  name: string;
  iconSrc?: string;
  iconKey?: string;
  href?: string;
};

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

export const technicalSkills: SkillCategory[] = [
  {
    title: "Languages & Mobile Frameworks",
    skills: [
      { name: "Flutter", iconSrc: "https://skillicons.dev/icons?i=flutter", href: "https://flutter.dev/" },
      { name: "Dart", iconSrc: "https://skillicons.dev/icons?i=dart", href: "https://dart.dev/" },
      { name: "Native Android SDK", iconSrc: "https://skillicons.dev/icons?i=androidstudio", href: "https://developer.android.com/" },
      { name: "Kotlin", iconSrc: "https://skillicons.dev/icons?i=kotlin", href: "https://kotlinlang.org/" },
      { name: "Java", iconSrc: "https://skillicons.dev/icons?i=java", href: "https://www.java.com/" },
      { name: "iOS via Flutter", iconSrc: "https://skillicons.dev/icons?i=apple", href: "https://developer.apple.com/xcode/" },
      { name: "Responsive Design", iconKey: "responsive", href: "#" },
      { name: "Localization (i18n)", iconKey: "i18n", href: "#" },
    ],
  },
  {
    title: "Architecture & State Management",
    skills: [
      { name: "Clean Architecture", iconKey: "architecture", href: "#" },
      { name: "BLoC / Cubit", iconKey: "bloc", href: "https://bloclibrary.dev/" },
      { name: "Provider", iconSrc: "https://skillicons.dev/icons?i=dart", href: "https://pub.dev/packages/provider" },
      { name: "GetX", iconSrc: "https://skillicons.dev/icons?i=dart", href: "https://pub.dev/packages/get" },
      { name: "MVVM / MVC", iconKey: "mvvm", href: "#" },
      { name: "SOLID Principles", iconKey: "solid", href: "#" },
    ],
  },
  {
    title: "CI/CD, DevOps & Cloud",
    skills: [
      { name: "Azure DevOps", iconSrc: "https://skillicons.dev/icons?i=azure", href: "https://azure.microsoft.com/en-us/products/devops/" },
      { name: "GitHub Actions", iconSrc: "https://skillicons.dev/icons?i=githubactions", href: "https://github.com/features/actions" },
      { name: "Jenkins", iconSrc: "https://skillicons.dev/icons?i=jenkins", href: "https://www.jenkins.io/" },
      { name: "Shorebird OTA", iconKey: "shorebird", href: "https://shorebird.dev/" },
      { name: "Build Flavors", iconKey: "flavors", href: "#" },
      { name: "Play Store & App Store Publishing", iconKey: "publishing", href: "#" },
      { name: "Firebase (Auth, Firestore, FCM, Crashlytics)", iconSrc: "https://skillicons.dev/icons?i=firebase", href: "https://firebase.google.com/" },
      { name: "REST APIs & Socket.io", iconKey: "socket", href: "#" },
    ],
  },
  {
    title: "Payments, SDKs & Libraries",
    skills: [
      { name: "Stripe", iconKey: "stripe", href: "https://stripe.com/" },
      { name: "Razorpay", iconKey: "razorpay", href: "https://razorpay.com/" },
      { name: "Paytm", iconKey: "paytm", href: "https://paytm.com/" },
      { name: "RevenueCat (In-App Subscriptions)", iconKey: "revenuecat", href: "https://www.revenuecat.com/" },
      { name: "Twilio & Linphone VoIP", iconKey: "voip", href: "#" },
      { name: "OneSignal & Mixpanel", iconKey: "onesignal", href: "#" },
      { name: "FlutterFlow & Flutter Flame", iconKey: "flutterflow", href: "#" },
      { name: "Mason / Bricks", iconKey: "mason", href: "#" },
    ],
  },
  {
    title: "Performance, Testing & Quality",
    skills: [
      { name: "Android Profiler & Dart DevTools", iconKey: "devtools", href: "#" },
      { name: "Unit & Widget Testing", iconKey: "testing", href: "#" },
      { name: "Integration Testing & Firebase Test Lab", iconSrc: "https://skillicons.dev/icons?i=firebase", href: "#" },
      { name: "SonarQube & Checkmarx", iconKey: "sonarqube", href: "https://www.sonarsource.com/" },
      { name: "Git, GitHub, GitLab, Bitbucket", iconSrc: "https://skillicons.dev/icons?i=git", href: "#" },
    ],
  },
  {
    title: "Tools & AI-Assisted Development",
    skills: [
      { name: "Android Studio & Xcode", iconSrc: "https://skillicons.dev/icons?i=androidstudio", href: "#" },
      { name: "VS Code", iconSrc: "https://skillicons.dev/icons?i=vscode", href: "#" },
      { name: "Figma", iconSrc: "https://skillicons.dev/icons?i=figma", href: "#" },
      { name: "Jira, ClickUp, Trello", iconKey: "jira", href: "#" },
      { name: "ChatGPT, Claude, Gemini, Antigravity", iconSrc: "https://skillicons.dev/icons?i=bots", href: "#" },
    ],
  },
];

export const experience = [
  {
    period: "Jul 2025 – May 2026",
    company: "Digi App Labs",
    location: "Canada (Remote)",
    role: "Flutter Developer",
    lines: [
      "Architected and maintained white-label Flutter framework supporting 30+ brands from a single codebase using build flavors and modular plugin architecture — 90%+ module reuse, per-brand delivery reduced from 6 weeks to under 1 week.",
      "Built and released cross-platform apps for Android and iOS with shared business logic, responsive layouts and multi-language localization — cutting QA cycles by approx. 50% vs native dual-stack.",
      "Managed CI/CD pipelines in Azure DevOps for fully automated Android and iOS release builds with zero manual intervention.",
    ],
    link: "",
  },
  {
    period: "Jan 2017 – Jul 2025",
    company: "Wings Tech Solutions",
    location: "Rajkot, India",
    role: "Senior Software Engineer",
    lines: [
      "Architected and shipped 10+ production Flutter and Native Android apps across fintech, edtech, real-estate, and travel domains over 8-year tenure.",
      "Owned the complete mobile delivery lifecycle across 8-year tenure: requirements, system design, development, QA, store release, and post-launch analytics.",
      "Integrated 10+ third-party SDKs — Firebase, Stripe, Razorpay, RevenueCat, Twilio, OneSignal, Socket.io, Mixpanel.",
      "Optimized app performance using Android Profiler and Dart DevTools — reduced average cold-start time by 35% and maintained crash rate below 0.5% across flagship apps.",
      "Mentored 5+ junior developers; 4 promoted to mid-level within 18 months through structured code reviews and architecture pairing sessions.",
    ],
    link: "",
  },
  {
    period: "Jun 2015 – Nov 2016",
    company: "Travizia Infosec",
    location: "Ahmedabad, India",
    role: "Android App Developer",
    lines: [
      "Built 3 Native Android surveillance apps with real-time video monitoring and remote control using Java.",
      "Owned the full build-to-publish pipeline: architecture, development, testing, and Google Play Store deployment.",
    ],
    link: "",
  },
];

export const awards = [
  {
    title: "Ace Card Award",
    issuer: "Comviva (Tech Mahindra)",
    year: "2021",
    description: "Outstanding project delivery on tier-1 enterprise mobile banking application.",
  },
  {
    title: "Performer of the Quarter",
    issuer: "Wings Tech Solutions",
    year: "Q4 2018",
    description: "Top performer across the entire engineering organization.",
  },
];

export const education = [
  {
    period: "2011 – 2015",
    school: "Gujarat Technological University",
    degree: "Bachelor of Engineering — Computer Engineering",
    description: "Graduated with CGPA: 8.13 / 10.",
  },
];

export type StoreLink = {
  platform: "android" | "ios";
  label?: string;
  url: string;
};

export type Project = {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  stack: string[];
  role: string;
  gradient: string;
  iconSymbol: string;
  image?: string; // Single hero screenshot path
  images?: string[]; // Multiple app screenshot paths e.g. ["./img/portfolio/app1.png", "./img/portfolio/app2.png"]
  storeLinks?: StoreLink[];
  tags: string[];
};

export const projectCategories = [
  "Featured Mobile Apps",
  "Flutter Cross-Platform",
  "Native Android & Enterprise",
] as const;

export const projects: Project[] = [
  {
    title: "MakeMyMembership",
    subtitle: "Loyalty & Offers Platform",
    category: "Featured Mobile Apps",
    description:
      "Cross-platform loyalty app with QR-based deal redemption, real-time notifications, personalised membership tiers, and vendor browsing across hotels, restaurants, spas, and entertainment venues.",
    role: "Sole Developer",
    stack: ["Flutter", "Firebase", "Razorpay", "REST APIs", "GetX"],
    tags: ["Flutter", "Razorpay", "Loyalty", "QR Deals", "GetX"],
    gradient: "from-indigo-600/30 via-purple-600/20 to-slate-900",
    iconSymbol: "💳",
    images: [
      "./img/portfolio/mmm_1.webp",
      "./img/portfolio/mmm_2.webp",
      "./img/portfolio/mmm_3.webp"
    ],
    storeLinks: [
      { platform: "android", label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.makemymembership.app" },
      { platform: "ios", label: "App Store", url: "https://apps.apple.com/in/app/makemymembership/id6743520328" },
    ],
  },
  {
    title: "Saarthi Pedagogy",
    subtitle: "EdTech Dual-App Suite (20K+ Installs)",
    category: "Featured Mobile Apps",
    description:
      "Dual-app EdTech suite with 20K+ installs. Student app features digital textbooks, interactive quizzes, and AI-evaluated homework. Teacher app includes AI-generated assignments, automated grading, and performance analytics.",
    role: "Lead Mobile Developer",
    stack: ["Flutter", "Firebase", "AI/ML APIs", "REST", "GetX"],
    tags: ["Flutter", "AI / ML", "EdTech", "20K+ Installs", "GetX"],
    gradient: "from-blue-600/30 via-cyan-600/20 to-slate-900",
    iconSymbol: "📚",
    images: [
      "./img/portfolio/saarthi_1.webp",
      "./img/portfolio/saarthi_2.webp",
      "./img/portfolio/saarthi_3.webp"
    ],
    storeLinks: [
      { platform: "android", label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.saarthipedagogy.teachersv2" },
    ],
  },
  {
    title: "Brooon",
    subtitle: "Real-Estate Broker Marketplace",
    category: "Flutter Cross-Platform",
    description:
      "Property marketplace for real estate brokers featuring automatic property-to-inquiry matching, buy/sell/lease listings with buyer profile management and location-based interactive search.",
    role: "Flutter Developer",
    stack: ["Flutter", "Google Maps API", "Firebase", "Provider"],
    tags: ["Flutter", "Google Maps API", "Real-Estate", "Provider"],
    gradient: "from-emerald-600/30 via-teal-600/20 to-slate-900",
    iconSymbol: "🏠",
    images: [
      "./img/portfolio/brooon_1.webp",
      "./img/portfolio/brooon_2.webp",
      "./img/portfolio/brooon_3.webp"
    ],
    storeLinks: [
      { platform: "android", label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.brooon.app" },
      { platform: "ios", label: "App Store", url: "https://apps.apple.com/us/app/brooon/id6462989329" },
    ],
  },
  {
    title: "Profi",
    subtitle: "Financial Project Management",
    category: "Flutter Cross-Platform",
    description:
      "Milestone tracker for Admins, BDMs, and PMs: dynamic status workflow (pending/paid/unpaid), event-history audit log, and push notification reminders built on Firebase Auth + Firestore.",
    role: "Sole Developer",
    stack: ["Flutter", "Firebase Firestore", "BLoC / Cubit", "Firebase Auth"],
    tags: ["Flutter", "BLoC / Cubit", "FinTech", "Enterprise"],
    gradient: "from-violet-600/30 via-indigo-600/20 to-slate-900",
    iconSymbol: "📊",
    image: "", // Set screenshot image path here
  },
  {
    title: "My Bank",
    subtitle: "Tier-1 Enterprise Mobile Banking",
    category: "Native Android & Enterprise",
    description:
      "Tier-1 enterprise banking app delivering account overview, FD/RD management, fund transfer, cardless cash withdrawal, cheque book requests, e-statements, card controls, loans, and wallet.",
    role: "Senior Mobile Tech Lead",
    stack: ["Native Android (Java/Kotlin)", "REST APIs", "Security/Encryption", "MVVM"],
    tags: ["Native Android", "Java/Kotlin", "Banking", "MVVM", "Enterprise"],
    gradient: "from-amber-600/30 via-orange-600/20 to-slate-900",
    iconSymbol: "🏦",
    images: [
      "./img/portfolio/my_bank_1.webp",
      "./img/portfolio/my_bank_2.webp",
      "./img/portfolio/my_bank_3.webp"
    ],
    storeLinks: [{ platform: "android", label: "Play Store", url: "https://play.google.com/store/apps/developer?id=Comviva" }],
  },
  {
    title: "Flamingo Transworld",
    subtitle: "Global Travel Assistance Platform",
    category: "Native Android & Enterprise",
    description:
      "A–Z travel assistance app for one of India's largest tour operators — destination discovery, itinerary planning, global route booking, Socket.io real-time updates, and Linphone VoIP.",
    role: "Android Developer",
    stack: ["Native Android (Java)", "Socket.io", "Linphone VoIP", "Firebase"],
    tags: ["Native Android", "Socket.io", "Linphone VoIP", "Travel"],
    gradient: "from-cyan-600/30 via-blue-600/20 to-slate-900",
    iconSymbol: "✈️",
    images: [
      "./img/portfolio/flamingo_1.webp",
      "./img/portfolio/flamingo_2.webp",
      "./img/portfolio/flamingo_3.webp"
    ],
    storeLinks: [{ platform: "android", label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.flamingotravels.app" }],
  },
];

export type Testimonial = {
  name: string;
  company: string;
  quote: string;
  image?: string;
};

export const testimonials: Testimonial[] = [];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
