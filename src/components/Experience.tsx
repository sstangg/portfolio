import type {ExperienceProps} from "../../interfaces.ts";

export default function Experience(props: ExperienceProps) {
    const date = props.startDate + ((props.endDate == undefined) ? "" : " - " + props.endDate);

    return (
        <>
            <div className="px-10 pb-20 w-full flex flex-row text-red-800">
                <img className="w-1/4" src={(props.image == undefined)? "": props.image} alt="experience image" />
                <div className="text-left w-full">
                    <h3 className={"font-bold text-3xl font-serif"}>{props.title}</h3>
                    <h5 className={"text-xl italic"}>{date}</h5>
                    <h5 className={"text-2xl font-bold"}>{props.organization}</h5>
                    <a className={(props.link == undefined)? "hidden" : ""} href={props.link} target="_blank">link</a>
                    <p className={"text-lg"}>{props.description}
                    </p>
                </div>
            </div>
        </>
    )
}