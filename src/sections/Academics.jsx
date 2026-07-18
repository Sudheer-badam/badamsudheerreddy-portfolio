import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Baby, School, BookOpen, GraduationCap, University, ExternalLink, ChevronDown, ChevronUp, Award, BookMarked, TrendingUp, CheckCircle2 } from 'lucide-react';

// Faculty designation & qualification lookup (sourced from KLU Faculty Directory)
const facultyInfo = {
  // Sem 1.1
  'Twinkle Dasari':                         { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'Kommu Siddhardha Mavo Vara Kumar':        { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Dasari Manasa':                           { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'LAKSHMUNAIDU M':                          { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Subba Reddy Vasipalli':                   { designation: 'Associate Professor', qualification: 'Ph.D' },
  'Ragamayi Sistla':                         { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'Kasturi Sai Sandeep':                     { designation: 'Assistant Professor', qualification: 'M.Tech' },
  // Sem 1.2
  'Lavanya Sivapurapu':                      { designation: 'Associate Professor', qualification: 'Ph.D' },
  'Bhanu Venkata Naga Prasad Varikuti':      { designation: 'Associate Professor', qualification: 'Ph.D' },
  'Alluri Swathi':                           { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'ADITYA ANKANA':                           { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'VISHNU DIVYA KOTAGIRI':                   { designation: 'Associate Professor', qualification: 'Ph.D' },
  // Sem 2.1
  'Ravi Kumar Tirandasu':                    { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Venkata Naresh Mandhala':                 { designation: 'Associate Professor', qualification: 'Ph.D' },
  'ARAVIND NALAMOTHU':                       { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'MALLAMPATI MAHESH':                       { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Murali Mohan Vutukuru':                   { designation: 'Associate Professor', qualification: 'Ph.D' },
  // Sem 2.2
  'Ramesh Dasari':                           { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'Mylapalli Srikanth':                      { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'RAJMAHENDRAVARAPU LAKSHMI DURGA':         { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Anjana Devi Akurathi':                    { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'BALAKRISHNA BANGARU':                     { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'komali Govindu':                          { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Munish Kumar':                            { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'SUBBA RAO MARAM':                         { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Vuyyuru Lakshma Reddy':                   { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'SOLLETI PHANI KUMAR':                     { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'Praveen Tumuluru':                        { designation: 'Associate Professor', qualification: 'Ph.D' },
  // Sem 3.1
  'Vijaya Krishna Sonthi':                   { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'BILLA MANINDHAR RAO':                     { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'NATHA PRIYA':                             { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Vudatha Chandra Prakash':                 { designation: 'Professor', qualification: 'Ph.D' },
  'sambasivarao lankoji':                    { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Sukham Romen Singh':                      { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'JALLI STALIN BABU':                       { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'BALAJI PENUBAKA':                         { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Venkateswara Rao Peddada':                { designation: 'Associate Professor', qualification: 'Ph.D' },
  'surya kiran chebrolu':                    { designation: 'Associate Professor', qualification: 'Ph.D' },
  'Dineshnath Gopinath':                     { designation: 'Assistant Professor', qualification: 'M.Tech' },
  // Sem 3.2
  'nirupma pathak':                          { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'Adapa Srinivasa Rao':                     { designation: 'Associate Professor', qualification: 'Ph.D' },
  'KAMBALA VIJAYA KUMAR':                    { designation: 'Associate Professor', qualification: 'Ph.D' },
  'Abdul Rahman A':                          { designation: 'Associate Professor', qualification: 'Ph.D' },
  'Komatigunta Nagaraju':                    { designation: 'Assistant Professor', qualification: 'M.Tech' },

  // Newly Sourced & Pending Matches (EEE, ECE, AI.DS, and 2023-24 Faculty List)
  'ADINARAYANA RAGA':                        { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'ATISHA RAI':                              { designation: 'Assistant Professor', qualification: 'M.A' },
  'Ashish Ashish':                           { designation: 'Associate Professor', qualification: 'Ph.D' },
  'Ashok Bekkanti':                          { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'CHAITANYA KUMARI MOSUGANTI':              { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'GANAPANENI SWAPNA .':                     { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'MANEESHA VADDURI':                        { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Pativada Dhana Lakshmi':                  { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Raveendra Reddy Enumula':                 { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Ravikanth Garladinne':                    { designation: 'Professor', qualification: 'Ph.D' },
  'Rojalini . Patro':                        { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'Roshini E':                               { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'S N Lakshmi Malluvalasa':                 { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'SIVANI PINNABOINA':                       { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Saleem Akram Patan':                      { designation: 'Associate Professor', qualification: 'Ph.D' },
  'Srinivas P V V S':                        { designation: 'Associate Professor', qualification: 'Ph.D' },
  'Syed Nafisa Parveen':                     { designation: 'Assistant Professor', qualification: 'M.A' },
  'VENKATA SAI SAILAJA BOKKISAM':            { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'VUNNAM ASHA LATHA':                       { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'yerakamma chapala':                       { designation: 'Assistant Professor', qualification: 'M.Tech' },

  // Sem 4.1 & Missing Faculty
  'Rajesh Kumar Kantam':                     { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'Kanthimathi Tumuluri':                    { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'Rallabandi Revathi':                      { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'PARDHU THOTTEMPUDI':                      { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Shalini Ramaraju':                        { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'SAGAR SATHULURI':                         { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'SRILAKSHMI RAMYA SAKAMUDI':               { designation: 'Assistant Professor', qualification: 'M.Tech' },
  'Noimur Rahman':                           { designation: 'Assistant Professor', qualification: 'Ph.D' },
  'Madhavarapu Chandan':                     { designation: 'Assistant Professor', qualification: 'M.Tech' },
};

const semesterData = [
  {
    sem: 'Sem 1.1',
    period: 'Aug – Dec 2023',
    sgpa: 8.85,
    credits: 20,
    courses: 7,
    promoted: true,
    courseList: [
      {
        code: '23UC1101',
        name: 'INTEGRATED PROFESSIONAL ENGLISH',
        credits: 2,
        grade: 'A',
        internal: 38,
        external: 32,
        total: 70,
        extTheory: 32,
        attendancePercent: 92,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 48, attended: 44, absent: 4, faculty: 'Twinkle Dasari' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23UC0017',
        name: 'INDIAN KNOWLEDGE SYSTEMS - VEDIC MATHEMATICS',
        credits: 0,
        grade: 'P',
        internal: 40,
        external: 23,
        total: 63,
        extTheory: 23,
        attendancePercent: 88,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 25, attended: 22, absent: 3, faculty: 'Rojalini . Patro' }
        }
      },
      {
        code: '23SC1101',
        name: 'COMPUTATIONAL THINKING FOR STRUCTURED DESIGN',
        credits: 5,
        grade: 'A',
        internal: 39,
        external: 31,
        total: 70,
        extLabs: 13,
        extTheory: 18,
        attendancePercent: 88,
        ltps: {
          L: { conducted: 37, attended: 31, absent: 6, faculty: 'Kommu Siddhardha Mavo Vara Kumar' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 24, attended: 24, absent: 0, faculty: 'Dasari Manasa' },
          S: { conducted: 54, attended: 48, absent: 6, faculty: 'Kommu Siddhardha Mavo Vara Kumar' }
        }
      },
      {
        code: '23EC1101',
        name: 'FUNDAMENTALS OF IOT AND SENSORS',
        credits: 5,
        grade: 'A+',
        internal: 52,
        external: 37,
        total: 89,
        extLabs: 16,
        extTheory: 21,
        attendancePercent: 92,
        ltps: {
          L: { conducted: 38, attended: 35, absent: 3, faculty: 'LAKSHMUNAIDU M' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 48, attended: 44, absent: 4, faculty: 'Subba Reddy Vasipalli' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23MT1002',
        name: 'DISCRETE STRUCTURES',
        credits: 4,
        grade: 'A+',
        internal: 53,
        external: 29,
        total: 82,
        extTheory: 29,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 28, attended: 28, absent: 0, faculty: 'Ragamayi Sistla' },
          T: { conducted: 28, attended: 28, absent: 0, faculty: 'Ragamayi Sistla' },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23UC1203',
        name: 'DESIGN THINKING AND INNOVATION',
        credits: 2,
        grade: 'O',
        internal: 55,
        external: 38,
        total: 93,
        extTheory: 38,
        attendancePercent: 87,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 30, attended: 26, absent: 4, faculty: 'ADINARAYANA RAGA' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23ME1103',
        name: 'DESIGN TOOL WORKSHOP',
        credits: 2,
        grade: 'O',
        internal: 56,
        external: 38,
        total: 94,
        extTheory: 38,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 52, attended: 52, absent: 0, faculty: 'Kasturi Sai Sandeep' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      }
    ],
    pdfUrl: '/1.1 EXAM RESULT.pdf',
  },
  {
    sem: 'Sem 1.2',
    period: 'Jan – May 2024',
    sgpa: 8.67,
    credits: 21,
    courses: 8,
    promoted: true,
    courseList: [
      {
        code: '23UC1202',
        name: 'ENGLISH PROFICIENCY',
        credits: 2,
        grade: 'B+',
        internal: 38,
        external: 28,
        total: 66,
        extTheory: 28,
        attendancePercent: 88,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 50, attended: 44, absent: 6, faculty: 'Lavanya Sivapurapu' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23MT1001',
        name: 'LINEAR ALGEBRA & CALCULUS FOR ENGINEERS',
        credits: 4,
        grade: 'A',
        internal: 34,
        external: 44,
        total: 78,
        extTheory: 34,
        attendancePercent: 93,
        ltps: {
          L: { conducted: 28, attended: 24, absent: 4, faculty: 'Bhanu Venkata Naga Prasad Varikuti' },
          T: { conducted: 26, attended: 26, absent: 0, faculty: 'Bhanu Venkata Naga Prasad Varikuti' },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23SC1202',
        name: 'DATA STRUCTURES',
        credits: 4,
        grade: 'A+',
        internal: 50,
        external: 34,
        total: 84,
        extLabs: 16,
        extTheory: 18,
        attendancePercent: 98,
        ltps: {
          L: { conducted: 24, attended: 24, absent: 0, faculty: 'Ashish Ashish' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 30, attended: 24, absent: 6, faculty: 'ADITYA ANKANA' },
          S: { conducted: 48, attended: 48, absent: 0, faculty: 'Ashish Ashish' }
        }
      },
      {
        code: '23SC1203',
        name: 'COMPUTATIONAL THINKING FOR OBJECT-ORIENTED DESIGN',
        credits: 4,
        grade: 'A',
        internal: 46,
        external: 33,
        total: 79,
        extLabs: 16,
        extTheory: 17,
        attendancePercent: 99,
        ltps: {
          L: { conducted: 28, attended: 28, absent: 0, faculty: 'Alluri Swathi' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 28, attended: 28, absent: 0, faculty: 'Ashok Bekkanti' },
          S: { conducted: 56, attended: 52, absent: 4, faculty: 'Alluri Swathi' }
        }
      },
      {
        code: '23EC1203',
        name: 'BASIC ELECTRICAL AND ELECTRONIC CIRCUITS',
        credits: 2,
        grade: 'A+',
        internal: 48,
        external: 39,
        total: 87,
        extTheory: 39,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 24, attended: 24, absent: 0, faculty: 'LAKSHMUNAIDU M' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23EC1202',
        name: 'DIGITAL DESIGN AND COMPUTER ARCHITECTURE',
        credits: 4,
        grade: 'O',
        internal: 51,
        external: 40,
        total: 91,
        extLabs: 16,
        extTheory: 24,
        attendancePercent: 99,
        ltps: {
          L: { conducted: 39, attended: 39, absent: 0, faculty: 'VENKATA SAI SAILAJA BOKKISAM' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 26, attended: 24, absent: 2, faculty: 'SIVANI PINNABOINA' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '22UC0021',
        name: 'SOCIAL IMMERSIVE LEARNING',
        credits: 1,
        grade: 'O',
        internal: 60,
        external: 40,
        total: 100,
        extTheory: 40,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 28, attended: 28, absent: 0, faculty: 'Roshini E' }
        }
      },
      {
        code: '23UC1202L',
        name: 'LINGUA SKILLS CERTIFICATION',
        credits: 0,
        grade: 'P',
        internal: 60,
        external: 32,
        total: 92,
        extTheory: 32,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 2, attended: 2, absent: 0, faculty: 'VISHNU DIVYA KOTAGIRI' }
        }
      }
    ],
    pdfUrl: '/1.2 EXAM RESULT.pdf',
  },
  {
    sem: 'Sem 2.1',
    period: 'Aug – Dec 2024',
    sgpa: 9.0,
    credits: 24,
    courses: 10,
    promoted: true,
    courseList: [
      {
        code: '23AD2001O',
        name: 'ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING',
        credits: 4,
        grade: 'A',
        internal: 48,
        external: 29,
        total: 77,
        extLabs: 14,
        extTheory: 15,
        attendancePercent: 93,
        ltps: {
          L: { conducted: 48, attended: 44, absent: 4, faculty: 'yerakamma chapala' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 32, attended: 30, absent: 2, faculty: 'yerakamma chapala' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23AD2102R',
        name: 'DATABASE MANAGEMENT SYSTEMS',
        credits: 4,
        grade: 'A+',
        internal: 49,
        external: 32,
        total: 81,
        extLabs: 16,
        extTheory: 16,
        attendancePercent: 92,
        ltps: {
          L: { conducted: 46, attended: 42, absent: 4, faculty: 'S N Lakshmi Malluvalasa' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 28, attended: 26, absent: 2, faculty: 'Raveendra Reddy Enumula' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23MT2014',
        name: 'THEORY OF COMPUTATION',
        credits: 4,
        grade: 'A+',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: 88,
        ltps: {
          L: { conducted: 32, attended: 30, absent: 2, faculty: 'Ravi Kumar Tirandasu' },
          T: { conducted: 30, attended: 24, absent: 6, faculty: 'Ravi Kumar Tirandasu' },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23CS2103A',
        name: 'ADVANCED OBJECT ORIENTED PROGRAMMING',
        credits: 7,
        grade: 'A+',
        internal: 47,
        external: 34,
        total: 81,
        extLabs: 14.5,
        extTheory: 19,
        attendancePercent: 83,
        ltps: {
          L: { conducted: 39, attended: 32, absent: 7, faculty: 'Venkata Naresh Mandhala' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 30, attended: 22, absent: 8, faculty: 'CHAITANYA KUMARI MOSUGANTI' },
          S: { conducted: 46, attended: 42, absent: 4, faculty: 'ARAVIND NALAMOTHU' }
        }
      },
      {
        code: '23SP2113',
        name: 'THROW BALL',
        credits: 0,
        grade: 'P',
        internal: 57,
        external: 38,
        total: 95,
        extTheory: 38,
        attendancePercent: 85,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 26, attended: 22, absent: 4, faculty: 'Pativada Dhana Lakshmi' }
        }
      },
      {
        code: '22UC0022',
        name: 'SOCIAL IMMERSIVE LEARNING',
        credits: 1,
        grade: 'A+',
        internal: 50,
        external: 35,
        total: 85,
        extTheory: 35,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 62, attended: 62, absent: 0, faculty: 'Srinivas P V V S' }
        }
      },
      {
        code: '23SDCS11A',
        name: 'LINUX ADMINISTRATION & AUTOMATION',
        credits: 4,
        grade: 'O',
        internal: 55,
        external: 37,
        total: 92,
        extTheory: 37,
        attendancePercent: 99,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 48, attended: 48, absent: 0, faculty: 'MALLAMPATI MAHESH' },
          S: { conducted: 52, attended: 50, absent: 2, faculty: 'MALLAMPATI MAHESH' }
        }
      },
      {
        code: '23UC0013',
        name: 'GLOBAL LOGIC BUILDING CONTEST PRACTICUM',
        credits: 0,
        grade: 'P',
        internal: 100,
        external: 0,
        total: 100,
        attendancePercent: 94,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 30, attended: 28, absent: 2, faculty: 'VUNNAM ASHA LATHA' }
        }
      },
      {
        code: '23CC3111',
        name: 'ORACLE CERTIFIED PROFESSIONAL: JAVA SE 11 DEVELOPER-1Z0-819',
        credits: 0,
        grade: 'GP',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: 96,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 48, attended: 46, absent: 2, faculty: 'Murali Mohan Vutukuru' }
        }
      },
      {
        code: 'CRTCODL1V1',
        name: 'CAMPUS RECRUITMENT: LOGIC BUILDING SKILLS TRAINING',
        credits: 0,
        grade: 'P',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: 100,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 22, attended: 22, absent: 0, faculty: 'Saleem Akram Patan' }
        }
      }
    ],
    pdfUrl: '/2.1 EXAM RESULT.pdf',
  },
  {
    sem: 'Sem 2.2',
    period: 'Jan – May 2025',
    sgpa: 8.89,
    credits: 28,
    courses: 11,
    promoted: true,
    courseList: [
      {
        code: '23MT2005',
        name: 'PROBABILITY, STATISTICS AND QUEUEING THEORY',
        credits: 4,
        grade: 'A',
        internal: 47,
        external: 31,
        total: 78,
        extTheory: 31,
        attendancePercent: 88,
        ltps: {
          L: { conducted: 32, attended: 28, absent: 4, faculty: 'Ramesh Dasari' },
          T: { conducted: 30, attended: 26, absent: 4, faculty: 'Ramesh Dasari' },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23CS2104R',
        name: 'OPERATING SYSTEMS',
        credits: 4,
        grade: 'A+',
        internal: 53,
        external: 35,
        total: 88,
        extLabs: 14,
        extTheory: 21,
        attendancePercent: 85,
        ltps: {
          L: { conducted: 47, attended: 40, absent: 7, faculty: 'Mylapalli Srikanth' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 32, attended: 26, absent: 6, faculty: 'Mylapalli Srikanth' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '22UC0023',
        name: 'SOCIAL IMMERSIVE LEARNING',
        credits: 1,
        grade: 'O',
        internal: 60,
        external: 40,
        total: 100,
        extTheory: 40,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { Jewels: 0, conducted: 4, attended: 4, absent: 0, faculty: 'MANEESHA VADDURI' }
        }
      },
      {
        code: '23EC2210R',
        name: 'NETWORK PROTOCOLS AND SECURITY',
        credits: 4,
        grade: 'A',
        internal: 48,
        external: 30,
        total: 78,
        extLabs: 15,
        extTheory: 15,
        attendancePercent: 88,
        ltps: {
          L: { conducted: 46, attended: 41, absent: 5, faculty: 'RAJMAHENDRAVARAPU LAKSHMI DURGA' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 32, attended: 28, absent: 6, faculty: 'RAJMAHENDRAVARAPU LAKSHMI DURGA' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23CS2205A',
        name: 'DESIGN AND ANALYSIS OF ALGORITHMS',
        credits: 7,
        grade: 'A+',
        internal: 47,
        external: 33,
        total: 80,
        extLabs: 16,
        extTheory: 17,
        attendancePercent: 87,
        ltps: {
          L: { conducted: 46, attended: 38, absent: 8, faculty: 'Anjana Devi Akurathi' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 28, attended: 28, absent: 0, faculty: 'BALAKRISHNA BANGARU' },
          S: { conducted: 64, attended: 60, absent: 4, faculty: 'komali Govindu' }
        }
      },
      {
        code: '23EC2106R',
        name: 'PROCESSORS AND CONTROLLERS',
        credits: 4,
        grade: 'A+',
        internal: 48,
        external: 32,
        total: 80,
        extLabs: 14,
        extTheory: 18,
        attendancePercent: 84,
        ltps: {
          L: { conducted: 45, attended: 37, absent: 8, faculty: 'Munish Kumar' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 30, attended: 26, absent: 4, faculty: 'Ravikanth Garladinne' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23UC0014',
        name: 'GLOBAL LOGIC BUILDING CONTEST PRACTICUM',
        credits: 0,
        grade: 'P',
        internal: 45,
        external: 34,
        total: 79,
        extTheory: 34,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 26, attended: 26, absent: 0, faculty: 'SUBBA RAO MARAM' }
        }
      },
      {
        code: '23CC3050',
        name: 'MICROSOFT CERTIFIED: AZURE FUNDAMENTALS(AZ-900)',
        credits: 0,
        grade: 'P',
        internal: 59,
        external: 40,
        total: 99,
        attendancePercent: 83,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 56, attended: 46, absent: 10, faculty: 'Vuyyuru Lakshma Reddy' }
        }
      },
      {
        code: '23SDCS12A',
        name: 'FULL STACK APPLICATION DEVELOPMENT',
        credits: 4,
        grade: 'O',
        internal: 54,
        external: 36,
        total: 90,
        extTheory: 36,
        attendancePercent: 89,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 28, attended: 24, absent: 4, faculty: 'SOLLETI PHANI KUMAR' },
          S: { conducted: 64, attended: 58, absent: 6, faculty: 'SOLLETI PHANI KUMAR' }
        }
      },
      {
        code: 'CRTCODL2V2',
        name: 'CAMPUS RECRUITMENT: CODING SKILLS TRAINING - DATA STRUCTURES',
        credits: 0,
        grade: 'P',
        internal: 58,
        external: 38,
        total: 96,
        extTheory: 38,
        attendancePercent: 45,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 40, attended: 18, absent: 22, faculty: 'JALLI STALIN BABU' }
        }
      },
      {
        code: '23IE2040',
        name: 'SOCIAL INTERNSHIP',
        credits: 0,
        grade: 'P',
        internal: 59,
        external: 40,
        total: 99,
        extTheory: 40,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 5, attended: 5, absent: 0, faculty: 'Praveen Tumuluru' }
        }
      }
    ],
    pdfUrl: '/2.2 EXAM RESULT.pdf',
  },
  {
    sem: 'Sem 3.1',
    period: 'Aug – Dec 2025',
    sgpa: 8.79,
    credits: 28,
    courses: 10,
    promoted: true,
    courseList: [
      {
        code: '23CI2001',
        name: 'ADAPTIVE SOFTWARE ENGINEERING',
        credits: 4,
        grade: 'A+',
        internal: 50,
        external: 33,
        total: 83,
        extTheory: 33,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 39, attended: 35, absent: 0, faculty: 'Vijaya Krishna Sonthi' },
          T: { conducted: 13, attended: 11, absent: 0, faculty: 'Vijaya Krishna Sonthi' },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23CS03HF',
        name: 'ADVANCED ALGORITHMS AND DATA STRUCTURES',
        credits: 4,
        grade: 'A+',
        internal: 54,
        external: 34,
        total: 88,
        extLabs: 15,
        extTheory: 19,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 43, attended: 36, absent: 0, faculty: 'BILLA MANINDHAR RAO' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 26, attended: 22, absent: 0, faculty: 'NATHA PRIYA' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23CS2239F',
        name: 'SOFTWARE VERIFICATION AND VALIDATION',
        credits: 3,
        grade: 'A+',
        internal: 47,
        external: 33,
        total: 80,
        extLabs: 15,
        extTheory: 18,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 28, attended: 26, absent: 0, faculty: 'Vudatha Chandra Prakash' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 28, attended: 26, absent: 0, faculty: 'sambasivarao lankoji' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23CS4106',
        name: 'DISTRIBUTED COMPUTING',
        credits: 2,
        grade: 'A',
        internal: 50,
        external: 29,
        total: 79,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 28, attended: 26, absent: 0, faculty: 'Sukham Romen Singh' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23MT2004',
        name: 'MATHEMATICAL PROGRAMMING',
        credits: 4,
        grade: 'A',
        internal: 50,
        external: 28,
        total: 78,
        extTheory: 28,
        attendancePercent: 95,
        ltps: {
          L: { conducted: 30, attended: 24, absent: 0, faculty: 'JALLI STALIN BABU' },
          T: { conducted: 28, attended: 26, absent: 0, faculty: 'JALLI STALIN BABU' },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23SDCS13A',
        name: 'CI/CD AND CLOUD DEVOPS',
        credits: 4,
        grade: 'A+',
        internal: 52,
        external: 35,
        total: 87,
        extTheory: 35,
        attendancePercent: 96,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 30, attended: 24, absent: 0, faculty: 'Vuyyuru Lakshma Reddy' },
          S: { conducted: 64, attended: 64, absent: 0, faculty: 'Dineshnath Gopinath' }
        }
      },
      {
        code: '23SDM3101A',
        name: 'SENTIMENT ANALYSIS',
        credits: 7,
        grade: 'A+',
        internal: 51,
        external: 34,
        total: 85,
        extLabs: 14,
        extTheory: 20,
        attendancePercent: 97,
        ltps: {
          L: { conducted: 45, attended: 41, absent: 0, faculty: 'BALAJI PENUBAKA' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 24, attended: 18, absent: 0, faculty: 'Venkateswara Rao Peddada' },
          S: { conducted: 62, attended: 52, absent: 0, faculty: 'BALAJI PENUBAKA' }
        }
      },
      {
        code: 'CRTVQRL1V2',
        name: 'CAMPUS RECRUITMENT: VERBAL APTITUDE TRAINING',
        credits: 0,
        grade: 'P',
        internal: 57,
        external: 38,
        total: 95,
        extTheory: 38,
        attendancePercent: 97,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 56, attended: 48, absent: 0, faculty: 'Syed Nafisa Parveen' }
        }
      },
      {
        code: 'CRTCODL1V2',
        name: 'CAMPUS RECRUITMENT: LOGIC BUILDING SKILLS TRAINING',
        credits: 0,
        grade: 'P',
        internal: 59,
        external: 40,
        total: 99,
        extTheory: 40,
        attendancePercent: 92,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 68, attended: 56, absent: 0, faculty: 'GANAPANENI SWAPNA .' }
        }
      },
      {
        code: '23CC3185',
        name: 'AWS CERTIFIED DATA ENGINEER- ASSOCIATE',
        credits: 0,
        grade: 'GP',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: 69,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 22, attended: 12, absent: 0, faculty: 'surya kiran chebrolu' }
        }
      }
    ],
    pdfUrl: '/3.1 EXAM RESULT.pdf',
  },
  {
    sem: 'Sem 3.2',
    period: 'Jan – May 2026',
    sgpa: 9.09,
    credits: 22,
    courses: 6,
    promoted: true,
    courseList: [
      {
        code: '23SDAD06A',
        name: 'ANALYSIS OF DIGITAL MARKETING',
        credits: 4,
        grade: 'O',
        internal: 56,
        external: 38,
        total: 94,
        extTheory: 38,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 30, attended: 28, absent: 0, faculty: 'nirupma pathak' },
          S: { conducted: 62, attended: 56, absent: 0, faculty: 'nirupma pathak' }
        }
      },
      {
        code: '23CS3202',
        name: 'NATURE INSPIRED SOFT COMPUTING',
        credits: 4,
        grade: 'A+',
        internal: 53,
        external: 31,
        total: 84,
        extTheory: 31,
        attendancePercent: 94,
        ltps: {
          L: { conducted: 32, attended: 24, absent: 0, faculty: 'Adapa Srinivasa Rao' },
          T: { conducted: 30, attended: 28, absent: 0, faculty: 'Adapa Srinivasa Rao' },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23SDM3304A',
        name: 'SOCIAL MEDIA MARKETING ANALYTICS',
        credits: 7,
        grade: 'A+',
        internal: 54,
        external: 32,
        total: 86,
        extLabs: 16,
        extTheory: 16,
        attendancePercent: 97,
        ltps: {
          L: { conducted: 46, attended: 38, absent: 0, faculty: 'KAMBALA VIJAYA KUMAR' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 32, attended: 28, absent: 0, faculty: 'KAMBALA VIJAYA KUMAR' },
          S: { conducted: 54, attended: 50, absent: 0, faculty: 'KAMBALA VIJAYA KUMAR' }
        }
      },
      {
        code: '23SDM3202A',
        name: 'OPINION MINING AND RECOMMENDER SYSTEMS',
        credits: 5,
        grade: 'A+',
        internal: 46,
        external: 34,
        total: 80,
        extTheory: 34,
        attendancePercent: 90,
        ltps: {
          L: { conducted: 48, attended: 38, absent: 0, faculty: 'Abdul Rahman A' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23UC0026',
        name: 'HUMAN VALUES, GENDER EQUALITY AND PROFESSIONAL ETHICS',
        credits: 2,
        grade: 'A',
        internal: 49,
        external: 25,
        total: 74,
        extTheory: 25,
        attendancePercent: 100,
        ltps: {
          L: { conducted: 25, attended: 22, absent: 0, faculty: 'Komatigunta Nagaraju' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23CC3184',
        name: 'WIPRO TALENTNEXT DOTNET FULL STACK',
        credits: 0,
        grade: 'P',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: 100,
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 2, attended: 2, absent: 0, faculty: 'ATISHA RAI' }
        }
      }
    ],
    pdfUrl: '/3.2 SEM END EXAM RESULT.pdf',
  },
  {
    sem: 'Sem 4.1',
    period: 'Aug – Dec 2026',
    sgpa: '-',
    credits: 26,
    courses: 8,
    promoted: false,
    courseList: [
      {
        code: '23UC0008',
        name: 'INDIAN CONSTITUTION',
        credits: 0,
        grade: '-',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: '-',
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: 'Rajesh Kumar Kantam' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23UC0009',
        name: 'ECOLOGY AND ENVIRONMENT',
        credits: 0,
        grade: '-',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: '-',
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: 'Kanthimathi Tumuluri' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: 'OEEC0004',
        name: 'SATELLITE SUB-SYSTEMS',
        credits: 3,
        grade: '-',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: '-',
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: 'Rallabandi Revathi' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: 'OEEC0011',
        name: 'IMAGE PROCESSING',
        credits: 3,
        grade: '-',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: '-',
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: 'PARDHU THOTTEMPUDI' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23SDM3405',
        name: 'DIGITAL MEDIA ANALYTICS',
        credits: 3,
        grade: '-',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: '-',
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: 'Shalini Ramaraju' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23SDM3507',
        name: 'INTELLIGENT SOCIAL MEDIA MONITORING SYSTEMS',
        credits: 3,
        grade: '-',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: '-',
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: 'SAGAR SATHULURI' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: null },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      },
      {
        code: '23IE4053A',
        name: 'ENGINEERING CAPSTONE PROJECT - 1',
        credits: 10,
        grade: '-',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: '-',
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: null },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: 'SRILAKSHMI RAMYA SAKAMUDI' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: 'JALLI STALIN BABU' }
        }
      },
      {
        code: '23CY1001',
        name: 'ENGINEERING CHEMISTRY',
        credits: 4,
        grade: '-',
        internal: '-',
        external: '-',
        total: '-',
        attendancePercent: '-',
        ltps: {
          L: { conducted: 0, attended: 0, absent: 0, faculty: 'Noimur Rahman' },
          T: { conducted: 0, attended: 0, absent: 0, faculty: null },
          P: { conducted: 0, attended: 0, absent: 0, faculty: 'Noimur Rahman' },
          S: { conducted: 0, attended: 0, absent: 0, faculty: null }
        }
      }
    ],
    pdfUrl: '#',
  }
];

const totalCredits = semesterData.reduce((s, x) => s + x.credits, 0);
const totalCourses = semesterData.reduce((s, x) => s + x.courses, 0);
const overallCGPA = 8.88;

const educationTimeline = [
  {
    level: 'Nursery to 3rd Class',
    school: 'Sri Viswasanthi Techno School',
    location: 'Nekarikallu, Guntur District - 522615',
    years: '2008–2014',
    description: 'Early childhood education — built a strong foundation of learning, curiosity, and discipline.',
    icon: Baby,
    logo: '/sri viswasanthi techno school.png',
  },
  {
    level: 'Primary School (4th Standard)',
    school: 'Oxford School',
    location: 'Narasaraopet, Guntur District - 522601',
    years: '2014–2015',
    description: 'Completed 4th Standard with excellence, developing a solid foundation in core subjects.',
    icon: School,
    logo: '/Screenshot 2026-06-02 123855.png',
  },
  {
    level: '5th to 8th Standard',
    school: 'Ravindra Bharathi Public School',
    location: 'Prakash Nagar, Narasaraopet - 522601',
    years: '2015–2018',
    description: 'Built strong fundamentals in academics and developed early interest in science and mathematics.',
    icon: School,
    logo: '/Screenshot 2026-06-02 122842.png',
  },
  {
    level: 'High School',
    school: 'Sri Chaitanya Techno Curriculum',
    location: 'Reddy Palem, Guntur District - 522509',
    years: '2018–2021',
    grade: '600 / 600 Marks in 10th Standard',
    description: 'Achieved a perfect score in 10th Standard. Excelled in Mathematics & Science.',
    icon: BookOpen,
    isHighSchool: true,
    logo: '/Screenshot 2026-06-02 122741.png',
    pdfs: [
      { label: 'Marks Memo', url: '/SCHOOL OF SECONDARY EDUCATION MARKS MEMO BY DIGILOCKER.pdf' },
      { label: 'Transfer Certificate', url: '/TRANSFER CERTIFICATE FOR 10TH STANDARD.pdf' },
    ],
  },
  {
    level: 'Intermediate (11th & 12th)',
    school: 'Sri Chaitanya Junior College',
    location: 'Gollapudi, Vijayawada - 521225',
    years: '2021–2023',
    grade: '882 / 1000 Marks — MPC Stream',
    description: 'Studied Maths, Physics, Chemistry. Secured excellent marks and qualified for engineering entrance exams.',
    icon: GraduationCap,
    isIntermediate: true,
    logo: '/Screenshot 2026-06-02 122810.png',
    pdfs: [
      { label: 'Marks Memo', url: '/Class XII Marksheet BY DIGI LOCKER.pdf' },
      { label: 'Transfer Certificate', url: '/TRANSFER CERTIFICATE FOR INTERMEDIATE COURSE.pdf' },
    ],
  },
  {
    level: 'University — B.Tech CSE',
    school: 'KL University (Koneru Lakshmaiah Education Foundation)',
    location: 'Vaddeswaram, Guntur District, AP',
    years: '2023–2027',
    grade: 'CGPA: 8.88 / 10.0',
    description: 'Pursuing B.Tech in Computer Science & Engineering. Specialising in AI/ML and Full Stack Development.',
    icon: University,
    current: true,
    isUniversity: true,
    logo: '/KL_University_logo.svg',
  },
];

const sgpaColor = (sgpa) => {
  if (sgpa >= 9.0) return '#22c55e';
  if (sgpa >= 8.5) return '#3b82f6';
  return '#f59e0b';
};

const HighSchoolDashboard = () => {
  const [expanded, setExpanded] = useState(false);
  const subjects = [
    { name: 'FIRST LANGUAGE TELUGU/SANSKRIT', max: 100, secured: 100 },
    { name: 'SECOND LANGUAGE HINDI', max: 100, secured: 100 },
    { name: 'THIRD LANGUAGE ENGLISH', max: 100, secured: 100 },
    { name: 'MATHEMATICS', max: 100, secured: 100 },
    { name: 'GENERAL SCIENCE', max: 100, secured: 100 },
    { name: 'SOCIAL STUDIES', max: 100, secured: 100 },
  ];

  return (
    <div style={{ marginTop: '1rem' }}>
      {/* Short Summary Bar */}
      <button 
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0.85rem 1.25rem', background: 'var(--uo-green-dark)', border: 'none', cursor: 'pointer',
          color: '#fff', borderLeft: '3px solid var(--uo-yellow)', textAlign: 'left'
        }}
      >
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--uo-yellow)' }}>
            Score: 600 / 600 (100% Perfect Score!)
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>
            Roll No: 2115106284
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: 'Inter', fontSize: '0.62rem', fontWeight: 700, background: '#16a34a', color: '#fff', padding: '2px 8px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            First Division
          </span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '1.25rem', border: '1px solid var(--uo-border)', background: '#fafafa', borderTop: 'none' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.25rem' }}>
                {[
                  { label: 'Medium', value: 'English' },
                  { label: 'Division', value: 'First Division' },
                  { label: 'Date of Birth', value: '31/03/2005' },
                ].map(x => (
                  <div key={x.label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontFamily: 'Inter', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--uo-grey)' }}>{x.label}</span>
                    <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-green)' }}>{x.value}</span>
                  </div>
                ))}
              </div>

              {/* Marks Table */}
              <div style={{ overflowX: 'auto', border: '1px solid var(--uo-border)', background: '#fff', marginBottom: '1rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'var(--uo-dark)' }}>
                  <thead>
                    <tr style={{ background: 'var(--uo-green)', color: '#fff', textAlign: 'left' }}>
                      <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Subject Name</th>
                      <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', width: '100px' }}>Max Marks</th>
                      <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', width: '120px' }}>Marks Secured</th>
                      <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', width: '80px' }}>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((sub, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--uo-border)', background: idx % 2 === 0 ? 'rgba(0,0,0,0.01)' : 'transparent' }}>
                        <td style={{ padding: '8px 12px', fontWeight: 600, color: 'var(--uo-green)' }}>{sub.name}</td>
                        <td style={{ padding: '8px 12px', textAlign: 'center', fontWeight: 600 }}>{sub.max}</td>
                        <td style={{ padding: '8px 12px', textAlign: 'center', fontWeight: 700, color: '#16a34a' }}>{sub.secured}</td>
                        <td style={{ padding: '8px 12px', textAlign: 'center', fontWeight: 700 }}>100%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* PDF Links */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  { label: 'Marks Memo', url: '/SCHOOL OF SECONDARY EDUCATION MARKS MEMO BY DIGILOCKER.pdf' },
                  { label: 'Transfer Certificate', url: '/TRANSFER CERTIFICATE FOR 10TH STANDARD.pdf' }
                ].map(p => (
                  <a
                    key={p.label}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 14px', border: '1px solid var(--uo-green)', color: 'var(--uo-green)', fontFamily: 'Inter', fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s, color 0.2s', background: '#fff' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--uo-green)'; e.currentTarget.style.color = 'var(--uo-yellow)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--uo-green)'; }}
                  >
                    <ExternalLink size={11} /> View SSC {p.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const IntermediateDashboard = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  const firstYearSubjects = [
    { code: '01', name: 'ENGLISH', max: 100, secured: 74 },
    { code: '17', name: 'SANSKRIT', max: 100, secured: 94 },
    { code: '31', name: 'MATHEMATICS - A', max: 75, secured: 67 },
    { code: '32', name: 'MATHEMATICS - B', max: 75, secured: 61 },
    { code: '41', name: 'PHYSICS', max: 60, secured: 57 },
    { code: '42', name: 'CHEMISTRY', max: 60, secured: 48 },
  ];

  const secondYearSubjects = [
    { code: '02', name: 'ENGLISH', max: 100, secured: 82 },
    { code: '18', name: 'SANSKRIT', max: 100, secured: 97 },
    { code: '31', name: 'MATHEMATICS - A', max: 75, secured: 66 },
    { code: '32', name: 'MATHEMATICS - B', max: 75, secured: 73 },
    { code: '41', name: 'PHYSICS', max: 60, secured: 56 },
    { code: '42', name: 'CHEMISTRY', max: 60, secured: 51 },
    { code: '43', name: 'PHYSICS PRACTICAL', max: 30, secured: 28 },
    { code: '44', name: 'CHEMISTRY PRACTICAL', max: 30, secured: 28 },
  ];

  const firstYearTotalSecured = firstYearSubjects.reduce((s, x) => s + x.secured, 0);
  const firstYearTotalMax = firstYearSubjects.reduce((s, x) => s + x.max, 0);
  const secondYearTotalSecured = secondYearSubjects.reduce((s, x) => s + x.secured, 0);
  const secondYearTotalMax = secondYearSubjects.reduce((s, x) => s + x.max, 0);

  const years = [
    {
      label: 'First Year (11th Standard)',
      secured: firstYearTotalSecured,
      max: firstYearTotalMax,
      percentage: ((firstYearTotalSecured / firstYearTotalMax) * 100).toFixed(1) + '%',
      subjects: firstYearSubjects
    },
    {
      label: 'Second Year (12th Standard)',
      secured: secondYearTotalSecured,
      max: secondYearTotalMax,
      percentage: ((secondYearTotalSecured / secondYearTotalMax) * 100).toFixed(1) + '%',
      subjects: secondYearSubjects
    }
  ];

  return (
    <div style={{ marginTop: '1.5rem' }}>
      
      {/* Short Summary Grid */}
      <div className="dashboard-stats-grid intermediate-stats">
        {[
          { label: 'Grand Total', value: '882 / 1000', color: 'var(--uo-yellow)' },
          { label: 'Overall Grade', value: 'A Grade', color: '#22c55e' },
          { label: 'MPC Percentage', value: '88.2%', color: '#3b82f6' }
        ].map(stat => (
          <div key={stat.label} style={{ background: 'var(--uo-green-dark)', padding: '1rem', borderLeft: `3px solid ${stat.color}`, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontFamily: 'Inter', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{stat.label}</span>
            <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.3rem', fontWeight: 900, color: '#fff' }}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Expandable Years Breakdown */}
      <div style={{ fontFamily: 'Inter', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-grey)', marginBottom: '0.75rem' }}>Yearly Breakdown</div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        {years.map((y, idx) => (
          <div key={y.label} style={{ border: '1px solid var(--uo-border)', background: 'var(--uo-white)' }}>
            <button
              onClick={() => setExpandedYear(expandedYear === idx ? null : idx)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '0.85rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            >
              <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', fontWeight: 700, color: 'var(--uo-green)', flex: 1 }}>{y.label}</span>
              <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', fontWeight: 600, color: 'var(--uo-grey)' }}>{y.secured} / {y.max} Marks</span>
              <span style={{ fontFamily: 'Inter', fontSize: '0.72rem', fontWeight: 700, color: '#fff', background: '#3b82f6', padding: '2px 8px' }}>{y.percentage}</span>
              <span style={{ color: 'var(--uo-grey)', flexShrink: 0 }}>
                {expandedYear === idx ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </span>
            </button>

            <AnimatePresence>
              {expandedYear === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.28 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid var(--uo-border)', background: '#fafafa' }}>
                    <div style={{ overflowX: 'auto', border: '1px solid var(--uo-border)', background: '#fff', marginTop: '1rem' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'var(--uo-dark)' }}>
                        <thead>
                          <tr style={{ background: 'var(--uo-green)', color: '#fff', textAlign: 'left' }}>
                            <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', width: '80px' }}>Code</th>
                            <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Subject</th>
                            <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', width: '100px' }}>Max Marks</th>
                            <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', width: '120px' }}>Marks Secured</th>
                            <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', width: '100px' }}>Percentage</th>
                          </tr>
                        </thead>
                        <tbody>
                          {y.subjects.map((sub, sIdx) => (
                            <tr key={sIdx} style={{ borderBottom: '1px solid var(--uo-border)', background: sIdx % 2 === 0 ? 'rgba(0,0,0,0.01)' : 'transparent' }}>
                              <td style={{ padding: '8px 12px', fontWeight: 700, color: 'var(--uo-green)' }}>{sub.code}</td>
                              <td style={{ padding: '8px 12px', fontWeight: 500 }}>{sub.name}</td>
                              <td style={{ padding: '8px 12px', textAlign: 'center', fontWeight: 600 }}>{sub.max}</td>
                              <td style={{ padding: '8px 12px', textAlign: 'center', fontWeight: 700, color: sub.secured >= (sub.max*0.9) ? '#16a34a' : 'var(--uo-dark)' }}>{sub.secured}</td>
                              <td style={{ padding: '8px 12px', textAlign: 'center', fontWeight: 700 }}>{((sub.secured / sub.max) * 100).toFixed(0)}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Co-Curricular & Ethics Block */}
        <div style={{ border: '1px solid var(--uo-border)', background: 'var(--uo-white)', padding: '0.85rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Inter', fontSize: '0.72rem', fontWeight: 700, color: 'var(--uo-green)' }}>ENVIRONMENTAL EDUCATION</span>
            <span style={{ fontFamily: 'Inter', fontSize: '0.72rem', fontWeight: 700, color: 'var(--uo-green)' }}>ETHICS &amp; HUMAN VALUES</span>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontFamily: 'Inter', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#16a34a', background: '#dcfce7', padding: '2px 8px' }}>
            <CheckCircle2 size={10} /> Qualified
          </span>
        </div>
      </div>

      {/* PDF links */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {[
          { label: 'Class XII Marksheet', url: '/Class XII Marksheet BY DIGI LOCKER.pdf' },
          { label: 'Transfer Certificate', url: '/TRANSFER CERTIFICATE FOR INTERMEDIATE COURSE.pdf' }
        ].map(p => (
          <a
            key={p.label}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 14px', border: '1px solid var(--uo-green)', color: 'var(--uo-green)', fontFamily: 'Inter', fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s, color 0.2s', background: '#fff' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--uo-green)'; e.currentTarget.style.color = 'var(--uo-yellow)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--uo-green)'; }}
          >
            <ExternalLink size={11} /> {p.label}
          </a>
        ))}
      </div>

    </div>
  );
};

const UniversityDashboard = () => {
  const [expandedSem, setExpandedSem] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null);

  return (
    <div style={{ marginTop: '1.5rem' }}>

      {/* Summary Stats */}
      <div className="dashboard-stats-grid">
        {[
          { icon: Award, label: 'CGPA', value: `${overallCGPA} / 10`, color: '#22c55e' },
          { icon: BookMarked, label: 'Total Credits', value: totalCredits, color: 'var(--uo-yellow)' },
          { icon: BookOpen, label: 'Courses Done', value: totalCourses, color: '#3b82f6' },
          { icon: TrendingUp, label: 'Sems Completed', value: `${semesterData.length} / 8`, color: '#a855f7' },
        ].map(stat => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} style={{ background: 'var(--uo-green-dark)', padding: '1rem', borderLeft: `3px solid ${stat.color}`, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Icon size={14} color={stat.color} />
                <span style={{ fontFamily: 'Inter', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{stat.label}</span>
              </div>
              <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.3rem', fontWeight: 900, color: '#fff' }}>{stat.value}</span>
            </div>
          );
        })}
      </div>

      {/* SGPA Bar Chart */}
      <div style={{ background: 'var(--uo-green-dark)', padding: '1.25rem', marginBottom: '1.25rem', borderLeft: '3px solid var(--uo-yellow)' }}>
        <div style={{ fontFamily: 'Inter', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>SGPA Progression</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '80px' }}>
          {semesterData.map(s => {
            const heightPct = s.sgpa === '-' ? 0 : ((s.sgpa - 7) / 3) * 100;
            return (
              <div key={s.sem} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', height: '100%', justifyContent: 'flex-end' }}>
                <span style={{ fontFamily: 'Inter', fontSize: '0.55rem', fontWeight: 700, color: '#fff' }}>{s.sgpa}</span>
                <div style={{ width: '100%', height: `${Math.max(0, heightPct)}%`, background: s.sgpa === '-' ? 'rgba(255,255,255,0.2)' : sgpaColor(s.sgpa), minHeight: '8px', transition: 'height 0.5s ease' }} />
                <span style={{ fontFamily: 'Inter', fontSize: '0.52rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', lineHeight: 1.2 }}>{s.sem}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Per-Semester Cards */}
      <div style={{ fontFamily: 'Inter', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-grey)', marginBottom: '0.75rem' }}>Semester Breakdown</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {semesterData.map((s, i) => (
          <div key={s.sem} style={{ border: '1px solid var(--uo-border)', background: 'var(--uo-white)' }}>
            {/* Row header */}
            <button
              onClick={() => setExpandedSem(expandedSem === i ? null : i)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '0.85rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            >
              {/* Sem label */}
              <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', fontWeight: 700, color: 'var(--uo-green)', minWidth: '52px' }}>{s.sem}</span>

              {/* Period */}
              <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: 'var(--uo-grey)', flex: 1 }}>{s.period}</span>

              {/* SGPA badge */}
              <span style={{ fontFamily: 'Inter', fontSize: '0.72rem', fontWeight: 700, color: '#fff', background: sgpaColor(s.sgpa), padding: '2px 8px' }}>
                SGPA {s.sgpa}
              </span>

              {/* Credits */}
              <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', fontWeight: 600, color: 'var(--uo-dark)', minWidth: '60px', textAlign: 'center' }}>{s.credits} credits</span>

              {/* Promoted badge */}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontFamily: 'Inter', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: s.sgpa === '-' ? '#d97706' : (s.promoted ? '#16a34a' : '#dc2626'), background: s.sgpa === '-' ? '#fef3c7' : (s.promoted ? '#dcfce7' : '#fee2e2'), padding: '2px 8px' }}>
                <CheckCircle2 size={10} /> {s.sgpa === '-' ? 'Ongoing' : (s.promoted ? 'Promoted' : 'Not Promoted')}
              </span>

              {/* Expand icon */}
              <span style={{ color: 'var(--uo-grey)', flexShrink: 0 }}>
                {expandedSem === i ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </span>
            </button>

            {/* Expanded details */}
            <AnimatePresence>
              {expandedSem === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.28 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid var(--uo-border)', background: '#fafafa' }}>
                    {/* Stats row */}
                    <div style={{ display: 'flex', gap: '2rem', padding: '1rem 0', flexWrap: 'wrap' }}>
                      {[
                        { label: 'Courses Completed', value: s.courses },
                        { label: 'Credits Earned', value: s.credits },
                        { label: 'SGPA', value: s.sgpa },
                        { label: 'Cumulative Credits', value: semesterData.slice(0, i + 1).reduce((a, x) => a + x.credits, 0) },
                      ].map(stat => (
                        <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <span style={{ fontFamily: 'Inter', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--uo-grey)' }}>{stat.label}</span>
                          <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', fontWeight: 700, color: 'var(--uo-green)' }}>{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Courses Grid Table */}
                    <div style={{ marginTop: '0.5rem' }}>
                      <div style={{ fontFamily: 'Inter', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--uo-grey)', marginBottom: '0.6rem' }}>Subjects Studied</div>
                      
                      <div style={{ overflowX: 'auto', border: '1px solid var(--uo-border)', background: '#fff' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'var(--uo-dark)' }}>
                          <thead>
                            <tr style={{ background: 'var(--uo-green)', color: '#fff', textAlign: 'left' }}>
                              <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Code</th>
                              <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Course Title</th>
                              <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center', width: '60px' }}>Credits</th>
                              <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center', width: '110px' }}>Marks (Total/Int/Ext)</th>
                              <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center', width: '80px' }}>Attendance</th>
                              <th style={{ padding: '8px 12px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center', width: '60px' }}>Grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            {s.courseList.map((course, idx) => {
                              const courseKey = `${s.sem}-${course.code}`;
                              const isExpanded = expandedCourse === courseKey;
                              const hasMarks = course.total !== '-';
                              
                              return (
                                <React.Fragment key={idx}>
                                  <tr 
                                    onClick={() => {
                                      setExpandedCourse(isExpanded ? null : courseKey);
                                    }}
                                    style={{ 
                                      borderBottom: '1px solid var(--uo-border)', 
                                      background: idx % 2 === 0 ? 'rgba(0,0,0,0.01)' : 'transparent',
                                      cursor: 'pointer',
                                      transition: 'background 0.2s'
                                    }}
                                    className="course-row-hover"
                                  >
                                    <td style={{ padding: '8px 12px', fontWeight: 700, color: 'var(--uo-green)' }}>{course.code}</td>
                                    <td style={{ padding: '8px 12px', fontWeight: 500 }}>
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span>{course.name}</span>
                                        <span style={{ color: 'var(--uo-grey)', fontSize: '0.6rem', display: 'inline-flex', alignItems: 'center' }}>
                                          {isExpanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                                        </span>
                                      </div>
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', fontWeight: 600 }}>{course.credits}</td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center', fontWeight: 600 }}>
                                      {hasMarks ? (
                                        <span>
                                          <strong style={{ color: 'var(--uo-green)' }}>{course.total}</strong>
                                          <span style={{ color: 'var(--uo-grey)', fontSize: '0.65rem', marginLeft: '4px' }}>
                                            ({course.internal}/{course.external})
                                          </span>
                                        </span>
                                      ) : (
                                        <span style={{ color: 'var(--uo-grey)' }}>-</span>
                                      )}
                                    </td>
                                    <td style={{ 
                                      padding: '8px 12px', 
                                      textAlign: 'center', 
                                      fontWeight: 700, 
                                      color: course.attendancePercent >= 85 ? '#16a34a' : course.attendancePercent >= 75 ? '#d97706' : '#dc2626' 
                                    }}>
                                      {course.attendancePercent}%
                                    </td>
                                    <td style={{ padding: '8px 12px', textAlign: 'center' }}>
                                      <span style={{
                                        display: 'inline-block',
                                        padding: '2px 8px',
                                        fontWeight: 700,
                                        fontSize: '0.68rem',
                                        background: course.grade === 'O' ? '#dcfce7' : course.grade === 'A+' ? '#e0f2fe' : course.grade === 'A' ? '#fef9c3' : '#f3f4f6',
                                        color: course.grade === 'O' ? '#15803d' : course.grade === 'A+' ? '#0369a1' : course.grade === 'A' ? '#a16207' : '#374151',
                                        borderRadius: '2px'
                                      }}>
                                        {course.grade}
                                      </span>
                                    </td>
                                  </tr>
                                  {isExpanded && (
                                    <tr style={{ background: '#fcfdfa' }}>
                                      <td colSpan={6} style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--uo-border)' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                          
                                          {/* Marks breakdown if available */}
                                          {hasMarks && (
                                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                              <div style={{ flex: '1 1 140px', background: '#fff', padding: '0.75rem 1rem', border: '1px solid var(--uo-border)', borderTop: '3px solid var(--uo-green)', borderRadius: '4px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                                                <span style={{ display: 'block', fontFamily: 'Inter', fontSize: '0.58rem', fontWeight: 700, color: 'var(--uo-grey)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Internal Marks</span>
                                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                                  <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', fontWeight: 900, color: 'var(--uo-green)' }}>{course.internal}</span>
                                                  <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: 'var(--uo-grey)' }}>/ 60</span>
                                                </div>
                                                <div style={{ width: '100%', height: '4px', background: '#f3f4f6', borderRadius: '2px', marginTop: '6px', overflow: 'hidden' }}>
                                                  <div style={{ width: `${(course.internal / 60) * 100}%`, height: '100%', background: 'var(--uo-green)' }} />
                                                </div>
                                              </div>

                                              <div style={{ flex: '1 1 160px', background: '#fff', padding: '0.75rem 1rem', border: '1px solid var(--uo-border)', borderTop: '3px solid #3b82f6', borderRadius: '4px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                                                <span style={{ display: 'block', fontFamily: 'Inter', fontSize: '0.58rem', fontWeight: 700, color: 'var(--uo-grey)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>External Marks</span>
                                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                                  <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', fontWeight: 900, color: '#3b82f6' }}>{course.external}</span>
                                                  <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: 'var(--uo-grey)' }}>/ 40</span>
                                                </div>
                                                {(course.extLabs !== undefined || course.extTheory !== undefined) ? (
                                                  <div style={{ marginTop: '6px', fontSize: '0.65rem', color: 'var(--uo-grey)', fontFamily: 'Inter', display: 'flex', gap: '8px' }}>
                                                    {course.extLabs !== undefined && <span>Labs: <strong style={{ color: 'var(--uo-dark)' }}>{course.extLabs}</strong></span>}
                                                    {course.extTheory !== undefined && <span>Theory: <strong style={{ color: 'var(--uo-dark)' }}>{course.extTheory}</strong></span>}
                                                  </div>
                                                ) : (
                                                  <div style={{ width: '100%', height: '4px', background: '#f3f4f6', borderRadius: '2px', marginTop: '6px', overflow: 'hidden' }}>
                                                    <div style={{ width: `${(course.external / 40) * 100}%`, height: '100%', background: '#3b82f6' }} />
                                                  </div>
                                                )}
                                              </div>

                                              <div style={{ flex: '1 1 140px', background: '#fff', padding: '0.75rem 1rem', border: '1px solid var(--uo-border)', borderTop: '3px solid var(--uo-yellow)', borderRadius: '4px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                                                <span style={{ display: 'block', fontFamily: 'Inter', fontSize: '0.58rem', fontWeight: 700, color: 'var(--uo-grey)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Total Obtained</span>
                                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                                  <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', fontWeight: 900, color: 'var(--uo-green)' }}>{course.total}</span>
                                                  <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: 'var(--uo-grey)' }}>/ 100</span>
                                                </div>
                                                <div style={{ width: '100%', height: '4px', background: '#f3f4f6', borderRadius: '2px', marginTop: '6px', overflow: 'hidden' }}>
                                                  <div style={{ width: `${course.total}%`, height: '100%', background: 'var(--uo-yellow)' }} />
                                                </div>
                                              </div>
                                            </div>
                                          )}

                                          {/* LTPS Attendance & Faculty Component Breakdown */}
                                          <div style={{ marginTop: '0.25rem' }}>
                                            <span style={{ display: 'block', fontFamily: 'Inter', fontSize: '0.62rem', fontWeight: 700, color: 'var(--uo-grey)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                                              LTPS Attendance &amp; Faculty Details
                                            </span>
                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                                              {['L', 'T', 'P', 'S'].map(compKey => {
                                                const compName = { L: 'Lecture', T: 'Tutorial', P: 'Practical', S: 'Skill' }[compKey];
                                                const compData = course.ltps ? course.ltps[compKey] : null;
                                                const isConducted = compData && compData.conducted > 0;
                                                
                                                if (!compData) return null;
                                                const pct = isConducted ? Math.round((compData.attended / compData.conducted) * 100) : 0;
                                                
                                                return (
                                                  <div 
                                                    key={compKey} 
                                                    style={{ 
                                                      background: '#fff', 
                                                      padding: '0.75rem', 
                                                      border: '1px solid var(--uo-border)', 
                                                      borderTop: `3px solid ${isConducted || compData.faculty ? 'var(--uo-green)' : '#e5e7eb'}`, 
                                                      borderRadius: '4px',
                                                      opacity: isConducted || compData.faculty ? 1 : 0.45
                                                    }}
                                                  >
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                                      <span style={{ fontFamily: 'Inter', fontSize: '0.68rem', fontWeight: 700, color: isConducted ? 'var(--uo-dark)' : 'var(--uo-grey)' }}>
                                                        {compName} ({compKey})
                                                      </span>
                                                      {isConducted ? (
                                                        <span style={{ 
                                                          fontFamily: 'Inter', 
                                                          fontSize: '0.6rem', 
                                                          fontWeight: 700, 
                                                          color: pct >= 85 ? '#16a34a' : pct >= 75 ? '#d97706' : '#dc2626',
                                                          background: pct >= 85 ? '#dcfce7' : pct >= 75 ? '#fef9c3' : '#fee2e2',
                                                          padding: '1px 6px',
                                                          borderRadius: '2px'
                                                        }}>
                                                          {pct}%
                                                        </span>
                                                      ) : (
                                                        <span style={{ fontFamily: 'Inter', fontSize: '0.58rem', color: 'var(--uo-grey)', fontStyle: 'italic' }}>
                                                          N/A
                                                        </span>
                                                      )}
                                                    </div>

                                                    {compData.faculty && (() => {
                                                      const info = facultyInfo[compData.faculty];
                                                      return (
                                                        <div style={{ marginBottom: '6px' }}>
                                                          <span style={{ display: 'block', fontFamily: 'Inter', fontSize: '0.55rem', color: 'var(--uo-grey)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>Faculty</span>
                                                          <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', fontWeight: 700, color: 'var(--uo-dark)', display: 'block', lineHeight: 1.3 }}>
                                                            {compData.faculty}
                                                          </span>
                                                          {info && (
                                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '5px' }}>
                                                              <span style={{
                                                                fontFamily: 'Inter', fontSize: '0.58rem', fontWeight: 600,
                                                                color: info.designation === 'Professor' ? '#7c3aed' : info.designation === 'Associate Professor' ? '#0369a1' : '#15803d',
                                                                background: info.designation === 'Professor' ? '#ede9fe' : info.designation === 'Associate Professor' ? '#e0f2fe' : '#dcfce7',
                                                                padding: '1px 7px', borderRadius: '2px', letterSpacing: '0.3px'
                                                              }}>
                                                                {info.designation}
                                                              </span>
                                                              <span style={{
                                                                fontFamily: 'Inter', fontSize: '0.58rem', fontWeight: 600,
                                                                color: info.qualification === 'Ph.D' ? '#92400e' : '#374151',
                                                                background: info.qualification === 'Ph.D' ? '#fef3c7' : '#f3f4f6',
                                                                padding: '1px 7px', borderRadius: '2px', letterSpacing: '0.3px'
                                                              }}>
                                                                {info.qualification}
                                                              </span>
                                                            </div>
                                                          )}
                                                        </div>
                                                      );
                                                    })()}

                                                    {isConducted ? (
                                                      <div style={{ marginTop: '8px' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter', fontSize: '0.62rem', color: 'var(--uo-grey)' }}>
                                                          <span>Attended: <strong>{compData.attended}</strong></span>
                                                          <span>Conducted: <strong>{compData.conducted}</strong></span>
                                                          <span>Absent: <strong style={{ color: compData.absent > 0 ? '#dc2626' : 'var(--uo-grey)' }}>{compData.absent}</strong></span>
                                                        </div>
                                                        <div style={{ width: '100%', height: '3px', background: '#f3f4f6', borderRadius: '1.5px', marginTop: '6px', overflow: 'hidden' }}>
                                                          <div style={{ width: `${pct}%`, height: '100%', background: pct >= 85 ? '#16a34a' : pct >= 75 ? '#d97706' : '#dc2626' }} />
                                                        </div>
                                                      </div>
                                                    ) : (
                                                      <div style={{ fontFamily: 'Inter', fontSize: '0.62rem', color: 'var(--uo-grey)', fontStyle: 'italic', marginTop: '8px' }}>
                                                        No sessions conducted
                                                      </div>
                                                    )}
                                                  </div>
                                                );
                                              })}
                                            </div>
                                          </div>

                                        </div>
                                      </td>
                                    </tr>
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* PDF link */}
                    <div style={{ marginTop: '1rem' }}>
                      <a
                        href={s.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 16px', border: '1px solid var(--uo-green)', color: 'var(--uo-green)', fontFamily: 'Inter', fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s, color 0.2s', background: '#fff' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--uo-green)'; e.currentTarget.style.color = 'var(--uo-yellow)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--uo-green)'; }}
                      >
                        <ExternalLink size={11} /> View Official Result Sheet
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Total credits summary bar */}
      <div style={{ marginTop: '1rem', background: 'var(--uo-green)', padding: '0.85rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
        <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Total Cumulative Credits Completed</span>
        <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', fontWeight: 900, color: 'var(--uo-yellow)' }}>{totalCredits} / 173 required</span>
      </div>
    </div>
  );
};

const Academics = () => {
  return (
    <section id="academics" style={{ background: 'var(--uo-cream)', padding: '80px 20px' }}>
      <div className="section-inner">

        {/* Section heading */}
        <div className="section-heading-bar">
          <span className="section-label">Education</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--uo-green)' }}>Academic Timeline</h2>
          <div className="editorial-divider" />
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '36px' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '10px', top: 0, bottom: 0, width: '3px', background: 'var(--uo-green)' }} />

          {educationTimeline.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.level}
                id={edu.isUniversity ? 'academics-university' : undefined}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                style={{ position: 'relative', marginBottom: '1.75rem', scrollMarginTop: '80px' }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: '-32px', top: '20px',
                  width: '22px', height: '22px',
                  background: edu.current ? 'var(--uo-yellow)' : 'var(--uo-green)',
                  border: '3px solid var(--uo-cream)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 2,
                }} />

                {/* Card */}
                <div className="editorial-card" style={{ borderTopColor: edu.current ? 'var(--uo-yellow)' : 'var(--uo-green)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {edu.logo && (
                        <div style={{
                          width: '48px', height: '48px', flexShrink: 0,
                          background: '#fff',
                          border: '2px solid var(--uo-border)',
                          borderRadius: '8px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          overflow: 'hidden',
                          padding: '4px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                        }}>
                          <img
                            src={edu.logo}
                            alt={edu.school + ' logo'}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            onError={e => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                      )}
                      <div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-grey)' }}>{edu.years}</div>
                        <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', fontWeight: 700, color: 'var(--uo-dark)', marginTop: '2px' }}>{edu.level}</h3>
                      </div>
                    </div>
                    {edu.current && (
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 10px', background: 'var(--uo-yellow)', color: 'var(--uo-green-dark)' }}>
                        CURRENT
                      </span>
                    )}
                  </div>

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: 'var(--uo-dark)', marginBottom: '2px' }}>{edu.school}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--uo-grey)', marginBottom: '0.5rem' }}>{edu.location}</p>

                  {edu.grade && (
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 700, color: 'var(--uo-green)', marginBottom: '0.5rem', borderLeft: '3px solid var(--uo-yellow)', paddingLeft: '10px' }}>
                      {edu.grade}
                    </p>
                  )}

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--uo-grey)', marginBottom: edu.pdfs || edu.isUniversity || edu.isHighSchool || edu.isIntermediate ? '1rem' : 0 }}>
                    {edu.description}
                  </p>

                  {/* Regular PDF links for non-university/non-high/non-inter entries */}
                  {edu.pdfs && !edu.isHighSchool && !edu.isIntermediate && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {edu.pdfs.map(p => (
                        <a
                          key={p.label}
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 14px', border: '1px solid var(--uo-green)', color: 'var(--uo-green)', fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.5px', textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'var(--uo-green)'; e.currentTarget.style.color = 'var(--uo-yellow)'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--uo-green)'; }}
                        >
                          <ExternalLink size={11} /> {p.label}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* High School Dashboard */}
                  {edu.isHighSchool && <HighSchoolDashboard />}

                  {/* Intermediate Dashboard */}
                  {edu.isIntermediate && <IntermediateDashboard />}

                  {/* University Semester Dashboard */}
                  {edu.isUniversity && <UniversityDashboard />}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Responsive overrides */}
        <style>{`
          @media (max-width: 640px) {
            #academics .sem-stats-grid { grid-template-columns: 1fr 1fr !important; }
          }
          .course-row-hover:hover {
            background-color: rgba(22, 163, 74, 0.04) !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Academics;
