
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoLink,
  codeLink
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2">
        {demoLink && (
          <Button variant="outline" size="sm" asChild className="gap-2">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} /> Demo
            </a>
          </Button>
        )}
        {codeLink && (
          <Button variant="outline" size="sm" asChild className="gap-2">
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <Github size={14} /> Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
