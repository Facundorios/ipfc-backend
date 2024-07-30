import { Body, Controller, Get, Patch, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, ConfirmAccountDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() registerDto: RegisterDto) {
    return this.authService.createUser(registerDto);
  }

  @Post('signin')
  signin(@Body() loginDto: LoginDto) {
    return this.authService.loginUser(loginDto);
  }
  @Get('users-list')
  getUsers() {
    return this.authService.getUsers();
  }

  @Patch('confirm-account')
  confirmAccount(@Body() confirmAccountDto: ConfirmAccountDto) {
    return this.authService.confirmAccount(confirmAccountDto);
  }
}

// @Get('profile')
// @Roles(ValidRoles.admin)
// @UseGuards(AuthGuard, RolesGuard)
// profile(@Req() request: RequestUser) {
//   //console.log(request.user);
//   //return `Hello, authenticated user!`;

//   return this.authService.profile(request.user);
// }
