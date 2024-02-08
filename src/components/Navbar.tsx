import Searchbar from "./Searchbar"

export default () => {
    return (
        <div className="flex justify-between p-3">
            <div className="text-md inline-flex items-center">
                YouTube
            </div>
            <div>
                <Searchbar />
            </div>
            <div>
                Sign In
            </div>
        </div>
    )
}