import re
import json

verifyLinks = {
  'Coursera IUP6VRD33RVC.pdf': 'https://coursera.org/verify/IUP6VRD33RVC',
  'Coursera YDG3E68DEJ45.pdf': 'https://coursera.org/verify/YDG3E68DEJ45',
  'document (10).pdf': 'https://coursera.org/verify/YTNAXMMNTVLV',
  'document (11).pdf': 'https://coursera.org/verify/ZPVEKYXS7J96',
  'document (12).pdf': 'https://coursera.org/verify/HZGZSJT8UWWW',
  'document (13).pdf': 'https://coursera.org/verify/YTNAXMMNTVLV',
  'document (14).pdf': 'https://coursera.org/verify/74C9IPC23H1U',
  'document (15).pdf': 'https://coursera.org/verify/IUP6VRD33RVC',
  'document (16).pdf': 'https://coursera.org/verify/7PC5Q1ZS144I',
  'document (17).pdf': 'https://coursera.org/verify/3RBKIVGA6OYJ',
  'document (18).pdf': 'https://coursera.org/verify/1ECNYPLWO0GX',
  'document (19).pdf': 'https://coursera.org/verify/BYVU2FBW0YFO',
  'document (20).pdf': 'https://coursera.org/verify/PN5OLRU1JMSA',
  'document (21).pdf': 'https://coursera.org/verify/IRED9L6T1RQI',
  'document (22).pdf': 'https://coursera.org/verify/LXS0PS4DQWLR',
  'document (23).pdf': 'https://coursera.org/verify/41MDU4RTE9HG',
  'document (24).pdf': 'https://coursera.org/verify/19G5APURUYK3',
  'document (25).pdf': 'https://coursera.org/verify/XMDK949PDP5A',
  'document (26).pdf': 'https://coursera.org/verify/K6K5GKFWUDYD',
  'document (27).pdf': 'https://coursera.org/verify/F281MJG34ZC7',
  'document (28).pdf': 'https://coursera.org/verify/KDGUB9VIR90I',
  'document (29).pdf': 'https://coursera.org/verify/1ECNYPLWO0GX',
  'document (4).pdf': 'https://coursera.org/verify/HCYXTHBHS60N',
  'document (5).pdf': 'https://coursera.org/verify/VV1NBZFZGF3R',
  'document (6).pdf': 'https://coursera.org/verify/A30IOM8GYCNF',
  'document (7).pdf': 'https://coursera.org/verify/YDG3E68DEJ45',
  'document (8).pdf': 'https://coursera.org/verify/ZPVEKYXS7J96',
  'document (9).pdf': 'https://coursera.org/verify/HZGZSJT8UWWW',
  'Dynamic Programming Greedy Algorithm.pdf': 'https://coursera.org/verify/RCWP4R7IE7O6',
  'certificate-1788584603154.pdf': 'https://coursera.org/verify/IUP6VRD33RVC',
  'certificate-1788586467391.pdf': 'https://coursera.org/verify/YDG3E68DEJ45'
}

with open('src/sections/Certificates.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

for filename, url in verifyLinks.items():
    fileRegexStr = re.escape(filename)
    pattern = r'(link:\s*"/coursera_certs/' + fileRegexStr + r'")'
    content = re.sub(pattern, r'\1, verifyLink: "' + url + r'"', content)

with open('src/sections/Certificates.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated Certificates.jsx')
