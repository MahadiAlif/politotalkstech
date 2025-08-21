// PolitoTalksTech Enhanced Application JavaScript

// Application data with full content from the provided JSON
const siteData = {
  siteInfo: {
    name: "PolitoTalksTech",
    description: "A vibrant student tech community at Politecnico di Torino",
    contact: {
      email: "contact@politotalkstech.edu",
      social: {
        github: "https://github.com/politotalkstech",
        linkedin: "https://linkedin.com/company/politotalkstech",
        twitter: "https://twitter.com/politotalkstech",
        discord: "https://discord.gg/politotalkstech"
      }
    }
  },
  categories: {
    projects: {
      name: "Projects",
      icon: "🚀",
      color: "#FF6B35",
      bgColor: "#FFF4F0"
    },
    research: {
      name: "Research", 
      icon: "🔬",
      color: "#10B981",
      bgColor: "#F0FDF4"
    },
    clubs: {
      name: "Clubs",
      icon: "🏛️", 
      color: "#8B5CF6",
      bgColor: "#FAF5FF"
    },
    alumni: {
      name: "Alumni Stories",
      icon: "🎓",
      color: "#3B82F6",
      bgColor: "#EFF6FF"
    }
  },
  recentPosts: [
    {
      id: "1",
      title: "Machine Learning Applications in Smart City Infrastructure",
      excerpt: "Exploring how ML algorithms can optimize traffic flow and energy consumption in urban environments.",
      date: "2025-08-15",
      author: "Marco Rossi",
      category: "research",
      tags: ["Machine Learning", "Smart Cities", "Urban Planning", "IoT"],
      abstract: "This research investigates the application of machine learning algorithms in optimizing smart city infrastructure, with particular focus on traffic management and energy distribution systems.",
      researchType: "Master's Thesis",
      advisor: "Prof. Elena Baralis",
      content: "Smart cities represent the future of urban development, leveraging technology to improve quality of life, efficiency, and sustainability. This research focuses on two critical aspects of smart city infrastructure: traffic management and energy optimization. Our approach combines real-time IoT sensor data with machine learning algorithms to create adaptive systems that respond to changing urban conditions.\n\nThe methodology involves deploying a network of sensors throughout the city to collect real-time data on traffic patterns, energy consumption, and environmental factors. Machine learning models are then trained on this data to predict optimal traffic signal timing and energy distribution patterns.\n\nResults show a 25% improvement in traffic flow efficiency and 18% reduction in overall energy consumption across test areas. The system demonstrates the potential for significant improvements in urban infrastructure through intelligent automation."
    },
    {
      id: "2", 
      title: "AR Campus Navigation: From Prototype to Production",
      excerpt: "How we built and deployed an augmented reality navigation system for Politecnico's campus.",
      date: "2025-08-12",
      author: "Sofia Chen",
      category: "projects",
      tags: ["Augmented Reality", "Mobile Development", "React Native", "Computer Vision"],
      technologies: ["React Native", "ARCore", "Node.js", "MongoDB"],
      github: "https://github.com/politotalkstech/ar-navigation",
      demo: "https://ar-campus.politotalkstech.com",
      content: "Our AR Campus Navigation System revolutionizes how students explore and navigate the Politecnico campus. Using cutting-edge augmented reality technology, the app overlays digital information onto the real world, making it easier than ever to find classrooms, labs, and facilities.\n\nThe development process involved extensive research into indoor positioning systems, AR frameworks, and user experience design. We implemented a hybrid approach using Bluetooth beacons and WiFi triangulation for precise location tracking, combined with ARCore for seamless augmented reality experiences.\n\nKey features include real-time indoor positioning, AR waypoints, room finder functionality, and accessibility routes for students with disabilities. The app has been downloaded over 3,000 times and maintains a 4.8-star rating on app stores."
    },
    {
      id: "3",
      title: "From Student to Tech Lead: My Journey at Microsoft",
      excerpt: "Five years after graduating from Polito, reflections on growth, challenges, and lessons learned.",
      date: "2025-08-10",
      author: "Alessandro Romano",
      category: "alumni",
      tags: ["Career Growth", "Microsoft", "Leadership", "Software Development"],
      graduate: "Computer Engineering, 2020",
      currentRole: "Senior Software Engineer & Tech Lead at Microsoft",
      content: "Five years ago, I walked across the stage at Politecnico di Torino with my Computer Engineering degree, uncertain about what the future held. Today, as I write this from my office in Redmond, I can say with confidence that the journey has been incredible, challenging, and far more rewarding than I ever imagined.\n\nMy path to Microsoft wasn't linear. After graduation, I spent two years at a startup in Milan, learning the fundamentals of software architecture and team collaboration. The experience taught me that technical skills alone aren't enough – communication, empathy, and leadership are equally important.\n\nJoining Microsoft in 2022 was a dream come true, but also intimidating. The scale and complexity of the systems I now work on dwarf anything I encountered during university. However, the solid foundation I received at Polito – particularly in algorithms, system design, and problem-solving – proved invaluable.\n\nAs a Tech Lead, I now mentor junior developers, make architectural decisions, and coordinate between multiple teams. The leadership skills I developed through PolitoTalksTech activities have been crucial in this role."
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "AR Campus Navigation System",
      excerpt: "Augmented reality app helping students navigate Polito campus with real-time indoor positioning.",
      date: "2025-08-12",
      author: "Sofia Chen & Team Alpha",
      category: "projects",
      tags: ["Augmented Reality", "Mobile Development", "React Native", "Computer Vision"],
      technologies: ["React Native", "ARCore", "Node.js", "MongoDB", "Firebase"],
      github: "https://github.com/politotalkstech/ar-navigation",
      demo: "https://ar-campus.politotalkstech.com",
      description: "An innovative mobile application that uses augmented reality to help students navigate the complex Politecnico campus. Features include real-time indoor positioning, AR waypoints, room finder, and accessibility routes.",
      featured: true,
      content: "Our AR Campus Navigation System revolutionizes how students explore and navigate the Politecnico campus. Using cutting-edge augmented reality technology, the app overlays digital information onto the real world, making it easier than ever to find classrooms, labs, and facilities. The system includes real-time indoor positioning using Bluetooth beacons and WiFi triangulation for precise location tracking."
    },
    {
      id: "proj2",
      title: "Sustainable Energy Monitoring Platform",
      excerpt: "IoT-based system for tracking and optimizing energy consumption across university buildings.",
      date: "2025-08-05",
      author: "GreenTech Collective",
      category: "projects", 
      tags: ["IoT", "Sustainability", "Data Analytics", "Python", "Raspberry Pi"],
      technologies: ["Python", "Raspberry Pi", "InfluxDB", "Grafana", "Arduino", "LoRaWAN"],
      github: "https://github.com/politotalkstech/energy-monitor",
      description: "A comprehensive IoT platform that monitors energy consumption patterns across campus buildings, providing real-time analytics and optimization recommendations to reduce carbon footprint.",
      featured: true,
      content: "Our Sustainable Energy Monitoring Platform addresses the critical need for energy efficiency in university buildings. Using a network of IoT sensors and smart meters, we collect real-time data on electricity, heating, and cooling consumption across multiple campus facilities."
    },
    {
      id: "proj3",
      title: "Blockchain Student Voting System",
      excerpt: "Secure, transparent digital voting platform for student elections using Ethereum blockchain.",
      date: "2025-07-28",
      author: "CryptoDevs United",
      category: "projects",
      tags: ["Blockchain", "Ethereum", "Smart Contracts", "Web3", "Democracy"],
      technologies: ["Solidity", "React", "Web3.js", "IPFS", "Truffle"],
      github: "https://github.com/politotalkstech/blockchain-voting",
      description: "A decentralized voting system that ensures transparency, security, and immutability for student elections while maintaining voter privacy through cryptographic techniques.",
      content: "Traditional student elections often face challenges with transparency, security, and voter trust. Our Blockchain Student Voting System addresses these issues by leveraging Ethereum smart contracts to create an immutable, transparent, and secure voting platform."
    },
    {
      id: "proj4",
      title: "AI-Powered Study Buddy Chatbot",
      excerpt: "Intelligent chatbot that helps students with course materials, study planning, and Q&A.",
      date: "2025-07-20",
      author: "AI Study Group",
      category: "projects",
      tags: ["Artificial Intelligence", "NLP", "Chatbot", "Education", "Python"],
      technologies: ["Python", "OpenAI GPT", "FastAPI", "React", "PostgreSQL"],
      github: "https://github.com/politotalkstech/study-buddy",
      demo: "https://studybuddy.politotalkstech.com",
      description: "An AI-powered chatbot that provides personalized study assistance, answers course-related questions, and helps students organize their learning schedule.",
      content: "The AI-Powered Study Buddy Chatbot leverages natural language processing to provide intelligent academic support to students. It can answer questions about course materials, suggest study plans, and provide explanations for complex topics."
    }
  ],
  research: [
    {
      id: "research1", 
      title: "Machine Learning Applications in Smart City Infrastructure",
      excerpt: "Exploring how ML algorithms can optimize traffic flow and energy consumption in urban environments.",
      date: "2025-08-15",
      author: "Marco Rossi",
      category: "research",
      tags: ["Machine Learning", "Smart Cities", "Urban Planning", "IoT", "Optimization"],
      abstract: "This research investigates the application of machine learning algorithms in optimizing smart city infrastructure, with particular focus on traffic management and energy distribution systems. We propose a novel approach using reinforcement learning for adaptive traffic signal control and deep neural networks for predictive energy load balancing.",
      researchType: "Master's Thesis",
      advisor: "Prof. Elena Baralis",
      department: "Computer and Control Engineering",
      featured: true,
      content: "Smart cities represent the future of urban development, leveraging technology to improve quality of life, efficiency, and sustainability. This research focuses on two critical aspects of smart city infrastructure: traffic management and energy optimization. Our approach combines real-time IoT sensor data with machine learning algorithms to create adaptive systems that respond to changing urban conditions."
    },
    {
      id: "research2",
      title: "Cybersecurity in Industrial IoT: Threat Detection and Prevention",
      excerpt: "Analysis of security vulnerabilities in IIoT systems and development of ML-based intrusion detection.",
      date: "2025-08-08",
      author: "Laura Bianchi",
      category: "research", 
      tags: ["Cybersecurity", "Industrial IoT", "Intrusion Detection", "Machine Learning", "Network Security"],
      abstract: "Industrial Internet of Things (IIoT) systems face unique security challenges due to their scale, heterogeneity, and critical nature. This research presents a comprehensive analysis of threat vectors in IIoT environments and proposes a machine learning-based intrusion detection system specifically designed for industrial networks.",
      researchType: "PhD Research",
      advisor: "Prof. Antonio Lioy",
      department: "Control and Computer Engineering",
      featured: true,
      content: "The Industrial Internet of Things (IIoT) has revolutionized manufacturing and industrial processes, but it has also introduced new attack vectors and security challenges. Our research addresses the critical need for robust cybersecurity measures in industrial environments where system availability and integrity are paramount."
    },
    {
      id: "research3",
      title: "Sustainable Materials in Aerospace Engineering: A Comprehensive Review",
      excerpt: "Literature review on bio-based composites and recycling strategies for next-generation aircraft.",
      date: "2025-07-25",
      author: "Giovanni Ferrari",
      category: "research",
      tags: ["Aerospace", "Sustainability", "Materials Science", "Composites", "Environmental Engineering"],
      abstract: "As the aerospace industry seeks to reduce its environmental impact, sustainable materials have become a critical research area. This comprehensive literature review examines current developments in bio-based composites, recycling methodologies, and life-cycle assessment of aerospace materials.",
      researchType: "Literature Review",
      advisor: "Prof. Davide Salvetti", 
      department: "Mechanical and Aerospace Engineering",
      content: "The aerospace industry is under increasing pressure to reduce its environmental footprint while maintaining the highest safety and performance standards. This literature review synthesizes current research on sustainable materials for aerospace applications, examining both opportunities and challenges in adopting environmentally friendly alternatives to traditional aerospace materials."
    },
    {
      id: "research4",
      title: "Quantum Computing Applications in Cryptography and Security",
      excerpt: "Investigating post-quantum cryptographic algorithms and their implementation challenges.",
      date: "2025-07-15", 
      author: "Francesca Martini",
      category: "research",
      tags: ["Quantum Computing", "Cryptography", "Security", "Algorithms", "Post-Quantum"],
      abstract: "With the advent of quantum computing, traditional cryptographic systems face existential threats. This research explores post-quantum cryptographic algorithms, their mathematical foundations, implementation challenges, and transition strategies for current security infrastructures.",
      researchType: "PhD Dissertation",
      advisor: "Prof. Claudio Schifanella",
      department: "Computer Science",
      content: "Quantum computing promises to revolutionize computational capabilities, but it also poses significant threats to current cryptographic systems. Our research focuses on developing and analyzing cryptographic algorithms that can withstand attacks from both classical and quantum computers."
    }
  ],
  clubs: [
    {
      id: "club1",
      title: "AI & Machine Learning Society",
      description: "Weekly meetups focusing on cutting-edge AI research, practical ML projects, and industry connections with hands-on workshops and guest lectures.",
      members: 127,
      meetingTime: "Thursdays 6:00 PM",
      location: "Room 3A, DAUIN Building",
      contact: "ai-ml@studenti.polito.it",
      tags: ["AI", "Machine Learning", "Research", "Networking"],
      featured: true,
      activities: ["Weekly coding sessions", "Guest speaker series", "Kaggle competitions", "Research paper discussions"]
    },
    {
      id: "club2",
      title: "Cybersecurity & Ethical Hacking Collective", 
      description: "Hands-on cybersecurity training, CTF competitions, and workshops on ethical hacking, digital forensics, and network security.",
      members: 89,
      meetingTime: "Tuesdays 7:00 PM", 
      location: "Security Lab, DIST Building",
      contact: "cybersec@studenti.polito.it",
      tags: ["Cybersecurity", "Ethical Hacking", "CTF", "Network Security"],
      featured: true,
      activities: ["Capture The Flag competitions", "Penetration testing workshops", "Security audit projects", "Industry partnerships"]
    },
    {
      id: "club3",
      title: "Web Development & Design Collective",
      description: "Learning modern web technologies through collaborative projects, code reviews, and mentorship programs for all skill levels.",
      members: 156,
      meetingTime: "Mondays 5:30 PM",
      location: "Digital Innovation Hub, Cittadella",
      contact: "webdev@studenti.polito.it",
      tags: ["Web Development", "UI/UX", "Frontend", "Backend"],
      activities: ["Project showcases", "Tech talks", "Mentorship programs", "Hackathons"]
    },
    {
      id: "club4",
      title: "Data Science & Analytics Hub",
      description: "Exploring big data, statistical analysis, and visualization techniques with real-world datasets and industry collaboration projects.",
      members: 98,
      meetingTime: "Wednesdays 6:30 PM",
      location: "Analytics Lab, Management Building",
      contact: "datascience@studenti.polito.it",
      tags: ["Data Science", "Analytics", "Statistics", "Visualization"],
      activities: ["Data visualization challenges", "Statistical modeling workshops", "Industry project partnerships", "Research collaborations"]
    },
    {
      id: "club5",
      title: "Robotics & Automation Society",
      description: "Building autonomous robots, participating in competitions, and exploring the intersection of mechanical engineering and computer science.",
      members: 74,
      meetingTime: "Fridays 4:00 PM",
      location: "Robotics Lab, Mechanical Engineering",
      contact: "robotics@studenti.polito.it",
      tags: ["Robotics", "Automation", "Mechanical Engineering", "Computer Science"],
      activities: ["Robot building competitions", "Autonomous vehicle projects", "Industry visits", "Technical workshops"]
    }
  ],
  alumni: [
    {
      id: "alumni1",
      title: "From Student to Tech Lead: My Journey at Microsoft",
      excerpt: "Five years after graduating from Polito, reflections on growth, challenges, and lessons learned in the tech industry.",
      date: "2025-08-10",
      author: "Alessandro Romano",
      category: "alumni",
      tags: ["Career Growth", "Microsoft", "Leadership", "Software Development"],
      graduate: "Computer Engineering, 2020",
      currentRole: "Senior Software Engineer & Tech Lead at Microsoft",
      featured: true,
      content: "Five years ago, I walked across the stage at Politecnico di Torino with my Computer Engineering degree, uncertain about what the future held. Today, as I write this from my office in Redmond, I can say with confidence that the journey has been incredible, challenging, and far more rewarding than I ever imagined."
    },
    {
      id: "alumni2",
      title: "Building Europe's Next Fintech Unicorn: A Startup Journey",
      excerpt: "From university project to €50M funding round - the wild ride of creating a successful fintech startup.",
      date: "2025-07-28",
      author: "Giulia Conti",
      category: "alumni",
      tags: ["Entrepreneurship", "Fintech", "Startup", "Venture Capital"],
      graduate: "Management Engineering, 2019",
      currentRole: "CEO & Co-founder at PayFlow Solutions",
      content: "When my co-founder and I started working on our university capstone project in 2019, we had no idea it would eventually become one of Europe's fastest-growing fintech startups. Three years later, after raising €50M in Series B funding, I want to share our journey and the lessons learned along the way."
    },
    {
      id: "alumni3",
      title: "From PhD to Product Manager: Bridging Research and Industry",
      excerpt: "How my doctoral research in renewable energy systems led to a career in tech product management at Tesla.",
      date: "2025-07-20",
      author: "Dr. Michele Rossi",
      category: "alumni",
      tags: ["PhD", "Product Management", "Tesla", "Career Transition", "Clean Energy"],
      graduate: "PhD in Energy Engineering, 2021",
      currentRole: "Senior Product Manager, Energy Products at Tesla",
      content: "Completing a PhD in Energy Engineering at Politecnico was just the beginning of my journey. While many of my peers continued in academia, I chose to take my research expertise into industry, specifically to Tesla's Energy division. Here's how I made that transition and what I learned along the way."
    }
  ]
};

