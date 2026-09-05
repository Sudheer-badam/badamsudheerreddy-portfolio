import os
import pypdf

directory = os.path.join("public", "coursera_certs")
files = [
    "certificate-1788584603154.pdf",
    "4uxtk59k_1775034069321.pdf",
    "document (25).pdf",
    "document (26).pdf",
    "document (27).pdf",
    "document (28).pdf",
    "document (29).pdf"
]

for file in files:
    try:
        path = os.path.join(directory, file)
        reader = pypdf.PdfReader(path)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
        text = " ".join(text.split()).lower()
        print(f"\n--- {file} ---")
        print(f"{text[:200]}")
    except Exception as e:
        print(f"Error reading {file}: {e}")
