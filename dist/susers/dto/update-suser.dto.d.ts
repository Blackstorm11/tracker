import { CreateSuserDto } from './create-suser.dto';
declare const UpdateSuserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSuserDto>>;
export declare class UpdateSuserDto extends UpdateSuserDto_base {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
}
export {};
