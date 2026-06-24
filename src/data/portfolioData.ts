import type { Project, Experience, Achievement, Certificate, CompetitivePlatform, SkillCategory, Education } from '../types';

/* ═══════════════════════════════════════
   PERSONAL INFO
   ═══════════════════════════════════════ */
export const personalInfo = {
  name: 'Yashdeep',
  title: 'AI Engineer & Full Stack Developer',
  subtitle: 'Full Stack Developer passionate about Generative AI, scalable applications, and creating impactful user experiences.',
  email: 'yashdeep1720@gmail.com',
  phone: '+91-9813654227',
  location: 'Noida, India',
  linkedin: 'https://www.linkedin.com/in/yashdeep-sheoran/',
  github: 'https://github.com/Yashdeep1546',
  codechef: 'https://www.codechef.com/users/yashdeep1546',
  codeforces: 'https://codeforces.com/profile/yashdeep1546',
  leetcode: 'https://leetcode.com/yashdeep1546',
  resumeUrl: '/resume.pdf',
  summary: `Computer Science student with a strong foundation in Generative AI, LLM orchestration, and prompt engineering. Experienced in designing and testing structured prompts, system instructions, and few-shot examples using the Gemini API to build reliable AI agents. Skilled in Python, logical reasoning, and information synthesis with a demonstrated ability to break down complex problems into clear, actionable solutions. Passionate about emerging AI technologies and committed to delivering precise, high-quality outputs through rigorous experimentation and attention to detail.`,
};

/* ═══════════════════════════════════════
   EDUCATION
   ═══════════════════════════════════════ */
export const education: Education[] = [
  {
    institution: 'Jaypee Institute of Information Technology (JIIT)',
    degree: 'B.Tech',
    branch: 'Computer Science and Engineering',
    cgpa: '7.6 / 10.0',
    duration: 'Expected May 2027',
  },
];

/* ═══════════════════════════════════════
   SKILLS
   ═══════════════════════════════════════ */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: ['Python', 'C', 'C++', 'SQL', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'AI / Machine Learning',
    icon: '🤖',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'XGBoost', 'Scikit-learn', 'RAG', 'LLM Orchestration', 'Gemini API'],
  },
  {
    title: 'Data Science & Analytics',
    icon: '📊',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'Vector Databases', 'SQL'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS', 'Docker', 'Git', 'GitHub'],
  },
  {
    title: 'Web & Tools',
    icon: '🌐',
    skills: ['React', 'Streamlit', 'Vite', 'Node.js'],
  },
];

/* ═══════════════════════════════════════
   PROJECTS
   ═══════════════════════════════════════ */
