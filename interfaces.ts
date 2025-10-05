import React from "react";

export interface ProjectProps {
    title: string,
    startDate: string,
    endDate?: string,
    label?: string,
    link?: string,
    image?: string,
    description: string
}

export interface NavbarProps {
    onNavigate: (ref: React.RefObject<HTMLDivElement | null>) => void;
    refs: {
        experienceRef: React.RefObject<HTMLDivElement | null>;
        projectsRef: React.RefObject<HTMLDivElement | null>;
        aboutRef: React.RefObject<HTMLDivElement | null>;
    };
}
export interface ExperienceProps {
    title: string
    startDate: string,
    endDate: string,
    organization: string,
    link?: string,
    image?: string,
    description: string
}