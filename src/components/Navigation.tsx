import type {NavbarProps} from "../../interfaces.ts";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navigation({onNavigate, refs}: NavbarProps) {
    return (
        // replace icons with mui
        <>
        <nav className="bg-yellow-100 opacity-75 fixed left-0 top-0 h-24 w-full font-sans text-3xl flex justify-between items-center p-14">
            <h2 className={"text-indigo-900 font-serif italic tracking-loose text-5xl"}>SOPHIA TANG</h2>
            <button onClick={() => onNavigate(refs.aboutRef)}>
                About
            </button>
            <button onClick={() => onNavigate(refs.experienceRef)}>
                Experience
            </button>
            <button onClick={() => onNavigate(refs.projectsRef)}>
                Projects
            </button>
            <div className={"flex flex-row w-1/12 justify-between"}>
                <a href={"mailto:sstangg18@gmail.com"} target={"_blank"}><EmailIcon htmlColor="darkred" fontSize={"large"}/></a>
                <a href={"https://github.com/sstangg"} target={"_blank"}><GitHubIcon htmlColor="darkred" fontSize={"large"}/></a>
                <a href={"https://www.linkedin.com/in/sstangg/"} target={"_blank"}><LinkedInIcon htmlColor="darkred" fontSize={"large"}/></a>
            </div>
        </nav>
            </>
    )
}