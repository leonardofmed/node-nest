// Nest can't inject automatically the repository if it's an interface because interface is a Typescript only object.
// When the code is running, already compiled, the interface does not exists. Nest needs the repository to be a class then.
export abstract class RocketMembersRepository {
    abstract create(name: string, memberFunction: string): Promise<void>;
}