// Application state
let currentPage = 'home';
let activeFilters = [];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeModal();
  renderContent();
  setActivePage('home');
});

// Navigation functionality
function initializeNavigation() {
  // Handle all navigation links
  const allNavLinks = document.querySelectorAll('[data-page]');
  allNavLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });
  }
}

function handleNavClick(e) {
  e.preventDefault();
  const page = e.target.getAttribute('data-page');
  if (page) {
    setActivePage(page);
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  const mainNav = document.getElementById('main-nav');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  if (mainNav && mobileMenuToggle) {
    mainNav.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
  }
}

function setActivePage(page) {
  // Update current page
  currentPage = page;
  
  // Clear any existing focus/hover states
  clearActiveStates();
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Show target page
  const targetPage = document.getElementById(`${page}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  // Update navigation active states
  document.querySelectorAll('[data-page]').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === page) {
      link.classList.add('active');
    }
  });
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function clearActiveStates() {
  // Remove any stuck focus or active states from cards
  document.querySelectorAll('.post-card, .project-card, .research-card, .club-card').forEach(card => {
    card.style.transform = '';
    card.style.boxShadow = '';
    card.style.borderColor = '';
    card.blur();
  });
}

// Content rendering functions
function renderContent() {
  renderRecentPosts();
  renderFeaturedProjects();
  renderFeaturedResearch();
  renderFeaturedClubs();
  renderAllProjects();
  renderAllResearch();
  renderAllClubs();
  renderAlumniStories();
}

function renderRecentPosts() {
  const container = document.getElementById('recent-posts');
  if (!container) return;
  
  container.innerHTML = '';
  
  siteData.recentPosts.forEach(post => {
    const postCard = createPostCard(post);
    container.appendChild(postCard);
  });
}

function renderFeaturedProjects() {
  const container = document.getElementById('featured-projects');
  if (!container) return;
  
  container.innerHTML = '';
  
  const featuredProjects = siteData.projects.filter(p => p.featured).slice(0, 2);
  featuredProjects.forEach(project => {
    const projectCard = createProjectCard(project);
    container.appendChild(projectCard);
  });
}

function renderFeaturedResearch() {
  const container = document.getElementById('featured-research');
  if (!container) return;
  
  container.innerHTML = '';
  
  const featuredResearch = siteData.research.filter(r => r.featured).slice(0, 2);
  featuredResearch.forEach(research => {
    const researchCard = createResearchCard(research);
    container.appendChild(researchCard);
  });
}

function renderFeaturedClubs() {
  const container = document.getElementById('featured-clubs');
  if (!container) return;
  
  container.innerHTML = '';
  
  const featuredClubs = siteData.clubs.filter(c => c.featured).slice(0, 2);
  featuredClubs.forEach(club => {
    const clubCard = createClubCard(club);
    container.appendChild(clubCard);
  });
}

function renderAllProjects() {
  const container = document.getElementById('all-projects');
  if (!container) return;
  
  container.innerHTML = '';
  
  siteData.projects.forEach(project => {
    const projectCard = createProjectCard(project);
    container.appendChild(projectCard);
  });
}

function renderAllResearch() {
  const container = document.getElementById('all-research');
  if (!container) return;
  
  container.innerHTML = '';
  
  siteData.research.forEach(research => {
    const researchCard = createResearchCard(research);
    container.appendChild(researchCard);
  });
}

function renderAllClubs() {
  const container = document.getElementById('all-clubs');
  if (!container) return;
  
  container.innerHTML = '';
  
  siteData.clubs.forEach(club => {
    const clubCard = createClubCard(club);
    container.appendChild(clubCard);
  });
}

function renderAlumniStories() {
  const container = document.getElementById('alumni-stories');
  if (!container) return;
  
  container.innerHTML = '';
  
  siteData.alumni.forEach(story => {
    const storyCard = createAlumniCard(story);
    container.appendChild(storyCard);
  });
}

// Card creation functions
function createPostCard(post) {
  const card = document.createElement('article');
  card.className = `post-card ${post.category}-card`;
  card.tabIndex = 0;
  
  card.innerHTML = `
    <div class="card__content">
      <h3 class="card__title">${post.title}</h3>
      <div class="post-meta">
        <span class="post-meta__author">By ${post.author}</span>
        <span class="post-meta__date">${formatDate(post.date)}</span>
      </div>
      <p class="card__excerpt">${post.excerpt}</p>
      <div class="post-tags">
        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
  
  // Add click handlers
  card.addEventListener('click', function(e) {
    e.preventDefault();
    openPostModal(post);
  });
  
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openPostModal(post);
    }
  });
  
  return card;
}

