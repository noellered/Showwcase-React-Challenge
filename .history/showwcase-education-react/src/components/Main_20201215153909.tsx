import React, {FunctionComponent} from 'react';
import EducationSidebar from ''

const Main:FunctionComponent<{name: string}> = ({name}) => {
    return(
        <div>
            <h4>Welcome to {name}'s education page.</h4>
            <button>Add New Education</button>
            {/* <EducationSidebar/>
            <EducationCardList/> */}
        </div>
    )
}

export default Main;