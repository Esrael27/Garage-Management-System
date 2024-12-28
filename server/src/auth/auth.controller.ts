
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('login')
    async login() {
        // Your login logic here
    }
    
}
