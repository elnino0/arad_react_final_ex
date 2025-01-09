import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/emun/role.enum';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  async signIn(email: string, pass: string): Promise<any> {
    console.log("email : ",email, " pass : ", pass);
    const user = await this.usersService.viewUserByemail(email);
    console.log(user);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    const payload = { sub: user.role, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      admin:  user.role === Role.Admin
    };
  }

  async refreshToken(email: string): Promise<any> {
    const user = await this.usersService.viewUserByemail(email);
    const payload = { sub: user.role, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      admin:  user.role === Role.Admin
    };

  }
}