export const projects: Project[] = [
  {
    id: 'neuraldesk',
    title: 'NeuralDesk — AI Support Engine',
    description: 'A Generative AI-powered conversational agent using Gemini 2.5 Flash, applying NLP techniques for semantic search and tool calling to answer questions from custom knowledge bases while preserving conversation context.',
    problem: 'Customer support teams struggle with scaling responses while maintaining quality and context-awareness across complex knowledge bases.',
    solution: 'Built an autonomous AI agent leveraging Gemini 2.5 Flash with RAG architecture, vector embeddings, and semantic search for intelligent, context-preserving customer support.',
    techStack: ['Gemini 2.5 Flash', 'RAG', 'Vector Embeddings', 'Semantic Search', 'Python', 'JavaScript', 'TypeScript', 'Vite', 'WebSocket', 'Convex'],
    features: [
      'Semantic search across custom knowledge bases',
      'Autonomous tool-calling capabilities',
      'Conversation context preservation',
      'Cross-origin widget distribution via IIFE loader',
      'PostMessage origin-validated handshake',
      'Full CSS/JS scope isolation',
      'WebSocket-first Convex backend',
      'Role-based prompting & few-shot examples',
    ],
    github: 'https://github.com/Yashdeep1546',
    duration: 'Aug 2025 – Jan 2026',
    role: 'Full Stack Developer & AI Engineer',
    category: ['AI', 'Full Stack', 'Web'],
    images: [
      '/assets/projects/neuraldesk/1.png',
      '/assets/projects/neuraldesk/ChatGPT Image Jun 24, 2026, 02_56_29 PM.png',
      '/assets/projects/neuraldesk/ChatGPT Image Jun 24, 2026, 02_56_33 PM.png',
      '/assets/projects/neuraldesk/ChatGPT Image Jun 24, 2026, 02_57_12 PM.png',
    ],
  },
  {
    id: 'fraudscanner',
    title: 'XGBoost FraudScanner',
    description: 'A machine learning model for credit card fraud detection using XGBoost, with scale_pos_weight tuning to classify a highly imbalanced dataset with only 0.17% fraudulent transactions.',
    problem: 'Credit card fraud costs billions annually, and traditional detection systems fail on highly imbalanced datasets where fraudulent transactions represent only 0.17% of all data.',
    solution: 'Developed an XGBoost-based ML model with specialized tuning for imbalanced data, achieving 91.8% fraud detection rate with interactive Streamlit dashboard.',
    techStack: ['Python', 'XGBoost', 'Streamlit', 'Pandas', 'Scikit-learn'],
    features: [
      '91.8% fraud detection rate',
      '0.84 F1-score',
      'Scale pos_weight tuning for imbalanced data',
      'Interactive real-time visualizations',
      'Manual transaction simulator',
      'Custom threshold control',
    ],
    github: 'https://github.com/Yashdeep1546',
    duration: 'Apr 2025 – Jul 2025',
    role: 'ML Engineer',
    category: ['AI', 'ML'],
    images: [],
  },
  {
    id: 'vision-classifiers',
    title: 'Deep Learning Vision Classifiers',
    description: 'Scalable image classification pipelines for the MNIST dataset, implementing multi-layer feedforward neural networks with ReLU and Softmax activations across both PyTorch and TensorFlow/Keras.',
    problem: 'Understanding and comparing deep learning frameworks for image classification tasks requires building equivalent pipelines across multiple frameworks.',
    solution: 'Engineered scalable classification pipelines in both PyTorch and TensorFlow/Keras, implementing identical architectures for fair framework comparison.',
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'Keras', 'NumPy'],
    features: [
      'Multi-layer feedforward neural networks',
      'ReLU and Softmax activations',
      'Cross-framework implementation (PyTorch & TensorFlow)',
      'MNIST dataset classification',
      'Scalable pipeline architecture',
    ],
    github: 'https://github.com/Yashdeep1546',
    duration: 'Jan 2025 – Mar 2025',
    role: 'ML Engineer',
    category: ['AI', 'ML'],
    images: [],
  },
  {
    id: 'quantum-trading',
    title: 'Quantum Trading Terminal',
    description: 'A professional-grade trading terminal with real-time market data visualization, advanced charting, and portfolio management capabilities.',
    problem: 'Retail traders lack access to professional-grade trading interfaces with real-time data and advanced analytics.',
    solution: 'Built a comprehensive trading terminal with live market data, technical analysis tools, and an intuitive modern interface.',
    techStack: ['React', 'TypeScript', 'WebSocket', 'Chart.js', 'TailwindCSS'],
    features: [
      'Real-time market data streaming',
      'Advanced technical charting',
      'Portfolio management dashboard',
      'Multi-asset support',
      'Professional-grade UI',
    ],
    github: 'https://github.com/Yashdeep1546',
    duration: '2025',
    role: 'Frontend Developer',
    category: ['Web', 'Full Stack'],
    images: [
      '/assets/projects/quantum/Screenshot 2026-06-24 151927.png',
      '/assets/projects/quantum/Screenshot 2026-06-24 152324.png',
      '/assets/projects/quantum/Screenshot 2026-06-24 152343.png',
    ],
  },
];

/* ═══════════════════════════════════════
   EXPERIENCE
   ═══════════════════════════════════════ */
