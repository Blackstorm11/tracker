import { RolesBuilder } from "nest-access-control";
export declare enum UserRoles {
    Admin = "Admin",
    Reader = "Reader",
    RW = "writer"
}
export declare const roles: RolesBuilder;
