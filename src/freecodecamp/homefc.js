import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div>
            <h1>This is the home page - FreeCodeCamp</h1>
            <Link to='/about' >about page</Link>
            <br />
            <Link to="/contact">contact page</Link>
        </div>
    );
}

{/**
  *How to Route to Other Components
  **Step 1 - Create multiple components
  **Step 2 - Define routes
  **Step 3 - Use Link to navigate to routes

  *Routes acts as a container/parent for all the individual routes that will be created in our app.
  *Route is used to create a single route. It takes in two attributes: 
   **path, which specifies the URL path of the desired component. 
   **element, which specifies the component the route should render. 
   
   **https://www.freecodecamp.org/news/how-to-use-react-router-version-6/
   **https://blog.webdevsimplified.com/2022-07/react-router/
 */}