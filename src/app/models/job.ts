export interface Job {
    id: number,
    jobName: string,
    profession: profession,
    hours: number,
    area: string,
    requirements: string,
    fromHome: boolean
}

export enum profession {
    Software_evelopment,
    Accounting,
    architecture,
    social_work,
    secretariat,
    graphics,
}
