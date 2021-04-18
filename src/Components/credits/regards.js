import React from 'react'
import Cards from "./Card"
import Creditlinks from "./creditlinks"


function Regards() {
    return (
        <div>
            <h4>We thank the following organizations for their major commitments to support the Jenkins project.</h4>

            <Cards />
            <h4 className="p-5 mx-5">We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.</h4>
                <Creditlinks/>
        </div>
    )
}
export default Regards
