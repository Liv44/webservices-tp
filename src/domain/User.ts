import { randomUUID } from "crypto";

interface UserConstructorProps {
    id: string;
    name: string;
    email: string;
    password: string;
}

interface UserCreateProps {
    name: string;
    email: string;
    password: string;
}

export default class User {
    id: string;
    name: string;
    email: string;
    password: string;

    constructor({ id, name, email, password }: UserConstructorProps) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    };

    static create({ name, email, password }: UserCreateProps) {
        return new User({
            id: randomUUID(),
            name,
            email,
            password,
        });
    };
}

interface UserRepository {
    save(user: User): void;
    findOne(id: string): User | undefined;
    findAll(): User[];
}

export { UserRepository };