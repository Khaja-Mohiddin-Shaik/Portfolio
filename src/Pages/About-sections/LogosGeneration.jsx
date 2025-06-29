import React from 'react'

function LogosGeneration({props}) {
    return (
        <div>
            <div className=" flex flex-col items-center gap-2">
                <img src={props.img} alt="HTML" className={props.className} />
                <p className="text-xs font-['Merriweather_Sans']">{props.imgName}</p>
            </div>
        </div>
    )
}

export default LogosGeneration