// Global University Database
const UNIVERSITY_DATA = {
    "USA": [
        {
            name: "Massachusetts Institute of Technology",
            shortName: "MIT",
            domain: "mit.edu",
            logo: "img/logos/mit_official.svg",
            color: "#A31F34",
            layout: "horizontal",
            address: "77 Massachusetts Ave, Cambridge, MA 02139, USA",
            majors: ["Computer Science", "Mechanical Engineering", "Physics", "Mathematics", "Electrical Engineering"]
        },
        {
            name: "Harvard University",
            shortName: "Harvard",
            domain: "harvard.edu",
            logo: "img/logos/harvard.svg",
            color: "#A51C30",
            layout: "vertical",
            address: "Cambridge, MA 02138, USA",
            majors: ["Law", "Medicine", "Business", "Political Science", "Economics"]
        },
        {
            name: "Stanford University",
            shortName: "Stanford",
            domain: "stanford.edu",
            logo: "img/logos/stanford.svg",
            color: "#8C1515",
            layout: "vertical",
            address: "450 Serra Mall, Stanford, CA 94305, USA",
            majors: ["Computer Science", "Engineering", "Business", "Law", "Medicine"]
        },
        {
            name: "University of California, Berkeley",
            shortName: "UC Berkeley",
            domain: "berkeley.edu",
            logo: "img/logos/berkeley.svg",
            color: "#003262",
            layout: "horizontal",
            address: "Berkeley, CA 94720, USA",
            majors: ["Computer Science", "Economics", "Engineering", "Business", "Political Science"]
        },
        {
            name: "Yale University",
            shortName: "Yale",
            domain: "yale.edu",
            logo: "img/logos/yale.svg",
            color: "#00356B",
            layout: "vertical",
            address: "New Haven, CT 06520, USA",
            majors: ["Law", "History", "Economics", "Political Science", "Psychology"]
        }
    ],
    "Canada": [
        {
            name: "University of Toronto",
            shortName: "UofT",
            domain: "utoronto.ca",
            logo: "img/logos/uoft.png",
            color: "#002A5C",
            layout: "vertical",
            address: "27 King's College Cir, Toronto, ON M5S 1A1, Canada",
            majors: ["Computer Science", "Engineering", "Business", "Medicine", "Law"]
        },
        {
            name: "McGill University",
            shortName: "McGill",
            domain: "mcgill.ca",
            logo: "img/logos/mcgill.png",
            color: "#ED1B2F",
            layout: "horizontal",
            address: "845 Sherbrooke St W, Montreal, Quebec H3A 0G4, Canada",
            majors: ["Medicine", "Law", "Engineering", "Arts", "Science"]
        },
        {
            name: "University of British Columbia",
            shortName: "UBC",
            domain: "ubc.ca",
            logo: "img/logos/ubc.svg",
            color: "#002145",
            layout: "vertical",
            address: "Vancouver, BC V6T 1Z4, Canada",
            majors: ["Forestry", "Oceanography", "Computer Science", "Business", "Engineering"]
        }
    ],
    "India": [
        {
            name: "Indian Institute of Technology Delhi",
            shortName: "IIT Delhi",
            domain: "iitd.ac.in",
            logo: "img/logos/iitd_official.png",
            color: "#B31B1B",
            layout: "vertical",
            address: "Hauz Khas, New Delhi, Delhi 110016, India",
            majors: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering"]
        },
        {
            name: "University of Mumbai",
            shortName: "Mumbai University",
            domain: "mu.ac.in",
            logo: "img/logos/mumbai.svg",
            color: "#A6192E",
            layout: "vertical",
            address: "CST Road, Kalina, Santacruz East, Mumbai, Maharashtra 400098, India",
            majors: ["Commerce", "Arts", "Science", "Law", "Engineering"]
        }
    ],
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
            logo: "img/logos/uet.svg",
            color: "#003DA5",
            layout: "vertical",
            address: "144 Xuan Thuy, Cau Giay, Hanoi, Vietnam",
            majors: ["Computer Science", "Information Technology", "Electronics Engineering", "Data Science", "Network Engineering"]
        },
        {
            name: "VNU University of Information Technology",
            shortName: "VNU-UIT",
            domain: "uit.edu.vn",
            logo: "img/logos/uit_official.png",
            color: "#0066CC",
            layout: "vertical",
            address: "Linh Trung Ward, Thu Duc District, Ho Chi Minh City, Vietnam",
            majors: ["Software Engineering", "Information Systems", "Network & Communications", "AI & Machine Learning", "Cybersecurity"]
        },
        {
            name: "FPT University",
            shortName: "FPT",
            domain: "fpt.edu.vn",
            logo: "img/logos/fpt.jpg",
            color: "#FF6900",
            layout: "horizontal",
            address: "Hoa Lac Hi-Tech Park, Km 29 Thang Long Blvd, Hanoi, Vietnam",
            majors: ["Software Engineering", "Information Technology", "Digital Marketing", "Business Administration", "Graphic Design"]
        },
        {
            name: "Posts and Telecommunications Institute of Technology",
            shortName: "PTIT",
            domain: "ptit.edu.vn",
            logo: "img/logos/ptit.jpg",
            color: "#0052A5",
            layout: "vertical",
            address: "122 Hoang Quoc Viet, Cau Giay, Hanoi, Vietnam",
            majors: ["Telecommunications Engineering", "Information Technology", "Electronics Engineering", "Network Administration", "Computer Engineering"]
        },
        {
            name: "VNU University of Science",
            shortName: "HCMUS",
            domain: "hcmus.edu.vn",
            logo: "img/logos/hcmus.png",
            color: "#003366",
            layout: "horizontal",
            address: "227 Nguyen Van Cu, District 5, Ho Chi Minh City, Vietnam",
            majors: ["Information Technology", "Computer Science", "Data Science", "Mathematics", "Physics"]
        }
    ],
    "UK": [
        {
            name: "University of Oxford",
            shortName: "Oxford",
            domain: "ox.ac.uk",
            logo: "img/logos/oxford.svg",
            color: "#002147",
            layout: "vertical",
            address: "Wellington Square, Oxford OX1 2JD, UK",
            majors: ["Philosophy, Politics and Economics", "Law", "Medicine", "History", "Mathematics"]
        },
        {
            name: "University of Cambridge",
            shortName: "Cambridge",
            domain: "cam.ac.uk",
            logo: "img/logos/cambridge.png",
            color: "#A3C1AD",
            layout: "horizontal",
            address: "The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK",
            majors: ["Natural Sciences", "Engineering", "Medicine", "Law", "Computer Science"]
        },
        {
            name: "Imperial College London",
            shortName: "Imperial",
            domain: "imperial.ac.uk",
            logo: "img/logos/imperial.png",
            color: "#003E74",
            layout: "vertical",
            address: "Exhibition Rd, South Kensington, London SW7 2BX, UK",
            majors: ["Medicine", "Computing", "Physics", "Mechanical Engineering", "Civil Engineering"]
        }
    ],
    "Japan": [
        {
            name: "The University of Tokyo",
            shortName: "UTokyo",
            domain: "u-tokyo.ac.jp",
            logo: "img/logos/utokyo.png",
            color: "#0080FF",
            layout: "horizontal",
            address: "7-3-1 Hongo, Bunkyo City, Tokyo 113-8654, Japan",
            majors: ["Law", "Medicine", "Engineering", "Economics", "Science"]
        },
        {
            name: "Kyoto University",
            shortName: "KyotoU",
            domain: "kyoto-u.ac.jp",
            logo: "img/logos/kyoto.svg",
            color: "#003865",
            layout: "vertical",
            address: "Yoshidahonmachi, Sakyo Ward, Kyoto, 606-8501, Japan",
            majors: ["Integrated Human Studies", "Education", "Law", "Economics", "Science"]
        }
    ],
    "South Korea": [
        {
            name: "Seoul National University",
            shortName: "SNU",
            domain: "snu.ac.kr",
            logo: "img/logos/snu.svg",
            color: "#0F0F70",
            layout: "vertical",
            address: "1 Gwanak-ro, Gwanak-gu, Seoul, South Korea",
            majors: ["Business Administration", "Engineering", "Medicine", "Law", "Social Sciences"]
        },
        {
            name: "Yonsei University",
            shortName: "Yonsei",
            domain: "yonsei.ac.kr",
            logo: "img/logos/yonsei.png",
            color: "#00205B",
            layout: "horizontal",
            address: "50 Yonsei-ro, Seodaemun-gu, Seoul, South Korea",
            majors: ["Business", "Engineering", "Medicine", "International Studies", "Political Science"]
        },
        {
            name: "Korea University",
            shortName: "KU",
            domain: "korea.ac.kr",
            logo: "img/logos/korea.svg",
            color: "#8C002B",
            layout: "vertical",
            address: "145 Anam-ro, Seongbuk-gu, Seoul, South Korea",
            majors: ["Business Administration", "Media & Communication", "International Studies", "Psychology", "Computer Science"]
        }
    ],
    "Germany": [
        {
            name: "Technical University of Munich",
            shortName: "TUM",
            domain: "tum.de",
            logo: "img/logos/tum_official.png",
            color: "#3070B3",
            layout: "horizontal",
            address: "Arcisstraße 21, 80333 München, Germany",
            majors: ["Informatics", "Mechanical Engineering", "Electrical Engineering", "Physics", "Management"]
        },
        {
            name: "Ludwig Maximilian University of Munich",
            shortName: "LMU",
            domain: "lmu.de",
            logo: "img/logos/lmu.svg",
            color: "#00883A",
            layout: "vertical",
            address: "Geschwister-Scholl-Platz 1, 80539 München, Germany",
            majors: ["Physics", "Chemistry", "Biology", "Medicine", "Law"]
        }
    ],
    "France": [
        {
            name: "École Polytechnique",
            shortName: "X",
            domain: "polytechnique.edu",
            logo: "img/logos/polytechnique.svg",
            color: "#CE2029",
            layout: "vertical",
            address: "Route de Saclay, 91128 Palaiseau, France",
            majors: ["Mathematics", "Physics", "Computer Science", "Economics", "Mechanics"]
        },
        {
            name: "PSL Research University",
            shortName: "PSL",
            domain: "psl.eu",
            logo: "img/logos/psl.svg",
            color: "#000000",
            layout: "horizontal",
            address: "60 Rue Mazarine, 75006 Paris, France",
            majors: ["Science", "Engineering", "Humanities", "Social Sciences", "Arts"]
        }
    ],
    "Singapore": [
        {
            name: "National University of Singapore",
            shortName: "NUS",
            domain: "nus.edu.sg",
            logo: "img/logos/nus_official.png",
            color: "#EF7C00",
            layout: "horizontal",
            address: "21 Lower Kent Ridge Rd, Singapore 119077",
            majors: ["Computer Science", "Engineering", "Business", "Medicine", "Law"]
        },
        {
            name: "Nanyang Technological University",
            shortName: "NTU",
            domain: "ntu.edu.sg",
            logo: "img/logos/ntu_official.png",
            color: "#C20430",
            layout: "vertical",
            address: "50 Nanyang Ave, Singapore 639798",
            majors: ["Engineering", "Business", "Science", "Humanities", "Medicine"]
        }
    ],
    "China": [
        {
            name: "Tsinghua University",
            shortName: "Tsinghua",
            domain: "tsinghua.edu.cn",
            logo: "img/logos/tsinghua.svg",
            color: "#660099",
            layout: "vertical",
            address: "30 Shuangqing Rd, Haidian District, Beijing, China",
            majors: ["Engineering", "Computer Science", "Physics", "Economics", "Architecture"]
        },
        {
            name: "Peking University",
            shortName: "PKU",
            domain: "pku.edu.cn",
            logo: "img/logos/pku.svg",
            color: "#8B0000",
            layout: "horizontal",
            address: "5 Yiheyuan Rd, Haidian District, Beijing, China",
            majors: ["Literature", "History", "Philosophy", "Science", "Economics"]
        },
        {
            name: "Fudan University",
            shortName: "Fudan",
            domain: "fudan.edu.cn",
            logo: "img/logos/fudan.svg",
            color: "#003366",
            layout: "vertical",
            address: "220 Handan Rd, Yangpu District, Shanghai, China",
            majors: ["Journalism", "Economics", "Management", "Mathematics", "Medicine"]
        }
    ],
    "Brazil": [
        {
            name: "University of São Paulo",
            shortName: "USP",
            domain: "usp.br",
            logo: "img/logos/usp.svg",
            color: "#0055A4",
            layout: "horizontal",
            address: "Butantã, São Paulo - State of São Paulo, Brazil",
            majors: ["Engineering", "Medicine", "Law", "Architecture", "Economics"]
        },
        {
            name: "University of Campinas",
            shortName: "Unicamp",
            domain: "unicamp.br",
            logo: "img/logos/unicamp_official.png",
            color: "#CC0000",
            layout: "vertical",
            address: "Cidade Universitária, Campinas - SP, Brazil",
            majors: ["Engineering", "Physics", "Medicine", "Biology", "Computer Science"]
        },
        {
            name: "Federal University of Rio de Janeiro",
            shortName: "UFRJ",
            domain: "ufrj.br",
            logo: "img/logos/ufrj.svg",
            color: "#003399",
            layout: "horizontal",
            address: "Cidade Universitária, Rio de Janeiro - RJ, Brazil",
            majors: ["Engineering", "Medicine", "Law", "Architecture", "Economics"]
        }
    ],
    "Australia": [
        {
            name: "The University of Melbourne",
            shortName: "UniMelb",
            domain: "unimelb.edu.au",
            logo: "img/logos/unimelb_official.svg",
            color: "#094183",
            layout: "vertical",
            address: "Parkville VIC 3010, Australia",
            majors: ["Medicine", "Law", "Business", "Arts", "Engineering"]
        },
        {
            name: "Australian National University",
            shortName: "ANU",
            domain: "anu.edu.au",
            logo: "img/logos/anu_official.png",
            color: "#BE830E",
            layout: "horizontal",
            address: "Canberra ACT 2601, Australia",
            majors: ["Political Science", "International Relations", "Law", "Economics", "Asian Studies"]
        },
        {
            name: "The University of Sydney",
            shortName: "USYD",
            domain: "sydney.edu.au",
            logo: "img/logos/usyd_official.png",
            color: "#E64626",
            layout: "vertical",
            address: "Camperdown NSW 2006, Australia",
            majors: ["Medicine", "Law", "Business", "Arts", "Engineering"]
        }
    ]
};
