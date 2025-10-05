import React, {forwardRef} from 'react';
import Experience from "./Experience.tsx";

function Experiences(_props: {}, ref: React.Ref<HTMLDivElement> ) {
    return(
        <>
            <div ref={ref} className="bg-yellow-200 h-full w-full flex flex-row p-10">
                <h1 className={"text-indigo-900 text-7xl text-left italic font-serif tracking-widest"}>
                    EXPERIENCE . . .
                </h1>
                <div className="mt-10 flex flex-col justify-between h-1/2 w-full">
                    <div className="flex flex-row h-full w-full">
                        <Experience
                            title={"Software Development Intern"}
                            startDate={"June 2025"}
                            endDate={"August 2025"}
                            organization={"ClinicMind"}
                            description={"● Learned Angular (v17+) on the job , pairing it with TypeScript & TailwindCSS to debug & maintain a frontend\n" +
                                "portal for healthcare practitioners\n"+
                                "● Collaborated with QA and management to clarify bug priorities and communicate fix decisions\n" +
                                "● Ensured smooth integration of UI fixes into production via GitLab CI/CD pipelines"}
                        />
                        <Experience
                            title={"Data Analytics Intern"}
                            startDate={"May 2025"}
                            endDate={"August 2025"}
                            organization={"Aspire High Youth"}
                            description={"Directed a team of 5 interns to analyze survey data from Aspire High’s educational programs\n" +
                                "● Identified KPIs and designed Looker Studio dashboards to provide actionable insights for internal teams\n" +
                                "● Automated survey data processing with JavaScript, saving 2+ hours of manual work for specialized dashboards\n" +
                                "● Reduced workload by 50% and boosted team productivity by refining the project’s scope, creating standardized\n" +
                                "templates, and authoring technical documentation"}
                        />
                    </div>
                    <div className="flex flex-row h-full w-full">
                        <Experience
                            title={"Coding Instructor"}
                            startDate={"March 2025"}
                            endDate={"April 2025"}
                            organization={"Girls Who Code Boston University Bytes Program"}
                            description={"Taught and facilitated an intro-level Python course to 10 girls (grades 6-12) through weekly remote lessons\n" +
                                "● Designed lesson plans and homework assignments tailored to students’ skill levels"}
                        />
                        <Experience
                            title={"Research Assistant"}
                            startDate={"April 2024"}
                            endDate={"August 2024"}
                            organization={"National Emerging Infectious Diseases Laboratories"}
                            description={"Executed, designed, and troubleshooted 150+ genetic cloning experiments to optimize Hepatitis C cell culturing\n" +
                                "systems in collaboration with lab manager\n" +
                                "● Gained hands-on experience with sterile technique, pipetting, and maintaining detailed protocol documentation"}
                        />
                    </div>
            </div>

            </div>
            </>
    )
}
export default forwardRef<HTMLDivElement | null>(Experiences);