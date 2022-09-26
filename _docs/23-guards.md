# Guards


CanActivate: 
    Controls if a route can be activated.

CanActivateChild: 
    Controls if children of a route can be activated.

CanLoad: 
    Controls if a route can even be loaded. 
    This becomes useful for feature modules that are lazy-loaded. 
    They won’t even load if the guard returns false.

CanDeactivate: 
    Controls if the user can leave a route. 
    Note that this guard doesn’t prevent the user from closing the browser tab or navigating to a different address. 
    It only prevents actions from within the application itself.


1.  canActivate will only execute when the parent component is not yet created. 
    For example, if we navigate to the parent route it will be called, if we then navigate to a child route it will not. 
    If we directly navigate to the child route, the canActivate guard will also be executed.
2.  canActivateChild will always be executed while navigating to/between child routes. 
    For example, if we're at a child route child/1 and we navigate to child/2, the guard will get executed. 
    If we directly navigate to a child route, the guard will also get called. 
    If we navigate to the parent route, the canActivateChild guard will not be fired.
3.  because canActivate is guarding the parent route, 
    the child parameters (and data) are not available on the ActivatedRouteSnapshot of the canActivate guard. 
    To be able to access the child parameters, we have to drill down the child components on the RouterStateSnapshot


1.  because the parent component gets created first, the canActivate guard will always be called first.
2.  if we directly navigate to a child component and the child guard returns a falsy value then 
    the parent component will also not be created, 
    because the navigation is cancelled when one of the guards return a falsy value.
3.  when the canActivate guard returns a falsy value, then the canActivateChild guard will not be called.
4.  the canActivateChild guard can be rewritten as a canActivate guard on every child route


# Reference

https://timdeschryver.dev/blog/the-difference-between-the-canactivate-and-canactivatechild-guards#the-differences

