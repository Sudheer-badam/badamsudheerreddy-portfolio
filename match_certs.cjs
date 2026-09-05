const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const dir = path.join(__dirname, 'public', 'coursera_certs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

const certTitles = [
  "Dynamic Programming, Greedy Algorithms",
  "Introduction To Java Database Connectivity",
  "Operating Systems and You: Becoming a Power User",
  "The Bits and Bytes of Computer Networking",
  "The Unix Workbench",
  "Spring — Ecosystem and Core",
  "Intro to Operating Systems 1: Virtualization",
  "Lambda Expressions with Java",
  "Developing Front-End Apps with React",
  "Introduction to Front-End Development",
  "Introduction to Artificial Intelligence (AI)",
  "Hardware and Operating System Foundations II",
  "Supervised Machine Learning: Regression",
  "Exploratory Data Analysis for Machine Learning",
  "Java Servlet Pages (JSPs)",
  "Introduction to Databases",
  "Cloud Application Development Foundations",
  "Python for Data Science, AI & Development",
  "Java Database Connectivity (JDBC) Introduction",
  "Hands-on Introduction to Linux Commands and Shell Scripting",
  "Introduction to Object-Oriented Programming with Java",
  "Introduction to Test and Behavior Driven Development",
  "Design Patterns"
];

async function run() {
  const mapping = {};
  for (const file of files) {
    const dataBuffer = fs.readFileSync(path.join(dir, file));
    try {
      const data = await pdf(dataBuffer);
      const text = data.text.replace(/\s+/g, ' ').toLowerCase();
      let matched = false;
      for (const title of certTitles) {
        if (text.includes(title.toLowerCase())) {
          mapping[title] = file;
          matched = true;
          break;
        }
      }
      if (!matched) {
        console.log(`No match found for: ${file}`);
        console.log('Sample text:', text.substring(0, 100));
      }
    } catch (e) {
      console.error(`Error parsing ${file}:`, e.message);
    }
  }
  console.log(JSON.stringify(mapping, null, 2));
}

run();
