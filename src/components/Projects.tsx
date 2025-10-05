import Project from "./Project";
import React, {forwardRef} from "react";
function Projects(_props:{}, ref: React.Ref<HTMLDivElement>) {
    return (
        <>
            <div ref={ref} className=" bg-amber-300 p-10 w-full h-full">
            <h1 className={"text-indigo-900 text-7xl text-left italic font-serif tracking-widest"}>PROJECTS , , , </h1>
            <div className="mt-10 flex flex-col justify-between h-1/2 w-full">
                <div className="flex flex-row h-full w-full">
                <Project
                    title={"Personal Website"}
                    startDate={"September 2025"}
                    endDate={"Present"}
                    description={"I've made multiple iterations of a personal website. This current iteration is made using React.js,\n" +
                        "                        TailwindCSS, and TypeScript."}
                />
                <Project
                    title={"Sounding Out Parkinson's Disease"}
                    startDate={"July 2025"}
                    endDate={"Present"}
                    label={"AI4ALL Ignite Program"}
                    description={"Developed a Python classification ML model predicting Parkinson’s disease using tabular speech data with 84% accuracy and an 0.84 ROC-AUC score in a team of 3\n" +
                        "                        Spearheaded ideation and led project development, sourced the dataset, and contributed to training the XGBoost supervised learning model\n" +
                        "                        Selected as 1 of 10 teams (from 400+ students) to present project at the final symposium"}
                />
                </div>
                <div className="flex flex-row h-full w-full">
                <Project
                    title={"Here Comes the Sun"}
                    startDate={"April 2025"}
                    label={"AI4ALL Ignite Program"}
                    description={"Built a React.js/TypeScript website to visualize user locations and provide local sunrise/sunset times\n" +
                        "                        Integrated APIs (Gemini API, Sunrise Sunset JS) and the React-Leaflet library to retrieve facts about locations with similar times"}
                />
                <Project
                    title={"CapyCrew"}
                    startDate={"February 2025"}
                    label={"Winner for Most Creative / Goofy at HackBeanpot"}
                    link={"https://capycrew.vercel.app/"}
                    description={"Developed a capybara game where players navigate a capybara and trigger effects in a 3-person team\n" +
                        "                        Implemented user interaction functions with HTML/CSS/JavaScript; designed drag-and-drop hats and visuals"}
                />
                </div>
            </div>
            </div>
        </>
    )
}

export default forwardRef<HTMLDivElement | null>(Projects);