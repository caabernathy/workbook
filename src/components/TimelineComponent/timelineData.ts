// timelineData.ts

export interface TimelineItem {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    title: "Setting up Create",
    cardTitle: "SETUP",
    cardSubtitle: "Meetup w/ a focus on two main ideas",
    cardDetailedText: [
      "• Keynote focus // Highlight Revival in Tech",
      "• Setting up for Create",
      "Setting up for Create Breakdown:",
      "- Successful Project Highlight",
      "- Playbook Highlight",
      "- Project Pitches (focused ones from previous event)",
      "- Redemptive Framework Highlight (setting up Create Roadmap)",
    ],
  },
  {
    title: "Week 1",
    cardTitle: "DISCOVER",
    cardSubtitle: "Kickoff Create Cycle",
    cardDetailedText: ["4D Cycle | Discover"],
  },
  {
    title: "Week 2",
    cardTitle: "DISCERN",
    cardSubtitle: "Continue Create Cycle",
    cardDetailedText: ["4D Cycle | Discern"],
  },
  {
    title: "Week 3",
    cardTitle: "DEVELOP",
    cardSubtitle: "Continue Create Cycle",
    cardDetailedText: ["4D Cycle | Develop"],
  },
  {
    title: "Weeks 4 - 11",
    cardTitle: "CREATE TOUCHPOINTS",
    cardSubtitle: "Weekly Create Touchpoints",
    cardDetailedText: ["(in person or via ZOOM) for project development cycle"],
  },
  {
    title: "Week 12",
    cardTitle: "DEMONSTRATE",
    cardSubtitle: "Meetup w/ subset of Create Cycle",
    cardDetailedText: [
      "4D Cycle | Demonstrate",
      "Highlight & Celebrate Project, Project Team and provide breakouts:",
      "- Project Team Debrief / Next Steps",
      "- What is FaithTech & Plugging In",
      "- Ideas for Future Projects",
    ],
  },
];
