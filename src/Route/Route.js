import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
const HomeComponent = lazy(() => import('../Components/Home/Home'));
const LoginCompoent = lazy(() => import('../Components/Login/Login'));
const SignUpCompoent = lazy(() => import('../Components/SignUp/SignUp'));
const ContactCompoent = lazy(() => import('../Components/Contact/Contact'));
const SearchRecipe = lazy(() => import('../Components/Products/SearchRecipe/SearchRecipe'));
const SearchProduct = lazy(() => import('../Components/Products/SearchRecipe/SearchProduct'));
const Restraunts = lazy(() => import('../Components/Products/SearchMenu/Restraunts'));
const MenuItems = lazy(() => import('../Components/Products/SearchMenu/MenuItems'));

export default (
        <Suspense fallback={<h1>Loading.....</h1>}>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/SearchRecipe" component={SearchRecipe} />
                <Route path="/SearchRecipe/:id" component={SearchProduct} />
                <Route exact path="/Restraunts" component={Restraunts} />
                <Route path="/Restraunts/:title" component={MenuItems} />
                <Route exact path="/Contact" component={ContactCompoent} />
                <Route exact path="/Login" component={LoginCompoent} />
                <Route exact path="/SignUp" component={SignUpCompoent} />
                
            
                <Route path="**" render={
                    () => (
                        <>
                            <article>
                                <h1 className="text-danger">No Route Configured!</h1>
                                <h4 className="text-danger">Please check your Route Configuration</h4>
                            </article>
                        </>
                    )
                } />
            </Switch>
        </Suspense>
    );