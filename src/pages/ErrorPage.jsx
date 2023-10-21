import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <form className="error-page">
            <div>
                <h1>Oh snap! You got an error!</h1>
            </div>
            <div>
                <h2>Status: {error.status || error.code}</h2>
                <h2>Message: {error.statusText || error.message}</h2>
            </div>
        </form>
    );
}
