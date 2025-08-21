# Additional Astro Template Files

## Component Examples

### PostCard.astro
```astro
---
export interface Props {
  post: {
    slug: string;
    data: {
      title: string;
      description: string;
      publishDate: Date;
      author: string;
      category: string;
      tags?: string[];
    };
  };
}

const { post } = Astro.props;
const formattedDate = post.data.publishDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
---

<article class="post-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <div class="p-6">
    <div class="flex items-center gap-2 mb-2">
      <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
        {post.data.category}
      </span>
      <span class="text-gray-500 text-sm">{formattedDate}</span>
    </div>
    
    <h3 class="text-xl font-semibold text-gray-900 mb-2">
      <a href={`/blog/${post.slug}`} class="hover:text-blue-600 transition-colors">
        {post.data.title}
      </a>
    </h3>
    
    <p class="text-gray-600 mb-4 line-clamp-3">
      {post.data.description}
    </p>
    
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-500">By {post.data.author}</span>
      {post.data.tags && (
        <div class="flex gap-1">
          {post.data.tags.slice(0, 3).map(tag => (
            <span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
</article>
```

### ProjectCard.astro
```astro
---
export interface Props {
  project: {
    slug: string;
    data: {
      title: string;
      description: string;
      technologies: string[];
      github?: string;
      demo?: string;
      author: string;
      publishDate: Date;
    };
  };
}

const { project } = Astro.props;
---

<div class="project-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <div class="p-6">
    <h3 class="text-xl font-semibold text-gray-900 mb-2">
      <a href={`/projects/${project.slug}`} class="hover:text-blue-600 transition-colors">
        {project.data.title}
      </a>
    </h3>
    
    <p class="text-gray-600 mb-4">
      {project.data.description}
    </p>
    
    <div class="mb-4">
      <h4 class="text-sm font-medium text-gray-700 mb-2">Technologies:</h4>
      <div class="flex flex-wrap gap-1">
        {project.data.technologies.map(tech => (
          <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
    
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-500">By {project.data.author}</span>
      <div class="flex gap-2">
        {project.data.github && (
          <a href={project.data.github} 
             class="text-blue-600 hover:text-blue-800 text-sm font-medium"
             target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.data.demo && (
          <a href={project.data.demo} 
             class="text-green-600 hover:text-green-800 text-sm font-medium"
             target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
</div>
```

### ClubCard.astro
```astro
---
export interface Props {
  club: {
    slug: string;
    data: {
      title: string;
      description: string;
      members: number;
      meetingTime: string;
      location: string;
      contact: string;
    };
  };
}

const { club } = Astro.props;
---

<div class="club-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <div class="p-6">
    <h3 class="text-xl font-semibold text-gray-900 mb-2">
      <a href={`/clubs/${club.slug}`} class="hover:text-blue-600 transition-colors">
        {club.data.title}
      </a>
    </h3>
    
    <p class="text-gray-600 mb-4">
      {club.data.description}
    </p>
    
    <div class="space-y-2 text-sm text-gray-700">
      <div class="flex items-center">
        <span class="font-medium w-20">Members:</span>
        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
          {club.data.members}
        </span>
      </div>
      <div class="flex items-center">
        <span class="font-medium w-20">When:</span>
        <span>{club.data.meetingTime}</span>
      </div>
      <div class="flex items-center">
        <span class="font-medium w-20">Where:</span>
        <span>{club.data.location}</span>
      </div>
      <div class="flex items-center">
        <span class="font-medium w-20">Contact:</span>
        <a href={`mailto:${club.data.contact}`} 
           class="text-blue-600 hover:text-blue-800">
          {club.data.contact}
        </a>
      </div>
    </div>
  </div>
</div>
```

