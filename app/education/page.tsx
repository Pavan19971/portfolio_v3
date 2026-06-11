import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { certifications, education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          I learned a lot, but the real learning happens in the code editor!
        </PageHeaderHeading>
        <PageHeaderDescription>
          Education has always been the cornerstone of my journey into the tech
          world. I completed my Master's in Computer Science at Bishop's University
          and my Bachelor's in Computer Science at Jawaharlal Nehru Technological University (JNTU),
          Hyderabad, India, building a strong foundation in computer science and software development.
        </PageHeaderDescription>

        <PageHeaderDescription>
          My academic journey has been complemented by hands-on projects and
          coursework, including advanced studies in game development and core programming,
          enabling me to build practical skills and a deep understanding of modern
          technological solutions.
        </PageHeaderDescription>
      </PageHeader>

      <Tabs defaultValue="education" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>

        <TabsContent value="education" className="mt-6">
          <TimelineViewer data={education} />
        </TabsContent>

        <TabsContent value="certifications" className="mt-6">
          {certifications.length > 0 ? (
            <TimelineViewer data={certifications} />
          ) : (
            <div className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
              No certifications added yet. Add items in constants/education.ts under the certifications array.
            </div>
          )}
        </TabsContent>
      </Tabs>

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;
