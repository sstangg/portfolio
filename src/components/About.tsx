import React, {forwardRef} from "react";

function About(_props: {}, ref: React.Ref<HTMLDivElement> ) {
    return (
        <>
            <div ref={ref} className="bg-yellow-100 block w-full pb-7">
                <span className={"text-2xl hidden text-center "}>.......................................................................................................................................................</span>
                <div className="p-10 text-left w-full h-full">
                    <h1 className={"text-indigo-900 text-7xl text-left italic font-serif tracking-loose"}>Welcome! </h1>
                    <div className={"flex flex-row w-full h-full pl-5 pr-5"}>
                        <pre className="text-red-800 pt-10 pb-10 font-serif text-3xl leading-relaxed">
                            .   <b>My name is Sophia Tang. </b><br/>
                            ..         I'm a junior studying <i className={"font-sans"}>Computer Science</i> at <i>Boston University</i>.<br/>
                            ...            Here, you can find a collection of my work, experiences, and contact info.<br/>
                            ....               Stay as long as you want, and make yourself comfortable :).
                        </pre>
                        <div className={"m-0 flex w-full h-full justify-center items-center"}>
                            <img className="max-h-56 border-dotted border-2 border-gray-900" src={"src/assets/headshot.png"} alt="image of me" />
                        </div>
                    </div>
                </div>
                <span className={"hidden text-5xl"}>.......................................................................................................................................................</span>
            </div>
            </>
    )
}
export default forwardRef<HTMLDivElement | null>(About);