import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamMemberBody {
    @IsNotEmpty()
    @Length(5, 25)
    name: string;

    @IsNotEmpty({
        message: 'The member function should not be empty'
    })
    function: string;
}