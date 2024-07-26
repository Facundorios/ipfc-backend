import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { AuthGuard } from './guards/auth.guard';
import { RequestUser } from './interfaces';
import { Roles } from './decorators/role.decorator';
import { RolesGuard } from './guards/roles.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('singup')
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

  @Get('profile')
  @Roles('admin')
  @UseGuards(AuthGuard, RolesGuard)
  profile(@Req() request: RequestUser) {
    //console.log(request.user);
    //return `Hello, authenticated user!`;

    return this.authService.profile(request.user);
  }
}
