export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  image?: string;
}

export const articles: Article[] = [
  {
    slug: "why-we-built-sheety-app",
    title: "Why We Built Sheety App: From Team Management Pain to Solution",
    excerpt: "The story of how managing a team's contributions led to the creation of Sheety App - a tool that bridges the gap between spreadsheets and specialized software.",
    content: `
      <p>Every great product starts with a problem that needs solving. For Sheety App, that problem hit close to home—literally in my daily work managing a development team.</p>
      
      <h2>The Challenge: Tracking Team Contributions</h2>
      <p>A few years ago, while managing a team, I faced a common but frustrating challenge: how to effectively track and evaluate team member contributions. Like many teams using Agile methodologies, we needed to record evaluation points (similar to story points in Jira), but with an added layer of complexity.</p>
      
      <p>Our evaluation system wasn't just about raw output—it factored in quality, requirement complexity, and various other metrics. We needed a flexible system that could handle complex calculations while remaining accessible to the team.</p>

      <h2>The Excel Experiment</h2>
      <p>The obvious first choice? Microsoft Excel. Spreadsheets seemed perfect—they're flexible, everyone knows how to use them, and formulas can handle complex calculations. So I built an elaborate system with interconnected formulas that crunched all our metrics into final contribution scores.</p>
      
      <p>It worked... for a while.</p>

      <h2>When Complexity Becomes a Prison</h2>
      <p>As our team grew and records accumulated, the spreadsheet evolved into a beast of its own. Formula dependencies stretched across multiple sheets. Each new record meant updating nested calculations. And here's where the real problem emerged:</p>
      
      <p><strong>I became the bottleneck.</strong></p>
      
      <p>Excel offered zero permission control for our needs. The sheet was so complex and fragile that I couldn't trust anyone else to edit it—not because of distrust in my team, but because one wrong move could break the entire calculation chain. Team members wanted to help, wanted to contribute to tracking, but the risk of accidentally breaking something was too high.</p>
      
      <p>When formulas needed to change (and they did, frequently), I had to carefully trace through the entire web of dependencies. What started as a time-saving tool had become a time sink.</p>

      <h2>The Search for Alternatives</h2>
      <p>Clearly, Excel wasn't the answer. I considered two obvious alternatives:</p>
      
      <ul>
        <li><strong>Build custom software:</strong> This would give us exactly what we needed, but the time and effort required seemed overwhelming for what should be a straightforward tracking system.</li>
        <li><strong>Buy specialized software:</strong> The market had options, but they were expensive and often overly complex. My needs weren't that complicated—why pay for enterprise features we'd never use?</li>
      </ul>
      
      <p>There had to be a middle ground.</p>

      <h2>The "Aha" Moment</h2>
      <p>What if we could have the best of both worlds? The flexibility and familiarity of a spreadsheet, but with the permission controls and change tracking of specialized software?</p>
      
      <p>That's when the idea crystallized: <strong>A spreadsheet-like tool with built-in permission management and robust change tracking.</strong></p>
      
      <p>This concept addressed all our pain points:</p>
      <ul>
        <li>✓ Familiar spreadsheet interface—no steep learning curve</li>
        <li>✓ Granular permission controls—team members could contribute safely</li>
        <li>✓ Change tracking—every edit documented, every formula change visible</li>
        <li>✓ Collaborative—multiple people could work without fear of breaking things</li>
        <li>✓ Right-sized complexity—powerful enough for our needs, simple enough to manage</li>
      </ul>

      <h2>From Idea to Reality</h2>
      <p>That initial frustration sparked the development of Sheety App. We set out to build a tool that wouldn't force teams to choose between the simplicity of spreadsheets and the capabilities of specialized software.</p>
      
      <p>Sheety App was designed for teams that need more than Excel can safely provide, but don't need (or want to pay for) the complexity of enterprise solutions. It's for managers who shouldn't be bottlenecks. It's for teams that want to collaborate without walking on eggshells.</p>

      <h2>Building Solutions from Real Problems</h2>
      <p>The best products are born from real frustrations. Sheety App exists because I lived through the pain of watching a simple tracking need spiral into a complex, fragile mess. If you've ever felt trapped by your own spreadsheet, paralyzed by formula dependencies, or wished your team could safely contribute to shared data—Sheety App was built for you.</p>
      
      <p>Because sometimes the best solution isn't the most complex one. It's the one that understands your actual needs and makes them simple to achieve.</p>
    `,
    author: "Quoc Nguyen",
    date: "2025-12-12",
    tags: ["story", "product", "team-management", "collaboration"]
  },
//   {
//     slug: "getting-started-with-sheety",
//     title: "Getting Started with Sheety",
//     excerpt: "Learn how to transform your spreadsheets into powerful APIs in minutes with Sheety.",
//     content: `
//       <p>Sheety is the fastest way to turn your spreadsheets into APIs. Whether you're using Google Sheets or Excel, Sheety makes it easy to access your data programmatically.</p>
      
//       <h2>Why Use Sheety?</h2>
//       <p>Spreadsheets are powerful tools for organizing data, but accessing that data from your applications can be challenging. Sheety bridges this gap by providing a RESTful API for your spreadsheets.</p>
      
//       <h2>Quick Setup</h2>
//       <ol>
//         <li>Connect your Google Sheets or Excel account</li>
//         <li>Select the spreadsheet you want to turn into an API</li>
//         <li>Configure your API settings</li>
//         <li>Start making requests!</li>
//       </ol>
      
//       <h2>What's Next?</h2>
//       <p>Once you've set up your first API, explore our documentation to learn about authentication, webhooks, and advanced features.</p>
//     `,
//     author: "Sheety Team",
//     date: "2024-12-01",
//     tags: ["tutorial", "getting-started", "api"]
//   },
//   {
//     slug: "building-dynamic-websites",
//     title: "Building Dynamic Websites with Spreadsheet Data",
//     excerpt: "Discover how to create dynamic, data-driven websites using Sheety and your favorite frontend framework.",
//     content: `
//       <p>Modern websites need to be dynamic and data-driven. With Sheety, you can use spreadsheets as your content management system while keeping the developer experience smooth.</p>
      
//       <h2>The Power of Spreadsheets as a CMS</h2>
//       <p>Spreadsheets are familiar to everyone on your team. Non-technical team members can update content without touching code, while developers get a clean API to work with.</p>
      
//       <h2>Real-World Examples</h2>
//       <ul>
//         <li>Product catalogs</li>
//         <li>Blog posts and articles</li>
//         <li>Team directories</li>
//         <li>Event listings</li>
//         <li>Restaurant menus</li>
//       </ul>
      
//       <h2>Best Practices</h2>
//       <p>Keep your spreadsheet structure simple and consistent. Use clear column headers that will become your API field names. Consider caching responses for better performance.</p>
//     `,
//     author: "Sheety Team",
//     date: "2024-11-15",
//     tags: ["tutorial", "web-development", "cms"]
//   },
//   {
//     slug: "api-authentication-guide",
//     title: "Securing Your Sheety API",
//     excerpt: "Learn about authentication options and best practices for keeping your Sheety API secure.",
//     content: `
//       <p>Security is crucial when exposing your data through an API. Sheety provides multiple authentication methods to keep your data safe.</p>
      
//       <h2>Authentication Methods</h2>
//       <p>Sheety supports several authentication methods including API keys, Basic Auth, and Bearer tokens. Choose the method that best fits your use case.</p>
      
//       <h2>API Keys</h2>
//       <p>API keys are the simplest way to secure your API. Generate a key in your Sheety dashboard and include it in your requests.</p>
      
//       <h2>Environment Variables</h2>
//       <p>Never hardcode your API keys in your source code. Use environment variables to keep your credentials secure.</p>
      
//       <h2>Rate Limiting</h2>
//       <p>Be aware of rate limits and implement proper error handling in your applications. Cache responses when possible to reduce API calls.</p>
//     `,
//     author: "Sheety Team",
//     date: "2024-10-20",
//     tags: ["security", "authentication", "best-practices"]
//   }
];
