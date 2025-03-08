import React from "react"
import {TriangleAlert} from "lucide-react"

const RestrictMobileAccess = () => {
    return (
        <div className="flex flex-col flex-grow text-center items-center gap-5 justify-center bg-black text-yellow-500 min-h-screen px-4">
        <TriangleAlert size={72}/>
        <h1 className="text-base font-extrabold">
            Website Not Accessible on Mobile Devices!
        </h1>
        <p>
            Sorry, our website is not accessible on mobile devices.<br/>Please use a desktop or laptop to access the site.
        </p>
    </div>
    )
}

export default RestrictMobileAccess;