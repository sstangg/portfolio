import type {ProjectProps} from "../../interfaces.ts";
export default function Project(props: ProjectProps) {
    const date = props.startDate + ((props.endDate == undefined) ? "" : " - " + props.endDate);

    return(
        <>
            <div className="w-full flex flex-row text-red-900">
                <img className="w-1/4" src={(props.image == undefined)? "": props.image} alt="project image" />
                <div className="text-left w-full">
                    <h3>{props.title}</h3>
                    <h5>{date}</h5>
                    <h5>{props.label}</h5>
                    <a className={(props.link == undefined)? "hidden" : ""} href={props.link} target="_blank">link</a>
                    <p>{props.description}
                    </p>
                </div>
            </div>
        </>
    )
}