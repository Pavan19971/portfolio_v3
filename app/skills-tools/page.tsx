import { Icons } from '@/components/icons';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { mySkills } from '@/constants';

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Built with .NET, Power Platform, and cloud infrastructure.
        </PageHeaderHeading>
        <PageHeaderDescription>
          As a Full Stack & DevOps Engineer, I specialize in designing and building scalable enterprise applications using C#, .NET Core, and Microsoft Azure. I'm an expert in the Microsoft Power Platform ecosystem—Power Apps, Power Automate, and Power Fx—enabling rapid low-code/no-code solutions. My expertise spans cloud architecture, CI/CD pipelines, database management, and DevSecOps practices that deliver secure, maintainable, and performant solutions across both traditional development and modern automation platforms.
        </PageHeaderDescription>
      </PageHeader>

      {/* skills and tools badges */}
      <div
        id="badges"
        className="flex flex-wrap items-center justify-center gap-2 my-4"
      >
        {mySkills.map((item) => (
          <Badge
            key={item.title}
            className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
          >
            {Icons[item.icon as keyof typeof Icons]?.({
              className: 'mr-2 size-4',
            })}
            {item.title}
          </Badge>
        ))}
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;