### Footer.astro
```astro
---
import { Image } from 'astro:assets';
---

<footer class="bg-gray-900 text-white py-12">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-4 gap-8">
      <!-- Logo and Description -->
      <div class="md:col-span-2">
        <h3 class="text-2xl font-bold mb-4">PolitoTalksTech</h3>
        <p class="text-gray-300 mb-4 max-w-md">
          Connecting students through technology, innovation, and knowledge sharing
          at Politecnico di Torino.
        </p>
        <div class="flex space-x-4">
          <a href="https://github.com/politotalkstech" 
             class="text-gray-400 hover:text-white transition-colors"
             target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/company/politotalkstech" 
             class="text-gray-400 hover:text-white transition-colors"
             target="_blank" rel="noopener noreferrer">
            LinkedIn  
          </a>
          <a href="https://twitter.com/politotalkstech" 
             class="text-gray-400 hover:text-white transition-colors"
             target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
      
      <!-- Quick Links -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
        <ul class="space-y-2">
          <li>
            <a href="/projects" class="text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="/clubs" class="text-gray-300 hover:text-white transition-colors">
              Clubs
            </a>
          </li>
          <li>
            <a href="/alumni" class="text-gray-300 hover:text-white transition-colors">
              Alumni Stories
            </a>
          </li>
          <li>
            <a href="/about" class="text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Contact -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Contact</h4>
        <div class="space-y-2 text-gray-300">
          <p>
            <a href="mailto:contact@politotalkstech.edu" 
               class="hover:text-white transition-colors">
              contact@politotalkstech.edu
            </a>
          </p>
          <p>Politecnico di Torino</p>
          <p>Corso Duca degli Abruzzi, 24</p>
          <p>10129 Torino, Italy</p>
        </div>
      </div>
    </div>
    
    <hr class="my-8 border-gray-700">
    
    <div class="flex flex-col md:flex-row justify-between items-center">
      <p class="text-gray-400 text-sm">
        © 2025 PolitoTalksTech. All rights reserved.
      </p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors">
          Privacy Policy
        </a>
        <a href="/terms" class="text-gray-400 hover:text-white text-sm transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  </div>
</footer>
```

## Page Templates

### Projects Index Page (src/pages/projects/index.astro)
```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';
import ProjectCard from '../../components/ProjectCard.astro';

const allProjects = await getCollection('projects');
const sortedProjects = allProjects.sort((a, b) => 
  b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
);
---

<BaseLayout title="Projects - PolitoTalksTech">
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Student Projects
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover innovative projects created by our talented students, 
          showcasing cutting-edge technologies and creative solutions.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProjects.map(project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  </section>
</BaseLayout>
```

### Project Detail Page (src/pages/projects/[slug].astro)
```astro
---
import { getCollection, type CollectionEntry } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}

type Props = {
  project: CollectionEntry<'projects'>;
};

const { project } = Astro.props;
const { Content } = await project.render();

const formattedDate = project.data.publishDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
---

<BaseLayout title={`${project.data.title} - PolitoTalksTech`}>
  <article class="py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <header class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          {project.data.title}
        </h1>
        
        <div class="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
          <span>By {project.data.author}</span>
          <span>•</span>
          <time datetime={project.data.publishDate.toISOString()}>
            {formattedDate}
          </time>
        </div>
        
        <p class="text-xl text-gray-600 mb-6">
          {project.data.description}
        </p>
        
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">
            Technologies Used:
          </h3>
          <div class="flex flex-wrap gap-2">
            {project.data.technologies.map(tech => (
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div class="flex gap-4">
          {project.data.github && (
            <a href={project.data.github} 
               class="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
               target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          )}
          {project.data.demo && (
            <a href={project.data.demo} 
               class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
               target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </header>
      
      <div class="prose prose-lg max-w-none">
        <Content />
      </div>
    </div>
  </article>
</BaseLayout>
```

