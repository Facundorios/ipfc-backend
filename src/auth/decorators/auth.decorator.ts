import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { ValidRoles } from "../interfaces";
import { Roles } from "./roles.decorator";
import { AuthGuard, RolesGuard } from "../guards";

export function Auth (role: ValidRoles) {
    return applyDecorators(
        Roles(role),
        UseGuards(AuthGuard, RolesGuard)
    )
}