import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { Constants } from "src/utils/constants";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
    canActivate(context: ExecutionContext){
        const ctx = context.switchToHttp();
        const request= ctx.getRequest<Request>();
        
         // Check if the request URL matches the findOneBy endpoint
         if (request.url.includes('/email/')) {
            return true; // Allow access without authorization
        }


        for (let x=0; x<Constants.URLS.length; x++){
            if(request.url == Constants.URLS[x]) return true;
        }
        return super.canActivate(context);
    }
}