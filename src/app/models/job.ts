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
    Software_development,
    Accounting,
    Architecture,
   Social_work,
    Secretariat,
    Graphics,
}