### About Page (src/pages/about.astro)
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="About - PolitoTalksTech">
  <section class="py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          About PolitoTalksTech
        </h1>
        <p class="text-xl text-gray-600">
          Connecting students through technology, innovation, and knowledge sharing
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p class="text-gray-600 mb-4">
            PolitoTalksTech is a student-driven community at Politecnico di Torino 
            dedicated to fostering innovation, collaboration, and knowledge sharing 
            in the field of technology.
          </p>
          <p class="text-gray-600 mb-4">
            We believe that the best way to learn technology is by building, sharing, 
            and collaborating with like-minded peers. Our platform serves as a hub 
            where students can showcase their projects, discover exciting clubs, 
            and learn from successful alumni.
          </p>
        </div>
        <div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div class="text-gray-700 mb-4">Active Members</div>
            
            <div class="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div class="text-gray-700 mb-4">Student Projects</div>
            
            <div class="text-4xl font-bold text-purple-600 mb-2">15</div>
            <div class="text-gray-700">Tech Clubs</div>
          </div>
        </div>
      </div>
      
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          What We Offer
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">🚀</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Project Showcase
            </h3>
            <p class="text-gray-600">
              A platform for students to share their innovative projects and get 
              feedback from the community.
            </p>
          </div>
          
          <div class="text-center">
            <div class="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">🏛️</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Club Directory
            </h3>
            <p class="text-gray-600">
              Discover and join tech clubs that align with your interests and 
              career goals.
            </p>
          </div>
          
          <div class="text-center">
            <div class="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">🎓</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Alumni Network
            </h3>
            <p class="text-gray-600">
              Connect with successful graduates and learn from their career 
              journeys in the tech industry.
            </p>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-50 p-8 rounded-lg text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          Join Our Community
        </h2>
        <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
          Ready to be part of something bigger? Join PolitoTalksTech and connect 
          with fellow students, share your projects, and accelerate your tech career.
        </p>
        <a href="mailto:contact@politotalkstech.edu" 
           class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Get In Touch
        </a>
      </div>
    </div>
  </section>
</BaseLayout>
```

## Sample Content Files

### Blog Post (src/content/blog/getting-started-ml.md)
```markdown
---
title: "Getting Started with Machine Learning at Polito"
description: "A beginner's guide to diving into ML research and projects at our university."
publishDate: 2025-08-15
author: "Marco Rossi"
category: "Projects"
tags: ["ML", "Python", "Research"]
featured: true
---

Machine learning has become one of the most exciting fields in computer science, and Politecnico offers incredible opportunities for students to get involved. In this post, we'll explore the various ML research groups, available courses, and how to start your first project.

## Research Groups at Polito

### Computer Vision and Pattern Recognition
Led by Prof. Barbara Caputo, this group focuses on visual AI research, working on everything from autonomous driving to medical imaging applications.

### Machine Learning and Data Mining
This group develops new algorithms for big data analysis and predictive modeling, with students working on real datasets from industry partners.

## Getting Started

1. **Take the foundational courses**: Start with Machine Learning in your third year
2. **Join the AI Club**: Weekly meetings on Thursdays at 6 PM in Room 3A
3. **Find a research project**: Reach out to professors whose work interests you
4. **Practice with real data**: Use platforms like Kaggle to hone your skills

## Essential Skills to Develop

- **Python programming**: Focus on libraries like NumPy, Pandas, and Scikit-learn
- **Statistical knowledge**: Understanding of probability and statistics
- **Linear algebra**: Matrix operations and vector spaces
- **Data visualization**: Tools like Matplotlib and Seaborn

## Resources at Polito

- **GPU Computing Lab**: Access to high-performance computing resources
- **Research Datasets**: Real-world data from industry collaborations
- **Mentorship Program**: Senior students and professors to guide your journey
- **Conference Funding**: Support for presenting your research at international venues

## Next Steps

Ready to start your ML journey? Here's what you should do:

1. Enroll in the Machine Learning course for solid foundations
2. Attend our weekly AI Club meetings to connect with like-minded students
3. Start a personal project using online datasets
4. Consider doing your thesis in one of our ML research groups

The field of machine learning is vast and exciting, with new developments happening every day. At Polito, you'll have all the resources and support you need to become part of this revolutionary field.

Join us, and let's shape the future of artificial intelligence together!
```

### Project (src/content/projects/smart-campus-app.md)
```markdown
---
title: "Smart Campus Navigation App"
description: "An AR-powered mobile app helping students navigate the Polito campus with real-time indoor positioning."
technologies: ["React Native", "ARCore", "Node.js", "MongoDB"]
github: "https://github.com/politotalkstech/smart-campus"
demo: "https://smartcampus.politotalkstech.com"
author: "Team Alpha"
publishDate: 2025-07-20
featured: true
---

