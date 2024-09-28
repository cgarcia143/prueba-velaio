export interface IPerson {
    fullName: string;
    age: number;
    skills: string[];
}

export interface ITask {
    id: number,
    taskName: string;
    deadline: Date;
    completed: boolean;
    people: IPerson[];
}