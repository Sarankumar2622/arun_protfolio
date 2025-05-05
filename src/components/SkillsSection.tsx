import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'Core Technologies' | 'Additional Skills'  | 'Other Relevant Skills';
}

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'React Native', level: 95, category: 'Core Technologies' },
    { name: 'JavaScript', level: 95, category: 'Core Technologies' },
    { name: 'TypeScript', level: 85, category: 'Core Technologies' },
    { name: 'Redux', level: 90, category: 'Core Technologies' },
    { name: 'React Navigation', level: 90, category: 'Core Technologies' },
    { name: 'UI/UX Design', level: 85, category: 'Additional Skills' },
    { name: 'RESTful APIs', level: 80, category: 'Additional Skills' },
    { name: 'GraphQL', level: 75, category: 'Additional Skills' },
    { name: 'HTML/CSS', level: 90, category: 'Additional Skills' },
    { name: 'Testing', level: 70, category: 'Other Relevant Skills' },
    { name: 'Firebase', level: 70, category: 'Other Relevant Skills' },
    { name: 'AWS Amplify', level: 70, category: 'Other Relevant Skills' },
    { name: 'App Store Deployment', level: 70, category: 'Other Relevant Skills' },
    { name: 'Google Play Store', level: 70, category: 'Other Relevant Skills' },
    { name: 'Push Notifications', level: 70, category: 'Other Relevant Skills' },
    { name: 'Native Modules', level: 70, category: 'Other Relevant Skills' },
    { name: 'Performance Optimization', level: 70, category: 'Other Relevant Skills' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.width}%`;
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animateElements?.forEach((el) => observer.observe(el));

    return () => {
      animateElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const categories = [
    { id: 'Core Technologies', name: 'Core Technologies' },
    { id: 'Additional Skills', name: 'Additional Skills' },
    { id: 'Other Relevant Skills', name: 'Other Relevant Skills' },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I specialize in React Native development with a strong foundation in related technologies and tools.
          </p>
        </div>

        <div className="animate-on-scroll opacity-0">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                {category.name} Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="progress-bar bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '0%' }}
                          data-width={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SkillsSection;