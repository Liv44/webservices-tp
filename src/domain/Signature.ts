import { randomUUID } from "crypto";
import Session from "./Session";
import User from "./User";

interface SignatureConstructorProps {
    id: string;
    session: Session;
    student: User;
    status: boolean;
}

interface SignatureCreateProps {
    session: Session;
    student: User;
    status?: boolean;
}

export default class Signature {
    id: string;
    session: Session;
    student: User;
    status: boolean;

    constructor({ id, session, student, status }: SignatureConstructorProps) {
        this.id = id;
        this.session = session;
        this.student = student;
        this.status = status;
    };

    static create({ session, student, status = false }: SignatureCreateProps) {
        return new Signature({
            id: randomUUID(),
            session,
            student,
            status
        });
    };
}

interface SignatureRepository {
    save(signature: Signature): void;
    getById(id: string): Signature | undefined;
    getAll(): Signature[];
}

export { SignatureRepository };