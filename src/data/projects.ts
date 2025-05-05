import KodukkuImg from "../image/kodukkupic.png";
import car from "../image/carrenatl1.png";
import voice from "../image/voice email.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'mobile' | 'web' | 'backend';
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Kodukku",
      description: "As your premier destination one stop digital platform for advertising and marketing, we aim to be your trusted partner in navigating the dynamic world of classifieds. Our mission is rooted in empowering our users by offering a seamless platform that simplifies the process of buying, selling, and finding opportunities, all tailored to your unique preferences and requirements.At Kodukku, we pride ourselves on offering more than just listings – we offer an experience. Our user-friendly interface, coupled with advanced search features, ensures that your browsing experience is intuitive and efficient.",
      image: `${KodukkuImg}`,
      technologies: ["React Native", "TypeScript", "GraphQL", "Stripe"],
      category: 'mobile',
    github: '',
    demo: "https://play.google.com/store/apps/details?id=com.kodukkuoffcials&pcampaignid=web_share",
  },
  {
    id: 2,
    title: "Car Rental Management System",
    description: "A modern social networking app with real-time messaging, post sharing, and user interactions. Includes custom UI components and smooth transitions between screens.",
    image: `${car}`,
    technologies: ["HTML", "CSS", "Bootstrap"],
    category: 'web',
    github: 'https://github.com',
    demo: "https://appstore.com",
  },
  {
    id: 3,
    title: "Voice E-Mail for Visually Challenged",
    description: "A productivity app for managing tasks with categories, reminders, and progress tracking. Features a clean, minimalist UI with gesture-based interactions.",
    image: `${voice}`,
    technologies: ["React Native", "Redux", "Local Storage", "Notifications"],
   category: 'web',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'Chat Application Backend',
    description: 'A scalable backend for a real-time chat application with message persistence, user presence, and notifications.',
    image: 'https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Node.js', 'Express', 'Socket.io', 'MongoDB'],
    category: 'backend',
    github: 'https://github.com',
  },
];
