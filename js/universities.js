// Global University Database
const UNIVERSITY_DATA = {
    "Vietnam": [
        {
            name: "Hanoi University of Science and Technology",
            shortName: "HUST",
            domain: "hust.edu.vn",
            logo: "https://logo.clearbit.com/hust.edu.vn",
            color: "#C8102E",
            layout: "vertical",
            address: "No. 1 Dai Co Viet, Hai Ba Trung, Hanoi, Vietnam",
            majors: ["IT1 - Information Technology", "IT2 - Computer Science", "ET - Electronics & Telecommunications", "ME - Mechanical Engineering", "CH - Chemical Engineering"]
        },
        {
            name: "VNU University of Engineering and Technology",
            shortName: "VNU-UET",
            domain: "uet.vnu.edu.vn",
            logo: "https://logo.clearbit.com/uet.vnu.edu.vn",
            color: "#003DA5",
            layout: "horizontal",
            address: "144 Xuan Thuy, Cau Giay, Hanoi, Vietnam",
            majors: ["Computer Science", "Information Technology", "Electronics Engineering", "Data Science", "Network Engineering"]
        },
        {
            name: "VNU University of Information Technology",
            shortName: "VNU-UIT",
            domain: "uit.edu.vn",
            logo: "https://logo.clearbit.com/uit.edu.vn",
            color: "#0066CC",
            layout: "vertical",
            address: "Linh Trung Ward, Thu Duc District, Ho Chi Minh City, Vietnam",
            majors: ["Software Engineering", "Information Systems", "Network & Communications", "AI & Machine Learning", "Cybersecurity"]
        },
        {
            name: "FPT University",
            shortName: "FPT",
            domain: "fpt.edu.vn",
            logo: "https://logo.clearbit.com/fpt.edu.vn",
            color: "#FF6900",
            layout: "horizontal",
            address: "Hoa Lac Hi-Tech Park, Km 29 Thang Long Blvd, Hanoi, Vietnam",
            majors: ["Software Engineering", "Information Technology", "Digital Marketing", "Business Administration", "Graphic Design"]
        },
        {
            name: "Posts and Telecommunications Institute of Technology",
            shortName: "PTIT",
            domain: "ptit.edu.vn",
            logo: "https://logo.clearbit.com/ptit.edu.vn",
            color: "#0052A5",
            layout: "vertical",
            address: "122 Hoang Quoc Viet, Cau Giay, Hanoi, Vietnam",
            majors: ["Telecommunications Engineering", "Information Technology", "Electronics Engineering", "Network Administration", "Computer Engineering"]
        }
    ],
    "USA": [
        {
            name: "Massachusetts Institute of Technology",
            shortName: "MIT",
            domain: "mit.edu",
            logo: "https://logo.clearbit.com/mit.edu",
            color: "#A31F34",
            layout: "vertical",
            address: "77 Massachusetts Ave, Cambridge, MA 02139, USA",
            majors: ["Course 6-3 (EECS)", "Course 6-1 (Electrical Engineering)", "Course 6-2 (Computer Science)", "Course 18 (Mathematics)", "Course 15 (Management)"]
        },
        {
            name: "Stanford University",
            shortName: "Stanford",
            domain: "stanford.edu",
            logo: "https://logo.clearbit.com/stanford.edu",
            color: "#8C1515",
            layout: "horizontal",
            address: "450 Serra Mall, Stanford, CA 94305, USA",
            majors: ["Computer Science", "Electrical Engineering", "Management Science & Engineering", "Symbolic Systems", "AI & Machine Learning"]
        },
        {
            name: "Harvard University",
            shortName: "Harvard",
            domain: "harvard.edu",
            logo: "https://logo.clearbit.com/harvard.edu",
            color: "#A51C30",
            layout: "vertical",
            address: "Massachusetts Hall, Cambridge, MA 02138, USA",
            majors: ["Computer Science", "Applied Mathematics", "Statistics", "Economics", "Engineering Sciences"]
        },
        {
            name: "University of California, Berkeley",
            shortName: "UC Berkeley",
            domain: "berkeley.edu",
            logo: "https://logo.clearbit.com/berkeley.edu",
            color: "#003262",
            layout: "horizontal",
            address: "Berkeley, CA 94720, USA",
            majors: ["EECS (Electrical Engineering & Computer Science)", "Computer Science (L&S)", "Data Science", "Cognitive Science", "Business Administration"]
        },
        {
            name: "Yale University",
            shortName: "Yale",
            domain: "yale.edu",
            logo: "https://logo.clearbit.com/yale.edu",
            color: "#00356B",
            layout: "vertical",
            address: "New Haven, CT 06520, USA",
            majors: ["Computer Science", "Statistics & Data Science", "Applied Mathematics", "Economics", "Cognitive Science"]
        }
    ],
    "India": [
        {
            name: "Indian Institute of Technology Delhi",
            shortName: "IIT Delhi",
            domain: "iitd.ac.in",
            logo: "https://logo.clearbit.com/iitd.ac.in",
            color: "#003F87",
            layout: "horizontal",
            address: "Hauz Khas, New Delhi, Delhi 110016, India"
        },
        {
            name: "University of Mumbai",
            shortName: "Mumbai University",
            domain: "mu.ac.in",
            logo: "https://logo.clearbit.com/mu.ac.in",
            color: "#800000",
            layout: "vertical",
            address: "Kalina, Santacruz East, Mumbai, Maharashtra 400098, India"
        },
        {
            name: "University of Delhi",
            shortName: "Delhi University",
            domain: "du.ac.in",
            logo: "https://logo.clearbit.com/du.ac.in",
            color: "#8B0000",
            layout: "horizontal",
            address: "University Road, Delhi 110007, India"
        }
    ],
    "UK": [
        {
            name: "University of Oxford",
            shortName: "Oxford",
            domain: "ox.ac.uk",
            logo: "https://logo.clearbit.com/ox.ac.uk",
            color: "#002147",
            layout: "vertical",
            address: "Wellington Square, Oxford OX1 2JD, United Kingdom",
            majors: ["Computer Science", "Engineering Science", "Mathematics", "Physics", "Chemistry", "Biological Sciences"]
        },
        {
            name: "University of Cambridge",
            shortName: "Cambridge",
            domain: "cam.ac.uk",
            logo: "https://logo.clearbit.com/cam.ac.uk",
            color: "#A3C1AD",
            layout: "horizontal",
            address: "The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK",
            majors: ["Computer Science", "Engineering", "Natural Sciences", "Mathematics", "Economics", "Medicine"]
        },
        {
            name: "Imperial College London",
            shortName: "Imperial",
            domain: "imperial.ac.uk",
            logo: "https://logo.clearbit.com/imperial.ac.uk",
            color: "#003E74",
            majors: ["Computing", "Electrical Engineering", "Mechanical Engineering", "Bioengineering", "Aeronautics", "Materials Science"],
            layout: "vertical",
            address: "South Kensington Campus, London SW7 2AZ, UK"
        }
    ],
    "Japan": [
        {
            name: "The University of Tokyo",
            shortName: "UTokyo",
            domain: "u-tokyo.ac.jp",
            logo: "https://logo.clearbit.com/u-tokyo.ac.jp",
            color: "#003F87",
            layout: "horizontal",
            address: "7-3-1 Hongo, Bunkyo-ku, Tokyo 113-8654, Japan"
        },
        {
            name: "Kyoto University",
            shortName: "Kyoto",
            domain: "kyoto-u.ac.jp",
            logo: "https://logo.clearbit.com/kyoto-u.ac.jp",
            color: "#8B0000",
            layout: "vertical",
            address: "Yoshida-Honmachi, Sakyo-ku, Kyoto 606-8501, Japan"
        }
    ],
    "South Korea": [
        {
            name: "Seoul National University",
            shortName: "SNU",
            domain: "snu.ac.kr",
            logo: "https://logo.clearbit.com/snu.ac.kr",
            color: "#003F87",
            layout: "horizontal",
            address: "1 Gwanak-ro, Gwanak-gu, Seoul 08826, South Korea"
        },
        {
            name: "Yonsei University",
            shortName: "Yonsei",
            domain: "yonsei.ac.kr",
            logo: "https://logo.clearbit.com/yonsei.ac.kr",
            color: "#003876",
            layout: "vertical",
            address: "50 Yonsei-ro, Seodaemun-gu, Seoul 03722, South Korea"
        },
        {
            name: "Korea University",
            shortName: "Korea",
            domain: "korea.ac.kr",
            logo: "https://logo.clearbit.com/korea.ac.kr",
            color: "#A50034",
            layout: "horizontal",
            address: "145 Anam-ro, Seongbuk-gu, Seoul 02841, South Korea"
        }
    ],
    "Germany": [
        {
            name: "Technical University of Munich",
            shortName: "TUM",
            domain: "tum.de",
            logo: "https://logo.clearbit.com/tum.de",
            color: "#0065BD",
            layout: "horizontal",
            address: "Arcisstraße 21, 80333 München, Germany"
        },
        {
            name: "Ludwig Maximilian University of Munich",
            shortName: "LMU Munich",
            domain: "lmu.de",
            logo: "https://logo.clearbit.com/lmu.de",
            color: "#156928",
            layout: "vertical",
            address: "Geschwister-Scholl-Platz 1, 80539 München, Germany"
        }
    ],
    "Canada": [
        {
            name: "University of Toronto",
            shortName: "UofT",
            domain: "utoronto.ca",
            logo: "https://logo.clearbit.com/utoronto.ca",
            color: "#002A5C",
            layout: "vertical",
            address: "27 King's College Cir, Toronto, ON M5S 1A1, Canada"
        },
        {
            name: "McGill University",
            shortName: "McGill",
            domain: "mcgill.ca",
            logo: "https://logo.clearbit.com/mcgill.ca",
            color: "#ED1B2F",
            layout: "horizontal",
            address: "845 Sherbrooke St W, Montreal, QC H3A 0G4, Canada"
        },
        {
            name: "University of British Columbia",
            shortName: "UBC",
            domain: "ubc.ca",
            logo: "https://logo.clearbit.com/ubc.ca",
            color: "#002145",
            layout: "vertical",
            address: "2329 West Mall, Vancouver, BC V6T 1Z4, Canada"
        }
    ],
    "Australia": [
        {
            name: "University of Melbourne",
            shortName: "UniMelb",
            domain: "unimelb.edu.au",
            logo: "https://logo.clearbit.com/unimelb.edu.au",
            color: "#003C71",
            layout: "horizontal",
            address: "Parkville VIC 3010, Australia"
        },
        {
            name: "Australian National University",
            shortName: "ANU",
            domain: "anu.edu.au",
            logo: "https://logo.clearbit.com/anu.edu.au",
            color: "#003F87",
            layout: "vertical",
            address: "Acton ACT 2601, Australia"
        },
        {
            name: "University of Sydney",
            shortName: "USYD",
            domain: "sydney.edu.au",
            logo: "https://logo.clearbit.com/sydney.edu.au",
            color: "#860C1C",
            layout: "horizontal",
            address: "Camperdown NSW 2006, Australia"
        }
    ],
    "France": [
        {
            name: "Sorbonne University",
            shortName: "Sorbonne",
            domain: "sorbonne-universite.fr",
            logo: "https://logo.clearbit.com/sorbonne-universite.fr",
            color: "#003F87",
            layout: "vertical",
            address: "21 Rue de l'École de Médecine, 75006 Paris, France"
        },
        {
            name: "École Polytechnique",
            shortName: "Polytechnique",
            domain: "polytechnique.edu",
            logo: "https://logo.clearbit.com/polytechnique.edu",
            color: "#C8102E",
            layout: "horizontal",
            address: "Route de Saclay, 91128 Palaiseau, France"
        },
        {
            name: "Paris Sciences et Lettres University",
            shortName: "PSL",
            domain: "psl.eu",
            logo: "https://logo.clearbit.com/psl.eu",
            color: "#004080",
            layout: "vertical",
            address: "60 rue Mazarine, 75006 Paris, France"
        }
    ],
    "Singapore": [
        {
            name: "National University of Singapore",
            shortName: "NUS",
            domain: "nus.edu.sg",
            logo: "https://logo.clearbit.com/nus.edu.sg",
            color: "#003D7C",
            layout: "horizontal",
            address: "21 Lower Kent Ridge Rd, Singapore 119077"
        },
        {
            name: "Nanyang Technological University",
            shortName: "NTU",
            domain: "ntu.edu.sg",
            logo: "https://logo.clearbit.com/ntu.edu.sg",
            color: "#00205B",
            layout: "vertical",
            address: "50 Nanyang Ave, Singapore 639798"
        }
    ],
    "China": [
        {
            name: "Tsinghua University",
            shortName: "Tsinghua",
            domain: "tsinghua.edu.cn",
            logo: "https://logo.clearbit.com/tsinghua.edu.cn",
            color: "#6C2283",
            layout: "vertical",
            address: "Haidian District, Beijing 100084, China"
        },
        {
            name: "Peking University",
            shortName: "PKU",
            domain: "pku.edu.cn",
            logo: "https://logo.clearbit.com/pku.edu.cn",
            color: "#8B0000",
            layout: "horizontal",
            address: "No. 5 Yiheyuan Road, Haidian District, Beijing 100871, China"
        },
        {
            name: "Fudan University",
            shortName: "Fudan",
            domain: "fudan.edu.cn",
            logo: "https://logo.clearbit.com/fudan.edu.cn",
            color: "#003F87",
            layout: "vertical",
            address: "220 Handan Rd, Wu Jiao Chang, Yangpu District, Shanghai 200433, China"
        }
    ],
    "Brazil": [
        {
            name: "University of São Paulo",
            shortName: "USP",
            domain: "usp.br",
            logo: "https://logo.clearbit.com/usp.br",
            color: "#003F87",
            layout: "horizontal",
            address: "Rua da Reitoria, 374 - Butantã, São Paulo - SP, 05508-220, Brazil"
        },
        {
            name: "State University of Campinas",
            shortName: "UNICAMP",
            domain: "unicamp.br",
            logo: "https://logo.clearbit.com/unicamp.br",
            color: "#00205B",
            layout: "vertical",
            address: "Cidade Universitária Zeferino Vaz, Campinas - SP, 13083-970, Brazil"
        },
        {
            name: "Federal University of Rio de Janeiro",
            shortName: "UFRJ",
            domain: "ufrj.br",
            logo: "https://logo.clearbit.com/ufrj.br",
            color: "#003F87",
            layout: "horizontal",
            address: "Av. Pedro Calmon, 550 - Cidade Universitária, Rio de Janeiro - RJ, Brazil"
        }
    ]
};
