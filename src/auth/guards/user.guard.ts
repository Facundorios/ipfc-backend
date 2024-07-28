import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetUser = createParamDecorator((data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()
    console.log(request.user)
    return request.user
})