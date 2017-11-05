import { Component, OnInit } from '@angular/core';
import { Section } from '../models/Section';
import { SubSection } from '../models/SubSection';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public activeView: String;
    public sections: Array<Section> = [];

    constructor() { }

    ngOnInit() {
        this.initPersonalProfile();
        this.initTechnicalSkills();
        this.initEmploymentHistory();
        this.initEducationHistory();
        this.initHobbies();

        this.activeView = "0";
    }

    changeView(id: String) {
        this.activeView = id;

        //change view

    }

    private initPersonalProfile() {
        let title = "Personal Profile";
        let paragraphs = [
            "Initially working at ORC International as a Technical Consultant, much of my time was spent writing complex SQL for the backend of our online surveys and reporting outputs, and building excellent relationships with both clients and internal stakeholders. This combined with my technical ability was quickly recognised and within two years, I was promoted to the senior level position.",
            "Shortly after being promoted, I successfully applied internally for the role of Web Application Developer. Particular focus was given to my development within the ASP.NET MVC framework and exploring new technologies such as .NET Core and created a native prototype Android app for the business.",
            "In my free time, I have chosen to learn Angular 4 and created a website that consumes a RESTful .NET Core Web API, which stores and reads data from a MongoDB database, as well as a Swift iOS application to test my Web API."
        ];

        this.sections.push(new Section(title, paragraphs, null));
    }

    private initTechnicalSkills() {
        let title = "Technical Skills";
        let list = [
            "Technologies: .NET Framework 4.5, .NET Core 1.0 – 2, ASP.NET MVC 3 & 5, ASP.NET Web API 2, SQL Server 2008 R2 - 2012, Angular 4, Bootstrap, MongoDB",
            "Languages: C#, JavaScript, HTML, CSS, T-SQL, Android Java, Swift",
            "Practices: Dependency Injection",
            "Tools: Visual Studio 2013 – 2017, TFS, VSO, SVN, Git, Xcode"
        ];
        let subsection = new SubSection("", "", null, list);

        this.sections.push(new Section(title, null, [subsection]));
    }

    private initEmploymentHistory() {
        let title = "Employment History";

        let responsibilitiesJob1 = [
            "Developed, supported and deployed 6 major releases of the company’s internal online survey management suite, built using a mixture of MVC 3 and Web Forms and supported by SQL Server",
            "Deployed application and database updates, including schema migration and the configuration of IIS",
            "Created bespoke MVC 5 web applications based on wireframes created by the UX team and to the internal project manager’s requirements and specifications",
            "Introduced an entirely new product to our line of reporting tools by customising SyncFusion Essential JS components within an MVC solution",
            "Designed and developed a native Android application to monitor daily response rates and employee engagement scores, across organisational hierarchies",
            "Researched new technologies such as .NET Core and produced prototype online survey designs to replace the existing Classic ASP surveys",
            "Developed a RESTful Web API for the internal online survey management suite available to be consumed by new web applications",
            "Gathered system requirements and provided costs for features and bug fixes of various new and existing web applications. Documented system designs based on requirements",
            "Reviewed and system tested other developers’ code",
            "TFS & SVN for source control and managed projects on VSO"
        ];

        let responsibilitiesJob2 = [
            "Day to day technical project management of employee engagement projects generating revenue between £20-200k",
            "Produced multi-language surveys using HTML, CSS, Classic ASP, JavaScript and JQuery",
            "Developed re-usable, generic SQL scripts to support several add-on features of online surveys such as matrix hierarchies and personal employee engagement, still used by the global team",
            "Improved the performance and efficiency of existing SQL stored procedures used by all project databases",
            "Built organisational hierarchies based on client HR system Excel exports",
            "Online survey data collection, cleaning and aggregation",
            "Created and published complex, graphical SSRS reports based on wireframes by designers and delivered them to clients via SFTP or the company’s client-facing project management suite",
            "Met deadlines and delivered all projects at a high level of quality",
            "Mentored and guided junior members of the team"
        ];

        let companies = [
            new SubSection(
                "ORC International",
                "Web Application Developer: April 2015 – July 2017",
                ["Key member of the development team responsible for looking after internal and external web applications, primarily using ASP.NET MVC."],
                responsibilitiesJob1
            ),
            new SubSection(
                "ORC International",
                "Senior Technical Consultant: February 2015 – April 2015, Technical Consultant: May 2013 – February 2015",
                ["Key member of the development team responsible for looking after internal and external web applications, primarily using ASP.NET MVC."],
                responsibilitiesJob2
            )
        ];

        this.sections.push(new Section(title, null, companies));
    }

    private initEducationHistory() {
        let title = "Education & Courses";

        let education = [
            new SubSection(
                "QA: March 2016",
                "",
                ["Building Effective ASP.NET MVC 5 Web Applications using Visual Studio 2013 (QAMVC5)"],
                null
            ),
            new SubSection(
                "QA: July 2013",
                "",
                ["Writing Queries using Microsoft SQL Server 2008 Transact-SQL (M2778)"],
                null
            ),
            new SubSection(
                "Royal Holloway, University of London: 2009 – 2012",
                "",
                ["Computer Science BSc (Hons): Upper second-class honours (2:1)",
                    "Dissertation: A Game-Playing Environment (C#): 75%"],
                null
            ),
            new SubSection(
                "Langley Grammar School: 2002 – 2009",
                "",
                ["A Levels: Psychology (B), Maths (C), Computer Science (C)",
                    "GCSEs: 10 A-Cs including Maths (A) and English (B)"],
                null
            )
        ];

        this.sections.push(new Section(title, null, education));
    }

    private initHobbies() {
        let title = "Hobbies & Interests";
        let list = [
            "Formula 1: Dedicated fan of the sport and the McLaren team",
            "Cars and mechanics: Owner of a Toyota GT86 and Toyota Celica GT-Four ST205. I carry out my own service, general maintenance and repairs on the latter",
            "Gaming: PC and Xbox One, mostly PUBG and Forza",
            "TV: Always watching the latest TV shows such as Game of Thrones, Stranger Things, Designated Survivor and many more",
            "Travelling: Holidays in the US, Jamaica, Vietnam and the Philippines in the last two years"
        ];
        let subsection = new SubSection("", "", null, list);

        this.sections.push(new Section(title, null, [subsection]));
    }
}