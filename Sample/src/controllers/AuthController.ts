import { inject } from 'inversify';
import { fluentProvide } from 'inversify-binding-decorators';
import { Body, Controller, Delete, Deprecated, Get, Patch, Path, Post, Put, Query, Request, Response, Route, Security, SuccessResponse, Tags } from 'tsoa';
import { UserCreateDto } from '../interfaces/auth/UserCreateDto';
import { PostBaseResponseDto } from '../interfaces/common/PostBaseResponseDto';
import { AuthService } from '../services/AuthService';

@Route('/auth')
@Tags('Auth')
@fluentProvide(AuthController).done()
export class AuthController extends Controller{
    
    constructor(
        @inject(AuthService) private authService: AuthService
    ) {
        super();
    }

    @SuccessResponse(201, 'Created')
    @Response(409, '이미 존재하는 유저')
    @Post('/signup')
    public async createUser(
        @Body() userCreateDto: UserCreateDto
    ): Promise<PostBaseResponseDto> {
        try {
            const result = await this.authService.createUser(userCreateDto);

            this.setStatus(201);
            return result;
        } catch (e) {
            throw e;
        }
    }
}