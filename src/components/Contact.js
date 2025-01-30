import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/Contact.css';

const Contact = () => {
  const handleDownload = () => {
    // Path to the resume file inside the public folder
    const resumePath = "/Majd Salameh CV 2025.pdf"; // No need for process.env.PUBLIC_URL

    // Create a temporary link to trigger the download
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Majd_Salameh_CV_2025.pdf"; // Rename file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="contact">
      <h4>Contact</h4>
      <button className="download-resume-btn" onClick={handleDownload}>
        📄 Download Resume
      </button>
      <p>Email: majdsalameh9@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/majd-salameh-96745524b/" target="_blank" rel="noopener noreferrer">visit my LinkedIn</a></p>
      <p>GitHub: <a href="https://github.com/majdsalameh1211" target="_blank" rel="noopener noreferrer">visit my GitHub</a></p>
      
      
      
    </section>
  );
};

export default Contact;