export const experiences: Experience[] = [
  {
    id: 'sih',
    company: 'Smart India Hackathon',
    role: 'ML Developer',
    duration: '2025',
    description: 'Built Traffic & Route Optimization logic utilizing Machine Learning approaches for a national-level hackathon.',
    technologies: ['Python', 'Machine Learning', 'Optimization'],
    type: 'hackathon',
  },
  {
    id: 'innovation-hub',
    company: 'RIDE Hackathon',
    role: 'Innovation Hub Lead',
    duration: '2025',
    description: 'Managed event operations, team coordination, and social media outreach for 100+ participating teams during the RIDE Hackathon.',
    technologies: ['Leadership', 'Event Management', 'Team Coordination'],
    type: 'leadership',
  },
  {
    id: 'jp-morgan',
    company: 'JP Morgan Chase & Co.',
    role: 'Software Engineering Virtual Intern',
    duration: '2025',
    description: 'Completed the JP Morgan Chase Software Engineering Virtual Experience Program, working on financial data visualization and interface development.',
    technologies: ['Python', 'Data Visualization', 'Financial Analysis'],
    type: 'virtual',
  },
  {
    id: 'commonwealth-bank',
    company: 'Commonwealth Bank',
    role: 'Software Engineering Virtual Intern',
    duration: '2025',
    description: 'Completed the Commonwealth Bank Software Engineering Virtual Experience, focusing on cybersecurity and data analysis.',
    technologies: ['Cybersecurity', 'Data Analysis', 'Software Engineering'],
    type: 'virtual',
  },
];

/* ═══════════════════════════════════════
   ACHIEVEMENTS
   ═══════════════════════════════════════ */
export const achievements: Achievement[] = [
  {
    id: 'sih-achievement',
    title: 'Smart India Hackathon',
    description: 'Built Traffic & Route Optimization logic utilizing Machine Learning approaches at the national-level Smart India Hackathon.',
    year: '2025',
    organization: 'Government of India',
    icon: 'trophy',
  },
  {
    id: 'innovation-hub-lead',
    title: 'Innovation Hub Lead',
    description: 'Managed event operations, team coordination, and social media outreach for 100+ participating teams during the RIDE Hackathon.',
    year: '2025',
    organization: 'JIIT',
    icon: 'star',
  },

  {
    id: 'nptel-cloud',
    title: 'NPTEL Cloud Computing Certification',
    description: 'Earned NPTEL certification in Cloud Computing, demonstrating expertise in cloud architectures and services.',
    organization: 'NPTEL',
    icon: 'award',
  },
  {
    id: 'competitive-programming',
    title: 'Competitive Programming',
    description: 'CodeChef 3-Star (Max: 1656), Codeforces (Max: 1248), LeetCode (Max: 1554). Active competitive programmer across multiple platforms.',
    icon: 'code',
  },
];

/* ═══════════════════════════════════════
   CERTIFICATES
   ═══════════════════════════════════════ */
export const certificates: Certificate[] = [
  {
    id: 'jp-morgan-cert',
    title: 'Software Engineering Virtual Internship',
    organization: 'JP Morgan Chase & Co.',
    image: '/assets/icons/jp morgan(virual internship).png',
    verificationLink: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_6970de48fa9d5873cfc1e4df_1781787931818_completion_certificate.pdf',
  },
  {
    id: 'commonwealth-cert',
    title: 'Software Engineering Virtual Internship',
    organization: 'Commonwealth Bank',
    image: '/assets/icons/commonwealth bank(virtual internship).png',
    verificationLink: 'https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/xv8eSGu7nksKNiCQj_2sNmYuurxgpFYawco_6970de48fa9d5873cfc1e4df_1781807712148_completion_certificate.pdf',
  },

  {
    id: 'nptel-cloud-cert',
    title: 'Cloud Computing Certification',
    organization: 'NPTEL',
    image: '/assets/icons/nptel.png',
    verificationLink: 'https://storage.googleapis.com/2026-mar-halltickets/certificate-generation-apr26/final/regular/noc26-cs55/NOC26CS55S96260114504318239.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=archive-run%40nptel-exam.iam.gserviceaccount.com%2F20260624%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260624T121510Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=049fdf9d1290027a1fb5863217ff55431efc6318951e28b20a44d904fb5d18be88dc872aafede153fc81e20948fc974cbe2b6c4dca1d0a28cc6c883dcb01afee01e373156dea6d028070c8b64f6ef21662f1b312271087fd11593e74b5c4438bd83c7008e0ac441ba25e4c44d7b6bacf38ddb7f4631cf96e884f8f957c387b63bd86cc72b058c6eada7dd1a64097ec6ad20abfc397ecf3fb62529f52fe5f77f5a42457461b02ba02acc9075e72fcab252a134ebae741e4eedde511ee3144e685170756c6e4ca329e27423f4f3b0efb8193c2e575d0f404b9e13c0994e1d2ea9778a5a00a23418fed9c0495c6c692ac072afa77b02183674bf7d074e5c376988b'
  },
];

