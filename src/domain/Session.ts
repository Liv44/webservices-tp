import { randomUUID } from "crypto";

interface SessionConstructorProps {
    id: string;
    title: string;
    date: Date;
    trainerId: string;
}

interface SessionCreateProps {
    title: string;
    date: Date;
    trainerId: string;
}

export default class Session {
    id: string;
    title: string;
    date: Date;
    trainerId: string;

    constructor({ id, title, date, trainerId }: SessionConstructorProps) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.trainerId = trainerId;
    };

    static create({ title, date, trainerId }: SessionCreateProps) {
        return new Session({
            id: randomUUID(),
            title,
            date,
            trainerId,
        });
    };
}

interface SessionRepository {
    save(session: Session): void;
    getById(id: string): Session | undefined;
    getAll(): Session[];
}

export { SessionRepository };