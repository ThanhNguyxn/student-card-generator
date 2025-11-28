// Global University Database
const UNIVERSITY_DATA = {
    "Vietnam": [
        {
            name: "Hanoi University of Science and Technology",
            shortName: "HUST",
            domain: "hust.edu.vn",
            logo: "img/logos/hust.png",
            color: "#C8102E",
            layout: "vertical",
            address: "No. 1 Dai Co Viet, Hai Ba Trung, Hanoi, Vietnam",
            majors: ["IT1 - Information Technology", "IT2 - Computer Science", "ET - Electronics & Telecommunications", "ME - Mechanical Engineering", "CH - Chemical Engineering"]
        },
        {
            name: "VNU University of Engineering and Technology",
            shortName: "VNU-UET",
            domain: "uet.vnu.edu.vn",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/VNU-UET_Logo.png/200px-VNU-UET_Logo.png",
            color: "#003DA5",
            layout: "horizontal",
            address: "144 Xuan Thuy, Cau Giay, Hanoi, Vietnam",
            majors: ["Computer Science", "Information Technology", "Electronics Engineering", "Data Science", "Network Engineering"]
        },
        {
            name: "VNU University of Information Technology",
            shortName: "VNU-UIT",
            domain: "uit.edu.vn",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Logo_UIT_updated.svg/200px-Logo_UIT_updated.svg.png",
            color: "#0066CC",
            layout: "vertical",
            address: "Linh Trung Ward, Thu Duc District, Ho Chi Minh City, Vietnam",
            majors: ["Software Engineering", "Information Systems", "Network & Communications", "AI & Machine Learning", "Cybersecurity"]
        },
        {
            name: "FPT University",
            shortName: "FPT",
            domain: "fpt.edu.vn",
            logo: "img/logos/fpt.png",
            color: "#FF6900",
            layout: "horizontal",
            address: "Hoa Lac Hi-Tech Park, Km 29 Thang Long Blvd, Hanoi, Vietnam",
            majors: ["Software Engineering", "Information Technology", "Digital Marketing", "Business Administration", "Graphic Design"]
        },
        {
            name: "Posts and Telecommunications Institute of Technology",
            shortName: "PTIT",
            domain: "ptit.edu.vn",
            logo: "img/logos/ptit.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/200px-MIT_logo.svg.png",
            color: "#A31F34",
            layout: "vertical",
            address: "77 Massachusetts Ave, Cambridge, MA 02139, USA",
            majors: ["Course 6-3 (EECS)", "Course 6-1 (Electrical Engineering)", "Course 6-2 (Computer Science)", "Course 18 (Mathematics)", "Course 15 (Management)"]
        },
        {
            name: "Stanford University",
            shortName: "Stanford",
            domain: "stanford.edu",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/200px-Seal_of_Leland_Stanford_Junior_University.svg.png",
            color: "#8C1515",
            layout: "horizontal",
            address: "450 Serra Mall, Stanford, CA 94305, USA",
            majors: ["Computer Science", "Electrical Engineering", "Management Science & Engineering", "Symbolic Systems", "AI & Machine Learning"]
        },
        {
            name: "Harvard University",
            shortName: "Harvard",
            domain: "harvard.edu",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/200px-Harvard_University_coat_of_arms.svg.png",
            color: "#A51C30",
            layout: "vertical",
            address: "Massachusetts Hall, Cambridge, MA 02138, USA",
            majors: ["Computer Science", "Applied Mathematics", "Statistics", "Economics", "Engineering Sciences"]
        },
        {
            name: "University of California, Berkeley",
            shortName: "UC Berkeley",
            domain: "berkeley.edu",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/200px-Seal_of_University_of_California%2C_Berkeley.svg.png",
            color: "#003262",
            layout: "horizontal",
            address: "Berkeley, CA 94720, USA",
            majors: ["EECS (Electrical Engineering & Computer Science)", "Computer Science (L&S)", "Data Science", "Cognitive Science", "Business Administration"]
        },
        {
            name: "Yale University",
            shortName: "Yale",
            domain: "yale.edu",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/200px-Yale_University_Shield_1.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
            color: "#003F87",
            layout: "horizontal",
            address: "Hauz Khas, New Delhi, Delhi 110016, India"
        },
        {
            name: "University of Mumbai",
            shortName: "Mumbai University",
            domain: "mu.ac.in",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Mumbai_University_Logo.svg/200px-Mumbai_University_Logo.svg.png",
            color: "#800000",
            layout: "vertical",
            address: "Kalina, Santacruz East, Mumbai, Maharashtra 400098, India"
        },
        {
            name: "University of Delhi",
            shortName: "Delhi University",
            domain: "du.ac.in",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/University_of_Delhi.svg/200px-University_of_Delhi.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/200px-Oxford-University-Circlet.svg.png",
            color: "#002147",
            layout: "vertical",
            address: "Wellington Square, Oxford OX1 2JD, United Kingdom",
            majors: ["Computer Science", "Engineering Science", "Mathematics", "Physics", "Chemistry", "Biological Sciences"]
        },
        {
            name: "University of Cambridge",
            shortName: "Cambridge",
            domain: "cam.ac.uk",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/University_of_Cambridge_logo.svg/200px-University_of_Cambridge_logo.svg.png",
            color: "#A3C1AD",
            layout: "horizontal",
            address: "The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK",
            majors: ["Computer Science", "Engineering", "Natural Sciences", "Mathematics", "Economics", "Medicine"]
        },
        {
            name: "Imperial College London",
            shortName: "Imperial",
            domain: "imperial.ac.uk",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Imperial_College_London_Logo.svg/200px-Imperial_College_London_Logo.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/The_University_of_Tokyo_coat_of_arms.svg/200px-The_University_of_Tokyo_coat_of_arms.svg.png",
            color: "#003F87",
            layout: "horizontal",
            address: "7-3-1 Hongo, Bunkyo-ku, Tokyo 113-8654, Japan"
        },
        {
            name: "Kyoto University",
            shortName: "Kyoto",
            domain: "kyoto-u.ac.jp",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kyoto_University_logo.svg/200px-Kyoto_University_logo.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Seoul_National_University_seal.svg/200px-Seoul_National_University_seal.svg.png",
            color: "#003F87",
            layout: "horizontal",
            address: "1 Gwanak-ro, Gwanak-gu, Seoul 08826, South Korea"
        },
        {
            name: "Yonsei University",
            shortName: "Yonsei",
            domain: "yonsei.ac.kr",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Yonsei_University_Emblem.svg/200px-Yonsei_University_Emblem.svg.png",
            color: "#003876",
            layout: "vertical",
            address: "50 Yonsei-ro, Seodaemun-gu, Seoul 03722, South Korea"
        },
        {
            name: "Korea University",
            shortName: "Korea",
            domain: "korea.ac.kr",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Korea_University_Emblem.svg/200px-Korea_University_Emblem.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/200px-Logo_of_the_Technical_University_of_Munich.svg.png",
            color: "#0065BD",
            layout: "horizontal",
            address: "Arcisstraße 21, 80333 München, Germany"
        },
        {
            name: "Ludwig Maximilian University of Munich",
            shortName: "LMU Munich",
            domain: "lmu.de",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/LMU_Muenchen_Logo.svg/200px-LMU_Muenchen_Logo.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/University_of_Toronto_coat_of_arms.svg/200px-University_of_Toronto_coat_of_arms.svg.png",
            color: "#002A5C",
            layout: "vertical",
            address: "27 King's College Cir, Toronto, ON M5S 1A1, Canada"
        },
        {
            name: "McGill University",
            shortName: "McGill",
            domain: "mcgill.ca",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/McGill_University_CoA.svg/200px-McGill_University_CoA.svg.png",
            color: "#ED1B2F",
            layout: "horizontal",
            address: "845 Sherbrooke St W, Montreal, QC H3A 0G4, Canada"
        },
        {
            name: "University of British Columbia",
            shortName: "UBC",
            domain: "ubc.ca",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/University_of_British_Columbia_coat_of_arms.svg/200px-University_of_British_Columbia_coat_of_arms.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/University_of_Melbourne_logo.svg/200px-University_of_Melbourne_logo.svg.png",
            color: "#003C71",
            layout: "horizontal",
            address: "Parkville VIC 3010, Australia"
        },
        {
            name: "Australian National University",
            shortName: "ANU",
            domain: "anu.edu.au",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Australian_National_University_logo.svg/200px-Australian_National_University_logo.svg.png",
            color: "#003F87",
            layout: "vertical",
            address: "Acton ACT 2601, Australia"
        },
        {
            name: "University of Sydney",
            shortName: "USYD",
            domain: "sydney.edu.au",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/University_of_Sydney_coat_of_arms.svg/200px-University_of_Sydney_coat_of_arms.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_Sorbonne_Universit%C3%A9.svg/200px-Logo_Sorbonne_Universit%C3%A9.svg.png",
            color: "#003F87",
            layout: "vertical",
            address: "21 Rue de l'École de Médecine, 75006 Paris, France"
        },
        {
            name: "École Polytechnique",
            shortName: "Polytechnique",
            domain: "polytechnique.edu",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Logo_EP.svg/200px-Logo_EP.svg.png",
            color: "#C8102E",
            layout: "horizontal",
            address: "Route de Saclay, 91128 Palaiseau, France"
        },
        {
            name: "Paris Sciences et Lettres University",
            shortName: "PSL",
            domain: "psl.eu",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Logo_PSL.svg/200px-Logo_PSL.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/NUS_coat_of_arms.svg/200px-NUS_coat_of_arms.svg.png",
            color: "#003D7C",
            layout: "horizontal",
            address: "21 Lower Kent Ridge Rd, Singapore 119077"
        },
        {
            name: "Nanyang Technological University",
            shortName: "NTU",
            domain: "ntu.edu.sg",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Nanyang_Technological_University.svg/200px-Nanyang_Technological_University.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Tsinghua_University_Logo.svg/200px-Tsinghua_University_Logo.svg.png",
            color: "#6C2283",
            layout: "vertical",
            address: "Haidian District, Beijing 100084, China"
        },
        {
            name: "Peking University",
            shortName: "PKU",
            domain: "pku.edu.cn",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Peking_University_seal.svg/200px-Peking_University_seal.svg.svg.png",
            color: "#8B0000",
            layout: "horizontal",
            address: "No. 5 Yiheyuan Road, Haidian District, Beijing 100871, China"
        },
        {
            name: "Fudan University",
            shortName: "Fudan",
            domain: "fudan.edu.cn",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Fudan_University_Logo.svg/200px-Fudan_University_Logo.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Webysther_20160322_-_Logo_USP.svg/200px-Webysther_20160322_-_Logo_USP.svg.png",
            color: "#003F87",
            layout: "horizontal",
            address: "Rua da Reitoria, 374 - Butantã, São Paulo - SP, 05508-220, Brazil"
        },
        {
            name: "State University of Campinas",
            shortName: "UNICAMP",
            domain: "unicamp.br",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Unicamp_logo.svg/200px-Unicamp_logo.svg.png",
            color: "#00205B",
            layout: "vertical",
            address: "Cidade Universitária Zeferino Vaz, Campinas - SP, 13083-970, Brazil"
        },
        {
            name: "Federal University of Rio de Janeiro",
            shortName: "UFRJ",
            domain: "ufrj.br",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/UFRJ_logo.svg/200px-UFRJ_logo.svg.png",
            color: "#003F87",
            layout: "horizontal",
            address: "Av. Pedro Calmon, 550 - Cidade Universitária, Rio de Janeiro - RJ, Brazil"
        }
    ]
};
