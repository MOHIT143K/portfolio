"use client";

import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  GraduationCap, 
  Building2, 
  Calendar,
  Code2,
  Server,
  TestTube,
  Wrench,
  GitBranch,
  Database,
  Heart,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const skills = {
    frontend: {
      icon: <Code2 className="h-6 w-6 mb-4" />,
      items: ["Next JS", "React JS", "Redux", "Angular", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    backend: {
      icon: <Server className="h-6 w-6 mb-4" />,
      items: ["Node JS", "Express", "Java", "Spring", "Hibernate"]
    },
    testing: {
      icon: <TestTube className="h-6 w-6 mb-4" />,
      items: ["Jest", "React Testing Library", "Enzyme", "Mocha"]
    },
    tools: {
      icon: <Wrench className="h-6 w-6 mb-4" />,
      items: ["SonarQube", "Veracode", "Coverity", "Splunk", "Eslint", "Apigee", "Webpack", "Git"]
    },
    cicd: {
      icon: <GitBranch className="h-6 w-6 mb-4" />,
      items: ["Bamboo", "Jenkins", "Azure", "AWS"]
    },
    databases: {
      icon: <Database className="h-6 w-6 mb-4" />,
      items: ["MongoDB", "MySQL"]
    }
  };

  const experiences = [
    {
      company: "Wipro Limited",
      location: "Gurugram, Haryana",
      position: "Technical Lead",
      period: "May 2022 – Present",
      highlights: [
        "Led two teams of 15, leveraging Agile methodologies",
        "Defined best practices for architecture and development",
        "35% increase in client sales & regained client confidence",
        "Managed end-to-end product development",
        "Mentored junior developers and conducted code reviews"
      ],
      projects: [
        {
          name: "MTO (dvi-ui)",
          client: "Ministry of Transportation of Ontario",
          tech: "Next JS, React, Redux, TypeScript, HTML, Jest, React Testing Library, Azure",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
        },
        {
          name: "Telstra Reward Store",
          client: "Telstra",
          tech: "Angular 16, JavaScript, HTML, Storybook, GitLab, Salesforce integration",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      company: "Xebia IT Architects India Pvt. Ltd.",
      location: "Gurgaon, Haryana",
      position: "Senior Technical Consultant",
      period: "December 2020 – May 2022",
      highlights: [
        "Led development of price and reporting dashboard",
        "Implemented survey dashboard for McKinsey",
        "Developed advanced analytics suite for PetroSea"
      ],
      projects: [
        {
          name: "Price and Reporting Dashboard",
          client: "Dunnhumby",
          tech: "React, Redux, JavaScript, Jest, HTML, Storybook, GitLab",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
        },
        {
          name: "Survey Dashboard",
          client: "Mckinsey",
          tech: "React, Redux, JavaScript, Jest, HTML, GitHub, Material-UI",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      company: "Publicis Sapient",
      location: "Gurgaon, Haryana",
      position: "Senior Associate Experience Technology L1",
      period: "July 2017 – December 2020",
      highlights: [
        "Developed retirement platform for Empower",
        "Created report administrator for Fidelity International",
        "Led front-end development initiatives"
      ],
      projects: [
        {
          name: "Empower Retirement",
          client: "Empower, Go West IT",
          tech: "React JS, Redux, Typescript, JavaScript, HTML, CSS, Bootstrap, Mocha JS, Git",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      company: "Agile Parking Solutions Pvt. Ltd. (Get My Parking)",
      location: "Saket, Delhi",
      position: "Software Developer",
      period: "June 2016 – June 2017",
      highlights: [
        "Developed admin dashboard using React JS",
        "Built responsive web application for parking management",
        "Implemented real-time parking spot tracking"
      ],
      projects: [
        {
          name: "Get My Parking Admin Dashboard",
          client: "Internal Product",
          tech: "React JS, Redux, JavaScript, jQuery, HTML, CSS, Bootstrap, Jest, Bitbucket",
          image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      company: "Ecstasy E-Ordering Pvt. Ltd. (Bite Club)",
      location: "Gurgaon, Haryana",
      position: "Front End Developer",
      period: "January 2015 – May 2016",
      highlights: [
        "Built e-ordering application using AngularJS",
        "Developed chef dashboard for order management",
        "Implemented real-time order tracking"
      ],
      projects: [
        {
          name: "Bite Club E-Ordering App",
          client: "Internal Product",
          tech: "AngularJS, JavaScript, HTML, CSS, Bitbucket, AWS",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      company: "StrongMoments Technologies Pvt. Ltd.",
      location: "Faridabad, Haryana",
      position: "Software Developer",
      period: "May 2013 – January 2015",
      highlights: [
        "Developed transport management system",
        "Created school management ERP",
        "Implemented tracking system using Java"
      ],
      projects: [
        {
          name: "EFmFm (Transport Management System)",
          client: "Newt Global India Pvt. Ltd.",
          tech: "jQuery, JavaScript, HTML, CSS, Bootstrap",
          image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80"
        }
      ]
    }
  ];

  const education = [
    {
      institution: "Rajasthan Technical University (RTU)",
      location: "Kota, Rajasthan",
      degree: "Bachelor of Technology (B.Tech.), Computer Science",
      period: "2009 - 2013",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
    },
    {
      institution: "Vidya Mandir Public School",
      location: "Faridabad, Haryana",
      degree: "10+2 (Senior Secondary with Non-Medical)",
      period: "2007 - 2009",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
    },
    {
      institution: "Vidya Mandir Public School",
      location: "Faridabad, Haryana",
      degree: "10 (Secondary)",
      period: "2005 - 2007",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Mohit Khandelwal</h1>
          <h2 className="text-2xl text-muted-foreground mb-8">Technical Lead & Full Stack Developer</h2>
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <Badge variant="outline" className="px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              New Delhi, India
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Phone className="w-4 h-4 mr-2" />
              +91-9953440143
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Mail className="w-4 h-4 mr-2" />
              er.mk@outlook.com
            </Badge>
          </div>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, { icon, items }]) => (
              <Card key={category} className="p-6">
                <div className="flex flex-col items-center mb-4">
                  {icon}
                  <h3 className="text-xl font-semibold capitalize">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <Tabs defaultValue="wipro" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-[800px] mx-auto mb-12">
              <TabsTrigger value="wipro">Recent</TabsTrigger>
              <TabsTrigger value="mid">Mid Career</TabsTrigger>
              <TabsTrigger value="early">Early Career</TabsTrigger>
            </TabsList>
            
            <TabsContent value="wipro">
              {experiences.slice(0, 2).map((exp) => (
                <ExperienceCard key={exp.company} experience={exp} />
              ))}
            </TabsContent>
            
            <TabsContent value="mid">
              {experiences.slice(2, 4).map((exp) => (
                <ExperienceCard key={exp.company} experience={exp} />
              ))}
            </TabsContent>
            
            <TabsContent value="early">
              {experiences.slice(4).map((exp) => (
                <ExperienceCard key={exp.company} experience={exp} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu) => (
              <Card key={edu.degree} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                      <p className="text-muted-foreground mb-2">{edu.degree}</p>
                      <Badge variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-4 w-4 text-destructive" />
              <span>Built with Mohit Khandelwal</span>
            </div>
            <div className="flex gap-6">
              <a href="mailto:er.mk@outlook.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/MOHIT143K" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://in.linkedin.com/in/m143k" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Experience Card Component
function ExperienceCard({ experience }) {
  return (
    <Card className="mb-8 p-6">
      <div className="flex items-center gap-4 mb-4">
        <Building2 className="h-6 w-6" />
        <div>
          <h3 className="text-xl font-semibold">{experience.position}</h3>
          <p className="text-muted-foreground">{experience.company}</p>
        </div>
        <Badge variant="outline" className="ml-auto">
          <Calendar className="w-4 h-4 mr-2" />
          {experience.period}
        </Badge>
      </div>
      <Separator className="my-4" />
      <ul className="list-disc list-inside mb-6 space-y-2">
        {experience.highlights.map((highlight, i) => (
          <li key={i} className="text-muted-foreground">{highlight}</li>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experience.projects.map((project) => (
          <Card key={project.name} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-muted-foreground mb-4">Client: {project.client}</p>
              <p className="text-sm">{project.tech}</p>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}