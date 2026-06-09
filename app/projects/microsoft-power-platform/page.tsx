import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/constants/projects';
import Link from 'next/link';

const powerPlatformProjects = projects.filter(
  (project) => project.category === 'microsoft-power-platform'
);

const MicrosoftPowerPlatformProjectsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Microsoft Power Platform</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Power Platform specific projects.
        </PageHeaderHeading>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 card-container">
        {powerPlatformProjects.map((project, index) => (
          <Card
            title={project.overview}
            key={index}
            className="relative w-full transition-all duration-300 cursor-pointer isolate hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="leading-6">{project.title}</CardTitle>
              <CardDescription className="flex flex-col gap-2">
                {project.tagline}
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-muted-foreground "
                >
                  Learn More...
                  <span className="absolute inset-0"></span>
                </Link>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
};

export default MicrosoftPowerPlatformProjectsPage;
