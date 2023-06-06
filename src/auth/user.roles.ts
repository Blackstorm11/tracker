import { RolesBuilder } from "nest-access-control";


export enum UserRoles{
   Admin="Admin",
   Reader="Reader",
   RW="writer"
}
export const roles:RolesBuilder= new RolesBuilder()


roles.grant(UserRoles.Reader)
      .readAny(["posts"])
      .grant(UserRoles.Admin)
      .extend(UserRoles.Reader)
      .updateAny(["posts"])
      .createAny(["posts"])
      .deleteAny(["posts"])
      .grant(UserRoles.RW)
      .extend(UserRoles.Reader)
      .updateOwn(["posts"])
      .createOwn(['posts'])
      .deleteOwn(['posts'])
      