function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.tabIndex = 0;
  
  card.innerHTML = `
    <div class="card__content">
      <h3 class="card__title">${project.title}</h3>
      <p class="card__description">${project.description || project.excerpt}</p>
      <div class="project-technologies">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      <div class="post-meta">
        <span class="post-meta__author">${project.author}</span>
        <span class="post-meta__date">${formatDate(project.date)}</span>
      </div>
      <div class="project-links">
        <a href="${project.github}" class="project-link" target="_blank" onclick="event.stopPropagation()">GitHub 💻</a>
        ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank" onclick="event.stopPropagation()">Live Demo 🚀</a>` : ''}
      </div>
      <div class="post-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
  
  // Add click handler
  card.addEventListener('click', function(e) {
    e.preventDefault();
    openProjectModal(project);
  });
  
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProjectModal(project);
    }
  });
  
  return card;
}

function createResearchCard(research) {
  const card = document.createElement('article');
  card.className = 'research-card';
  card.tabIndex = 0;
  
  card.innerHTML = `
    <div class="card__content">
      <div class="research-type">${research.researchType}</div>
      <h3 class="card__title">${research.title}</h3>
      <div class="research-advisor">Advisor: ${research.advisor}</div>
      <div class="post-meta">
        <span class="post-meta__author">By ${research.author}</span>
        <span class="post-meta__date">${formatDate(research.date)}</span>
      </div>
      <p class="card__excerpt">${research.excerpt}</p>
      <div class="research-abstract">
        <strong>Abstract:</strong> ${research.abstract}
      </div>
      <div class="post-tags">
        ${research.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
  
  // Add click handler
  card.addEventListener('click', function(e) {
    e.preventDefault();
    openResearchModal(research);
  });
  
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openResearchModal(research);
    }
  });
  
  return card;
}

function createClubCard(club) {
  const card = document.createElement('article');
  card.className = 'club-card';
  card.tabIndex = 0;
  
  card.innerHTML = `
    <div class="card__content">
      <div class="club-members">${club.members} Members</div>
      <h3 class="card__title">${club.title}</h3>
      <p class="card__description">${club.description}</p>
      <div class="club-info">
        <div class="club-info__item">
          <span class="club-info__label">📅 Meeting Time</span>
          <span class="club-info__value">${club.meetingTime}</span>
        </div>
        <div class="club-info__item">
          <span class="club-info__label">📍 Location</span>
          <span class="club-info__value">${club.location}</span>
        </div>
        <div class="club-info__item">
          <span class="club-info__label">📧 Contact</span>
          <a href="mailto:${club.contact}" class="club-contact" onclick="event.stopPropagation()">${club.contact}</a>
        </div>
      </div>
      ${club.tags ? `<div class="post-tags">
        ${club.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>` : ''}
    </div>
  `;
  
  // Add click handler for club details modal
  card.addEventListener('click', function(e) {
    e.preventDefault();
    openClubModal(club);
  });
  
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openClubModal(club);
    }
  });
  
  return card;
}

function createAlumniCard(story) {
  const card = document.createElement('article');
  card.className = 'post-card alumni-card';
  card.tabIndex = 0;
  
  card.innerHTML = `
    <div class="card__content">
      <h3 class="card__title">${story.title}</h3>
      <div class="alumni-meta">
        <div class="alumni-graduate">🎓 ${story.graduate}</div>
        <div class="alumni-role">💼 ${story.currentRole}</div>
      </div>
      <div class="post-meta">
        <span class="post-meta__author">By ${story.author}</span>
        <span class="post-meta__date">${formatDate(story.date)}</span>
      </div>
      <p class="card__excerpt">${story.excerpt}</p>
      <div class="post-tags">
        ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
  
  card.addEventListener('click', function(e) {
    e.preventDefault();
    openPostModal(story);
  });
  
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openPostModal(story);
    }
  });
  
  return card;
}

