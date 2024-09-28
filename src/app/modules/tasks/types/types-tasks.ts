export interface IPerson {
    fullName: string;
    age: number;
    skills: string[];
}

export interface ITask {
    taskName: string;
    deadline: Date;
    completed: boolean;
    people: IPerson[];
}