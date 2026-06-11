import { projectZones, projects } from '@/constants/projects';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Badge } from '@/components/ui/badge';

import { siteConfig } from '@/config/site';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { ProjectScreenshotsSlider } from '@/components/project-screenshots-slider';

const getProject = async (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

const getProjectCategory = (categorySlug: string) => {
  return projectZones.find((zone) => zone.slug === categorySlug);
};

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = await getProject(id);

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!project) {
    return (
      <>
        <h2 className="text-destructive">Project not found</h2>
        <Link
          href="/projects"
          className="text-muted-foreground flex items-center gap-2"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to projects
        </Link>
      </>
    );
  }

  const projectCategory = getProjectCategory(project.category);
  const backHref = projectCategory ? `/projects/${project.category}` : '/projects';
  const backLabel = projectCategory
    ? `Back to ${projectCategory.title}`
    : 'Back to projects';

  return (
    <div>
      <div className="navigation">
        <Link
          href={backHref}
          className="flex items-center gap-2 mb-4 text-muted-foreground cursor-pointer w-fit"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          {backLabel}
        </Link>
      </div>

      <PageHeader>
        <PageHeaderHeading>{project.title}</PageHeaderHeading>
        <PageHeaderDescription>{project.tagline}</PageHeaderDescription>
        <PageHeaderDescription>{project.overview}</PageHeaderDescription>
      </PageHeader>

      <div id="badges" className="my-4">
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap items-center gap-2">
          {project.techStack?.map((tech) => (
            <Badge
              variant="outline"
              className="px-4 text-base shadow-md"
              key={tech}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {project.screenshots && project.screenshots.length > 0 && (
        <ProjectScreenshotsSlider
          screenshots={project.screenshots}
          projectSlug={project.slug}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-light">
        <div id="features" className="my-4">
          <h2 className="text-lg font-semibold">Features</h2>
          <ul className="list-disc list-outside">
            {project.features?.map((feature) => (
              <li className="ml-4 pl-2" key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {project.feedback && (
          <div id="feedback" className="my-4">
            <h2 className="text-lg font-semibold">Feedback</h2>
            <p>
              For feedback or suggestions, contact me at:{' '}
              <Link href={siteConfig.links.email}>
                <span className="text-primary">
                  {siteConfig.links.email.replace('mailto:', '')}
                </span>
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