// Modal functionality
function initializeModal() {
  const modal = document.getElementById('post-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = document.querySelector('.modal__backdrop');
  
  if (modalClose) {
    modalClose.addEventListener('click', closePostModal);
  }
  
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closePostModal);
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closePostModal();
    }
  });
}

function openPostModal(post) {
  const modal = document.getElementById('post-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalAuthor = document.getElementById('modal-author');
  const modalDate = document.getElementById('modal-date');
  const modalAdditional = document.getElementById('modal-additional');
  const modalTags = document.getElementById('modal-tags');
  const modalContent = document.getElementById('modal-content');
  
  if (!modal || !modalTitle || !modalAuthor || !modalDate || !modalContent) return;
  
  modalTitle.textContent = post.title;
  modalAuthor.textContent = `By ${post.author}`;
  modalDate.textContent = formatDate(post.date);
  
  // Handle additional metadata for alumni
  if (modalAdditional && post.graduate) {
    modalAdditional.innerHTML = `
      <div style="margin-top: 8px;">
        <strong>🎓 Graduate:</strong> ${post.graduate}<br>
        <strong>💼 Current Role:</strong> ${post.currentRole}
      </div>
    `;
  } else if (modalAdditional) {
    modalAdditional.innerHTML = '';
  }
  
  // Handle tags
  if (modalTags) {
    if (post.tags) {
      modalTags.innerHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    } else {
      modalTags.innerHTML = '';
    }
  }
  
  // Format content with line breaks
  const content = post.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
  modalContent.innerHTML = `<p>${content}</p>`;
  
  modal.classList.remove('hidden');
  modal.classList.add('active');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Focus management
  const modalClose = document.getElementById('modal-close');
  if (modalClose) {
    modalClose.focus();
  }
}

function openProjectModal(project) {
  const modal = document.getElementById('post-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalAuthor = document.getElementById('modal-author');
  const modalDate = document.getElementById('modal-date');
  const modalAdditional = document.getElementById('modal-additional');
  const modalTags = document.getElementById('modal-tags');
  const modalContent = document.getElementById('modal-content');
  
  if (!modal || !modalTitle || !modalAuthor || !modalDate || !modalContent) return;
  
  modalTitle.textContent = project.title;
  modalAuthor.textContent = `By ${project.author}`;
  modalDate.textContent = formatDate(project.date);
  
  // Show technologies
  if (modalAdditional && project.technologies) {
    modalAdditional.innerHTML = `
      <div style="margin-top: 8px;">
        <strong>🛠️ Technologies:</strong> ${project.technologies.join(', ')}
      </div>
    `;
  }
  
  // Handle tags
  if (modalTags && project.tags) {
    modalTags.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  }
  
  // Create project details content
  const projectDetails = `
    <p>${project.description || project.excerpt}</p>
    ${project.content ? `<p>${project.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>` : ''}
    <h3>🔗 Project Links</h3>
    <p>
      <a href="${project.github}" target="_blank" style="margin-right: 16px;">GitHub Repository 💻</a>
      ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo 🚀</a>` : ''}
    </p>
  `;
  
  modalContent.innerHTML = projectDetails;
  
  modal.classList.remove('hidden');
  modal.classList.add('active');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Focus management
  const modalClose = document.getElementById('modal-close');
  if (modalClose) {
    modalClose.focus();
  }
}

function openResearchModal(research) {
  const modal = document.getElementById('post-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalAuthor = document.getElementById('modal-author');
  const modalDate = document.getElementById('modal-date');
  const modalAdditional = document.getElementById('modal-additional');
  const modalTags = document.getElementById('modal-tags');
  const modalContent = document.getElementById('modal-content');
  
  if (!modal || !modalTitle || !modalAuthor || !modalDate || !modalContent) return;
  
  modalTitle.textContent = research.title;
  modalAuthor.textContent = `By ${research.author}`;
  modalDate.textContent = formatDate(research.date);
  
  // Show research metadata
  if (modalAdditional) {
    modalAdditional.innerHTML = `
      <div style="margin-top: 8px;">
        <strong>🔬 Research Type:</strong> ${research.researchType}<br>
        <strong>👨‍🏫 Advisor:</strong> ${research.advisor}<br>
        <strong>🏛️ Department:</strong> ${research.department}
      </div>
    `;
  }
  
  // Handle tags
  if (modalTags && research.tags) {
    modalTags.innerHTML = research.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  }
  
  // Create research details content
  const researchDetails = `
    <h3>📋 Abstract</h3>
    <p>${research.abstract}</p>
    ${research.content ? `
      <h3>📖 Research Overview</h3>
      <p>${research.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>
    ` : ''}
  `;
  
  modalContent.innerHTML = researchDetails;
  
  modal.classList.remove('hidden');
  modal.classList.add('active');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Focus management
  const modalClose = document.getElementById('modal-close');
  if (modalClose) {
    modalClose.focus();
  }
}

function openClubModal(club) {
  const modal = document.getElementById('post-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalAuthor = document.getElementById('modal-author');
  const modalDate = document.getElementById('modal-date');
  const modalAdditional = document.getElementById('modal-additional');
  const modalTags = document.getElementById('modal-tags');
  const modalContent = document.getElementById('modal-content');
  
  if (!modal || !modalTitle || !modalAuthor || !modalDate || !modalContent) return;
  
  modalTitle.textContent = club.title;
  modalAuthor.textContent = `${club.members} Active Members`;
  modalDate.textContent = club.meetingTime;
  
  // Clear additional info for clubs
  if (modalAdditional) {
    modalAdditional.innerHTML = '';
  }
  
  // Handle tags
  if (modalTags && club.tags) {
    modalTags.innerHTML = club.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  } else if (modalTags) {
    modalTags.innerHTML = '';
  }
  
  // Create club details content
  const clubDetails = `
    <p>${club.description}</p>
    <h3>ℹ️ Club Information</h3>
    <ul>
      <li><strong>👥 Members:</strong> ${club.members} active members</li>
      <li><strong>📅 Meeting Time:</strong> ${club.meetingTime}</li>
      <li><strong>📍 Location:</strong> ${club.location}</li>
      <li><strong>📧 Contact:</strong> <a href="mailto:${club.contact}">${club.contact}</a></li>
    </ul>
    ${club.activities ? `
      <h3>🎯 Activities</h3>
      <ul>
        ${club.activities.map(activity => `<li>${activity}</li>`).join('')}
      </ul>
    ` : ''}
    <p><strong>🚀 Ready to join?</strong> Contact us to connect with like-minded students and work on exciting projects!</p>
  `;
  
  modalContent.innerHTML = clubDetails;
  
  modal.classList.remove('hidden');
  modal.classList.add('active');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Focus management
  const modalClose = document.getElementById('modal-close');
  if (modalClose) {
    modalClose.focus();
  }
}

function closePostModal() {
  const modal = document.getElementById('post-modal');
  if (!modal) return;
  
  modal.classList.remove('active');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 250);
  
  // Restore body scroll
  document.body.style.overflow = '';
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Tag filtering functionality
function filterByTag(tag) {
  if (activeFilters.includes(tag)) {
    activeFilters = activeFilters.filter(f => f !== tag);
  } else {
    activeFilters.push(tag);
  }
  
  // Re-render current page content with filters
  if (currentPage === 'projects') {
    renderFilteredProjects();
  } else if (currentPage === 'research') {
    renderFilteredResearch();
  }
}

function renderFilteredProjects() {
  const container = document.getElementById('all-projects');
  if (!container) return;
  
  container.innerHTML = '';
  
  let projects = siteData.projects;
  if (activeFilters.length > 0) {
    projects = projects.filter(project => 
      project.tags.some(tag => activeFilters.includes(tag))
    );
  }
  
  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    container.appendChild(projectCard);
  });
}

function renderFilteredResearch() {
  const container = document.getElementById('all-research');
  if (!container) return;
  
  container.innerHTML = '';
  
  let research = siteData.research;
  if (activeFilters.length > 0) {
    research = research.filter(r => 
      r.tags.some(tag => activeFilters.includes(tag))
    );
  }
  
  research.forEach(r => {
    const researchCard = createResearchCard(r);
    container.appendChild(researchCard);
  });
}

// Error handling
window.addEventListener('error', function(e) {
  console.error('Application error:', e.error);
});

// Focus management for accessibility
document.addEventListener('focusout', function(e) {
  // Clear any stuck visual states when focus moves away
  if (e.target.classList.contains('post-card') || 
      e.target.classList.contains('project-card') || 
      e.target.classList.contains('research-card') ||
      e.target.classList.contains('club-card') ||
      e.target.classList.contains('category-card')) {
    setTimeout(() => {
      if (document.activeElement !== e.target) {
        e.target.style.transform = '';
        e.target.style.boxShadow = '';
        e.target.style.borderColor = '';
      }
    }, 100);
  }
});

// Add some fun interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add hover sound effects (simulated with console logs for demo)
  document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('category-card') ||
        e.target.closest('.category-card')) {
      // Could add subtle sound effects here in a real implementation
      console.log('🎵 Hover sound effect');
    }
  });
  
  // Add celebration effect for successful interactions
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('project-link') ||
        e.target.classList.contains('club-contact')) {
      // Could add confetti or other celebration effects
      console.log('🎉 Interaction success!');
    }
  });
});