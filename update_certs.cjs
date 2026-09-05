const fs = require('fs');

const mapping = {
  "Dynamic Programming, Greedy Algorithms": "/coursera_certs/Dynamic Programming Greedy Algorithm.pdf",
  "Introduction To Java Database Connectivity": "/coursera_certs/document (4).pdf",
  "Operating Systems and You: Becoming a Power User": "/coursera_certs/document (5).pdf",
  "The Bits and Bytes of Computer Networking": "/coursera_certs/document (6).pdf",
  "The Unix Workbench": "/coursera_certs/document (7).pdf",
  "Introduction to Front-End Development": "/coursera_certs/document (8).pdf",
  "Introduction to Artificial Intelligence (AI)": "/coursera_certs/document (9).pdf",
  "Hardware and Operating System Foundations II": "/coursera_certs/document (13).pdf",
  "Supervised Machine Learning: Regression": "/coursera_certs/document (14).pdf",
  "Exploratory Data Analysis for Machine Learning": "/coursera_certs/document (15).pdf",
  "Java Servlet Pages (JSPs)": "/coursera_certs/document (16).pdf",
  "Introduction to Databases": "/coursera_certs/document (17).pdf",
  "Fundamentals of Red Hat Enterprise Linux": "/coursera_certs/document (18).pdf",
  "Python for Data Science, AI & Development": "/coursera_certs/document (19).pdf",
  "Java Database Connectivity (JDBC) Introduction": "/coursera_certs/document (20).pdf",
  "Hands-on Introduction to Linux Commands and Shell Scripting": "/coursera_certs/document (21).pdf",
  "Introduction to Object-Oriented Programming with Java": "/coursera_certs/document (22).pdf",
  "Introduction to Test and Behavior Driven Development": "/coursera_certs/document (23).pdf",
  "Design Patterns": "/coursera_certs/document (24).pdf"
};

let content = fs.readFileSync('src/sections/Certificates.jsx', 'utf8');

for (const [title, pdfPath] of Object.entries(mapping)) {
  // Regex to find the object with the matching title
  const regex = new RegExp(`({[^}]*title:\\s*"${title.replace(/[.*+?^$\\{\\}()|[\\]\\\\]/g, '\\$&')}"[^}]*)link:\\s*"[^"]*"`, 'g');
  if (regex.test(content)) {
    content = content.replace(regex, `$1link: "${pdfPath}"`);
  } else {
    console.log("Could not find/replace for title:", title);
    // If not found, it means it might be a new certificate or title mismatch.
    // e.g. "Fundamentals of Red Hat Enterprise Linux" isn't in the list.
  }
}

// Remove the logo property completely from courseraCertificates
content = content.replace(/(const courseraCertificates = \[[\s\S]*?\];)/, (match) => {
    return match.replace(/,\s*logo:\s*"[^"]*"/g, '');
});

fs.writeFileSync('src/sections/Certificates.jsx', content);
console.log('Certificates.jsx updated.');
