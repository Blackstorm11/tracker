import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { Constants } from "src/utils/constants";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    
    // Check if the request URL matches the findOneBy endpoint
    if (request.url.includes('/email/')) {
      return true; // Allow access without authorization
    }

    // Get the user role from the payload
    const user = request.user;
    const userRole = user?.role;

    // Perform authorization based on the user role
    if (userRole === 'Admin') {
      return true; // Allow access for Admin role
    }

    // Check if the request URL is allowed based on user role
    const isAllowed = Constants.URLS.some(url => request.url.includes(url));

    return isAllowed;
  }
}
