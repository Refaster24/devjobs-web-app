export interface devJob {
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: {
        content: string;
        items: string[];
    };
    role: {
        content: string;
        items: string[];
    };
}

export interface initialStateType {
    global:devJob[],
    filter:devJob[],
    load : string
}

export interface payloadType  {
    title    : string,
    location : string, 
    contract : boolean
}