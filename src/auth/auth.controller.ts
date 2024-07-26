import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { AuthGuard } from './guards/auth.guard';

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

  @Get('Route-protected')
  @UseGuards(AuthGuard)
  auth() {
    return 'Hello, authenticated user!';
  }
}
