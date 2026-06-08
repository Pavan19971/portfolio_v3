import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Pavan Sista</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Curious by heart Full-Stack Web Developer & Platform Engineer 
        </PageHeaderHeading>
        <PageHeaderDescription>
          I design and develop custom solutions for multiple departments across my organization, 
          including Health & Safety, Enterprise Risk Management, Enterprise Response Planning, 
          Procurement, Business Innovation, Fleet & Services, Supply Chain Management etc. 
          With 5 years of experience in the public electrical utility sector, 
          I am a collaborative full-stack developer and platform architect 
          with a strong background in .NET Core, Blazor, Power Platform, Azure services, 
          and process automation, supported by hands-on experience and a master’s degree in computer science.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
