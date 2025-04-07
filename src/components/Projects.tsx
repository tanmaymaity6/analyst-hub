
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Customer Segmentation Analysis",
      description: "Used K-means clustering to segment customers based on purchasing behavior, identifying key customer groups for targeted marketing campaigns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      tags: ["Python", "Scikit-learn", "Tableau", "Market Segmentation"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Sales Performance Dashboard",
      description: "Built an interactive Power BI dashboard tracking regional sales performance, helping management identify underperforming regions and opportunities.",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=1000",
      tags: ["Power BI", "SQL", "DAX", "Data Visualization"],
      demoLink: "#"
    },
    {
      title: "Forecasting Model for Inventory Management",
      description: "Developed a time series forecasting model to predict product demand, reducing inventory costs by 15% while maintaining optimal stock levels.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000",
      tags: ["R", "Time Series Analysis", "Forecasting", "Inventory Optimization"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Marketing Campaign ROI Analysis",
      description: "Analyzed the effectiveness of multi-channel marketing campaigns and identified the most profitable customer acquisition channels.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1000",
      tags: ["Excel", "A/B Testing", "Statistical Analysis", "Marketing"],
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            A selection of my data analysis projects showcasing my analytical skills,
            problem-solving approach, and the business impact of my work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
