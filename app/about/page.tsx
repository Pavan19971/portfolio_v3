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
        <PageHeaderHeading>About Pavan</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          More than just a title—let’s dive deeper!
        </PageHeaderHeading>
        <PageHeaderDescription>
I design and develop custom solutions for multiple departments across my organization, including Health & Safety, 
Enterprise Risk Management, Enterprise Response Planning, Procurement, Business Innovation, Fleet & Services, 
Supply Chain Management etc. With 5 years of experience in the public electrical utility sector, 
I am a collaborative full-stack developer and platform architect with a strong background in .NET Core, Blazor, Power Platform, Azure services, 
and process automation, supported by hands-on experience and a master’s degree in computer science.
        </PageHeaderDescription>

        <PageHeaderDescription>
          With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, and visually appealing applications. Currently, I am diving deeper into backend development with Node.js and Express to expand my skill set and deliver powerful, server-side solutions.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Beyond coding, I thrive in collaborative environments and enjoy
          tackling challenging problems with creative solutions. I aim to
          contribute to impactful projects that make a difference in users'
          lives.
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