Navigating the sprawling Politecnico di Torino campus can be challenging, especially for new students. Our Smart Campus Navigation App leverages augmented reality and real-time positioning to make campus navigation intuitive and efficient.

## Problem Statement

New students often struggle to find their way around campus, leading to:
- Late arrivals to classes and meetings
- Missed opportunities to explore campus facilities
- Increased stress during the first weeks of university
- Difficulty finding study spaces and labs

## Our Solution

We developed a mobile application that combines:

### Augmented Reality Navigation
- Real-time AR overlays showing directions
- Visual markers for important campus locations
- Interactive 3D models of buildings

### Indoor Positioning System
- Bluetooth beacons for precise indoor location
- WiFi triangulation for broader coverage
- Integration with campus IoT infrastructure

### Smart Features
- Real-time room availability for study spaces
- Class schedule integration
- Event notifications and directions
- Accessibility routes for users with mobility needs

## Technical Implementation

### Frontend (React Native)
```javascript
// AR Camera Component
const ARCamera = () => {
  const [arNodes, setArNodes] = useState([]);
  
  useEffect(() => {
    // Initialize ARCore session
    ViroARSceneNavigator.startSession();
    
    // Load navigation nodes
    loadNavigationNodes();
  }, []);
  
  return (
    <ViroARScene>
      {arNodes.map(node => (
        <ViroARNode key={node.id} position={node.position}>
          <ViroText text={node.label} />
        </ViroARNode>
      ))}
    </ViroARScene>
  );
};
```

### Backend (Node.js + MongoDB)
```javascript
// Indoor positioning service
app.post('/api/position', async (req, res) => {
  const { beaconData, wifiSignals } = req.body;
  
  // Triangulate position using beacon RSSI
  const position = await triangulatePosition(beaconData);
  
  // Enhance with WiFi data
  const refinedPosition = await refineWithWifi(position, wifiSignals);
  
  res.json({ position: refinedPosition });
});
```

## Key Features

1. **AR Navigation**: Point your phone to see directional arrows and building information
2. **Room Finder**: Search for specific rooms, labs, and facilities
3. **Real-time Updates**: Live information about room occupancy and events
4. **Offline Mode**: Cached maps work without internet connection
5. **Multi-language Support**: Available in Italian and English
6. **Accessibility**: Voice guidance and high contrast modes

## Results and Impact

Since launching our beta version:
- 500+ student testers
- 40% reduction in navigation time
- 95% user satisfaction rating
- Integration discussions with Polito administration

## Challenges Overcome

### Technical Challenges
- **Indoor positioning accuracy**: Achieved sub-meter precision using hybrid approach
- **AR tracking stability**: Implemented robust SLAM algorithms
- **Battery optimization**: Reduced power consumption by 60%

### User Experience Challenges
- **Intuitive AR interface**: Iterative design with user feedback
- **Accessibility compliance**: Full support for screen readers and motor impairments
- **Performance on older devices**: Graceful degradation for low-end phones

## Future Roadmap

### Phase 2 (Fall 2025)
- Integration with student information systems
- Social features (study group formation)
- Campus event discovery and navigation

### Phase 3 (Spring 2026)
- Expansion to other university campuses
- AI-powered personalized recommendations
- Integration with campus sustainability initiatives

## Team

- **Marco Bianchi** - Lead Developer (React Native)
- **Sofia Romano** - AR/VR Specialist
- **Alessandro Verde** - Backend Engineer
- **Giulia Rossi** - UX/UI Designer
- **Prof. Andrea Sanna** - Project Advisor

## Awards and Recognition

- **Best Student Project** - Polito Innovation Day 2025
- **People's Choice Award** - Italian Student Tech Competition
- **Honorable Mention** - European University Innovation Awards

## Get Involved

Interested in contributing? We're looking for:
- Mobile developers (React Native, Flutter)
- Computer vision enthusiasts
- UX/UI designers
- Beta testers

Contact us at: smartcampus@studenti.polito.it

---

*This project represents the innovative spirit of Politecnico students and our commitment to using technology to solve real-world problems. Join us in making campus life better for everyone!*
```

This completes the comprehensive Astro template package with all necessary components, pages, and content examples!