// Command definitions and their outputs
const commands = {
    help: () => {
        return [
            "Available commands:",
            "",
            "cv               - view my resume",
            "whois            - who is Shantanu?",
            "whoami           - who are you?",
            "social           - display my social media links",
            "projects         - view coding projects",
            "skills           - view my skills",
            "email            - send me an email",
            "reading          - books i have read",
            "history          - view command history",
            "help             - you obviously already know what this does",
            "clear            - clear the terminal"
        ];
    },
    
    whois: () => {
    return [
        "👋 Hey there, I’m Shantanu!",
        "🚀 .NET Developer on a mission: Turning complex problems into simple, usable solutions.",
        "",
        "🏥 Built:",
        "> InternDB – Intern systems that cut admin work by 30%",
        "> Hospital dashboards that deliver insights 20% faster.",
        "> Also some Dummy projects.",
        "",
        "💻 Tech Stack:",
        "> C# | ASP.NET Core | Entity Framework | Blazor",
        "> SQL Server | LINQ | Python | HTML/CSS",
        "",
        "🛠️ Currently building:",
        "> PlanBuddy",
        "",
        "🎓 Fresh B.Tech grad: Ready to take on new challenges and learn every day.",
        "",
        "🧩 What I love:",
        "> Clean code",
        "> Smart databases",
        "> Building tools people actually use"
    ];
},

    whoami: () => {
        return [
            "The paradox of \"Who am I?\" is: we never know, but, we constantly find out."
        ];
    },
    
    social: () => {
    return [
        "Connect with me:",
        "",
        '<a href="https://github.com/shantanu-84" target="_blank">📂 GitHub</a>',
        '<a href="https://www.linkedin.com/in/shantanu84/" target="_blank">💼 LinkedIn</a>',
        '<a href="https://x.com/shantanu84_" target="_blank">📥 Twitter</a>'
    ];
},
    
    cv: () => {
    return [
        "You can view or download my resume here:",
        "",
        '<a href="assets/Shantanu_Rathod_Resume.pdf" target="_blank">📄 View Resume</a>'    ];
},

    projects: () => {
        return [
            "Projects:",
            "",
            "Still curating... most projects are offline, on GitHub.",
            "But Here are some:",
            "",
            '<a href="https://github.com/shantanu-84/InternDB" target="_blank">🎓 InternDB</a>',
            '<a href="https://github.com/shantanu-84/terminal-portfolio" target="_blank">🎓 terminal-portfolio</a>',
            "PlantBuddy   in progress.....",
        ];
    },
    
    skills: () => {
        return [
            "My Skills:",
            "",
            "Programming Languages: C#, Python, SQL, JavaScript, HTML, CSS",
            "Frameworks: .NET Core, ASP.NET MVC, Entity Framework, LINQ, Blazor",
            "Databases: Microsoft SQL Server, SQLite",
            "Tools & IDEs: Visual Studio, VS Code, Git",
            "Cloud: AWS, Google Cloud Platform",
            "Other: Power BI, WPF, TCP/UDP Socket Programming"
        ];
    },
    
    email: () => {
    return [
        "📧 You can reach me at:",
        "",
        '<a href="mailto:shantanurathod3864@gmail.com" target="_blank">✉️ shantanurathod3864@gmail.com</a>'
    ];
},
    reading: () => {
    return [
        "What I've Been Reading Recently",
        "Some of there marathi books!",
        "actually no, some of english books in marathi book collection😉",
        "",
        '<a href="https://www.goodreads.com/book/show/127441416-the-diary-of-a-young-girl" target="_blank">the diary of a young girl</a>',
        '<a href="https://www.goodreads.com/book/show/10959.Sophie_s_World" target="_blank">sophie_s world</a>',
        '<a href="https://www.bookganga.com/eBooks/Books/Details/4727317762841636880" target="_blank">eka ranvedyachi shodhyatra</a>',
        '<a href="https://www.amazon.com/Vata-Marathi-VYANKATESH-MADGULKAR-ebook/dp/B01N5NKZTI" target="_blank">vaata</a>',
        '<a href="https://www.bookganga.com/eBooks/Books/details/5385807112520881312" target="_blank">afriketil sahas</a>',
        '<a href="https://www.amazon.in/Shyamchi-Aai-Sane-Guruji/dp/8196132026" target="_blank">shyamchi aai</a>',


         
    ];
},
    
    history: () => {
        if (commandHistory.length === 0) {
            return ["No commands in history yet."];
        }
        let historyLines = ["Command History:"];
        commandHistory.forEach((cmd, index) => {
            historyLines.push(`${index + 1}. ${cmd}`);
        });
        return historyLines;
    },
    
    clear: () => {
        const welcomeMessages = terminalContent.querySelectorAll('.output');
        welcomeMessages.forEach(msg => msg.remove());
        return [];
    }
};
