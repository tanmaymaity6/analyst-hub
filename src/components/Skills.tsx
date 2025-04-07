
import { BarChart2, Database, FileSpreadsheet, LineChart, PieChart, TrendingUp } from "lucide-react";
import SkillBadge from "./SkillBadge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis Tools",
      skills: [
        { name: "SQL", level: 5, icon: <Database size={16} /> },
        { name: "Excel", level: 5, icon: <FileSpreadsheet size={16} /> },
        { name: "Tableau", level: 4, icon: <PieChart size={16} /> },
        { name: "Power BI", level: 4, icon: <BarChart2 size={16} /> },
        { name: "Python", level: 4, icon: <TrendingUp size={16} /> },
        { name: "R", level: 3, icon: <LineChart size={16} /> }
      ]
    },
    {
      title: "Statistical Methods",
      skills: [
        { name: "Regression Analysis", level: 5 },
        { name: "Hypothesis Testing", level: 4 },
        { name: "Time Series Analysis", level: 4 },
        { name: "A/B Testing", level: 5 },
        { name: "Data Mining", level: 4 },
        { name: "Predictive Modeling", level: 3 }
      ]
    },
    {
      title: "Domain Knowledge",
      skills: [
        { name: "Business Intelligence", level: 5 },
        { name: "Financial Analysis", level: 4 },
        { name: "Marketing Analytics", level: 4 },
        { name: "Customer Insights", level: 5 },
        { name: "Data Visualization", level: 5 },
        { name: "ETL Processes", level: 3 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Technical Expertise</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            With expertise in various data analysis tools and statistical methods,
            I transform complex data into clear insights that drive business decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
