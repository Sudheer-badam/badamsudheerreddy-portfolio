import os
import pypdf
import json

directory = os.path.join("public", "coursera_certs")
files = [f for f in os.listdir(directory) if f.endswith('.pdf')]

cert_titles = [
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
]

mapping = {}
for file in files:
    try:
        path = os.path.join(directory, file)
        reader = pypdf.PdfReader(path)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
        
        # Remove all spaces and lower case
        text_nospace = text.replace(" ", "").lower()
        
        matched = False
        for title in cert_titles:
            title_nospace = title.replace(" ", "").replace("—", "-").lower()
            if title_nospace in text_nospace:
                mapping[title] = file
                matched = True
                break
        
        if not matched:
            print(f"No match found for: {file}")
    except Exception as e:
        print(f"Error reading {file}: {e}")

with open("cert_mapping.json", "w") as f:
    json.dump(mapping, f, indent=2)

print("Mapped count:", len(mapping))
