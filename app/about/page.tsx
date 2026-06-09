import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Curious by Heart. Driven by Engineering.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Hi, I'm <PageHeaderHeading>Pavan Sista.</PageHeaderHeading> I design and develop custom solutions for multiple departments across my organization, 
          including Health & Safety, Enterprise Risk Management, Enterprise Response Planning, 
          Procurement, Business Innovation, Fleet & Services, Supply Chain Management etc. 
          With 5 years of experience in the public electrical utility sector, 
          I am a collaborative full-stack engineer and platform architect 
          with a strong background in .NET Core, Blazor, Power Platform, Azure services, 
          and process automation, supported by hands-on experience and a master’s degree in computer science.
        </PageHeaderDescription>
      <PageHeaderDescription>
I enjoy turning messy, manual processes into reliable software — and I've had plenty of opportunity to do that. 
My work spans the full stack: backend services in C# and .NET Core, 
cloud infrastructure on Azure, modern frontends with Blazor and React, and automation through Power Platform and CI/CD pipelines. 
I care about building things that are not just functional, 
but maintainable and observable — software that teams can actually work in over time.
</PageHeaderDescription>


<PageHeaderDescription>
  When I'm not coding, you'll probably find me experimenting with new
  technologies, improving personal projects, playing a game of pool, or
  spending time with my wife and toddler. This portfolio is a collection of
  projects, lessons learned, and things I've built along the way.
</PageHeaderDescription>

      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
