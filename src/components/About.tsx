
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Application Development Analyst",
      company: "Accenture",
      period: "2021 - 2023",
      description: "Lead data analyst for customer insights team, responsible for analyzing user behavior and market trends to drive strategic business decisions."
    },
    {
      title: "Data Analyst",
      company: "Rabi Industries",
      period: "2020 - 2021",
      description: "Developed and maintained dashboards and reports to track KPIs and business metrics. Conducted A/B testing for new product features."
    },
 
  ];

  const education = [
    {
      degree: "Master of Information Science",
      institution: "University of Wisconsin-Madison",
      year: "2023 - 2025",
    },
    {
      degree: "Bachelor of Computer Engineering",
      institution: "University of Mumbai",
      year: "2016 - 2020",
    }
  ];

  const certifications = [
    "Data Analysis with Python",
    "Data Visualization with Python",
    "Databases and SQL for Data Science with Python"
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            With over 2 years of experience in data analysis, I help organizations
            leverage data to solve complex business problems and drive growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Profile */}
          <Card className="p-6">
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-2">
                  <Briefcase size={18} className="text-primary" />
                </span>
                Professional Profile
              </h3>
              <p className="text-gray-600">
                I am a passionate data analyst with extensive experience in transforming complex datasets 
                into actionable business insights. My expertise lies in statistical analysis, data visualization,
                and storytelling with data.
              </p>
              <p className="text-gray-600">
                I enjoy tackling challenging problems and helping organizations make data-driven decisions 
                that lead to tangible business outcomes. My approach combines technical expertise with 
                business acumen to deliver solutions that matter.
              </p>
              <div className="mt-6">
                <Button size="lg">Download Resume</Button>
              </div>
            </div>
          </Card>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-secondary/10 p-2 rounded-full mr-2">
                <Calendar size={18} className="text-secondary" />
              </span>
              Work Experience
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
                  <CardContent className="p-4 pl-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <p className="text-sm text-gray-600">{exp.company}</p>
                      </div>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Education & Certifications */}
            <h3 className="text-xl font-bold mb-4 mt-8 flex items-center">
              <span className="bg-primary/10 p-2 rounded-full mr-2">
                <GraduationCap size={18} className="text-primary" />
              </span>
              Education & Certifications
            </h3>
            <Card className="p-6">
              <div className="mb-4">
                <h4 className="font-semibold">Education</h4>
                <div className="mt-2 space-y-2">
                  {education.map((edu, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-sm text-gray-600">{edu.institution}</p>
                      </div>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full h-fit">
                        {edu.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold">Certifications</h4>
                <ul className="mt-2 space-y-1">
                  {certifications.map((cert, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