/* ═══════════════════════════════════════
   COMPETITIVE PROGRAMMING
   ═══════════════════════════════════════ */
export const competitivePlatforms: CompetitivePlatform[] = [
  {
    id: 'codechef',
    name: 'CodeChef',
    rating: '1656',
    maxRating: '1656',
    stars: '3★',
    icon: '/assets/icons/codechef.png',
    profileUrl: 'https://www.codechef.com/users/yashdeep1546',
    color: '#5B4638',
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    rating: '1248',
    maxRating: '1248',
    icon: '/assets/icons/codeforces.png',
    profileUrl: 'https://codeforces.com/profile/yashdeep1546',
    color: '#1F8ACB',
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    rating: '1554',
    maxRating: '1554',
    icon: '/assets/icons/leetcode.png',
    profileUrl: 'https://leetcode.com/yashdeep1546',
    color: '#FFA116',
  },
];

/* ═══════════════════════════════════════
   SOCIAL LINKS
   ═══════════════════════════════════════ */
export const socialLinks = [
  { name: 'GitHub', url: personalInfo.github, icon: '/assets/icons/github.png' },
  { name: 'LinkedIn', url: personalInfo.linkedin, icon: '/assets/icons/linkedind.png' },
  { name: 'CodeChef', url: personalInfo.codechef, icon: '/assets/icons/codechef.png' },
  { name: 'Codeforces', url: personalInfo.codeforces, icon: '/assets/icons/codeforces.png' },
  { name: 'LeetCode', url: personalInfo.leetcode, icon: '/assets/icons/leetcode.png' },
  { name: 'Email', url: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, icon: '/assets/icons/gmail.png' },
];

/* ═══════════════════════════════════════
   AVATAR IMAGES (for pseudo-3D effect)
   ═══════════════════════════════════════ */
export const avatarImages = {
  front: '/assets/avatar/front_cropped.png',
  frontStyled: '/assets/avatar/stylish front.png',
  left45: '/assets/avatar/left 45.png',
  leftSide: '/assets/avatar/left side 90.png',
  leftBack: '/assets/avatar/left back 45.png',
  right45: '/assets/avatar/right 45.png',
  rightSide: '/assets/avatar/right side(270).png',
  rightBack: '/assets/avatar/right back 45.png',
  back: '/assets/avatar/back(180).png',
  highAngle: '/assets/avatar/high angle 30.png',
  topView: '/assets/avatar/top view 45.png',
  lowAngle: '/assets/avatar/low angle 15.png',
  bottomAngle: '/assets/avatar/botoom 45.png',
  withIcons: '/assets/avatar/me with all icons floating.png',
  withGmail: '/assets/avatar/me with gmail.png',
  withLaptop: '/assets/avatar/me with laptop (2).png',
};

/* ═══════════════════════════════════════
   NAV ITEMS
   ═══════════════════════════════════════ */
export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

/* ═══════════════════════════════════════
   ALL PROJECT IMAGES (for marquee)
   ═══════════════════════════════════════ */
export const allProjectImages = projects.flatMap(p => p.images).filter(Boolean);
