import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/About.css';

const About = () => {
  const skills = [
    { title: "Programming", items: ["C", "C#", "C++", "JavaScript", "Python"] },
    { title: "Systems", items: ["ML/DL", "Data Mining", "Cloud Computing", "Server-Client Communication"] },
    { title: "Databases", items: ["SQL", "NoSQL"] },
    { title: "Tools", items: ["Git", "Linux", "Vercel", "Heroku"] },
    { title: "Frameworks", items: ["React", "Next.js", "Preact", "JavaFX"] },
    { title: "UI/UX", items: ["Web", "GUI", "Android"] },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2, // Show 2 skills per row on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Below 768px, show only 1 skill at a time
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="about" className="about">
     <h2 className="page-title">About Me</h2>
<p className="about-text">
  Hi, I'm <strong>Majd Salameh</strong>, a passionate <strong>Software Engineering Student</strong> with a love for building efficient, scalable, and innovative applications. 
  My expertise spans <strong>full-stack development</strong>, working with modern technologies like <strong>React.js, Node.js, and Firebase</strong>.
</p>

<p className="about-text">
  I thrive in solving complex problems and enjoy working on projects that make an impact. Whether it's crafting elegant front-end experiences or optimizing back-end performance, 
  I’m always eager to learn and push the boundaries of technology.
</p>

      {/* Skills Section */}
      <div className="skills-section">
      <h2 className="page-title">skills</h2>

        <Slider {...sliderSettings}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.title}</h3>
              <ul>
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default About;
