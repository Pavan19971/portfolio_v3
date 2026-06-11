import { TimelineViewerData } from '@/types/TimelineViewer.types';

export const education: TimelineViewerData[] = [
  {
    title:
      "Master of Computer Science · Bishop's  University · Quebec, Canada",
    date: 'Sept 2019 – Feb 2021',
    description:
      'Achieved the highest grade in the Game Design course, where I developed an isometric-view game using Unity and C#.',
  },
  {
    title:
      'Bachelor of Computer Science · Jawaharlal Nehru Technological University · Hyderabad, India',
    date: 'Sept 2012 – June 2018',
    description:
      'Achieved top grades in C and Java programming courses.',
  },
];

export const certifications: TimelineViewerData[] = [
  {
    title: 'Microsoft Certified: Azure Developer Associate (AZ-204) · Microsoft',
    date: 'May 2025',
    description:
      'Validated expertise in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure, including compute, storage, security, monitoring, and DevOps-aligned deployment practices.',
    latest: true,
  },
  {
    title: 'ITIL Foundation Certificate in IT Service Management · AXELOS',
    date: 'May 2022',
    description:
      'Demonstrated foundational knowledge of ITIL service management principles, including incident, problem, change, and service request management to improve service quality and operational reliability.',
  },
];

export const certificationsTemplateJson = [
  {
    "title": "Certification Name · Issuing Organization",
    "date": "Month YYYY",
    "description": "What this certification covers and how you applied it.",
    "latest": false,
  },
];