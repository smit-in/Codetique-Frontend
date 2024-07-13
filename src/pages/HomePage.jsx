import FormComponent from "../components/Forms/HomeFrom"

function HomePage() {
    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center p-4 sm:p-8">
            <div className="w-full sm:w-4/5 md:w-1/2">
                <FormComponent />
            </div>
        </div>
    );
}

export default HomePage;
