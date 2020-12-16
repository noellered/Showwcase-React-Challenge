import React, {FunctionComponent} from 'react';

const Main:FunctionComponent< = ({name}) => {
    return(
        <div>
            <h4>Welcome to {name}'s education page.</h4>
            <button>Add New Education</button>
            <EducationSidebar/>
            <EducationCardList/>
        </div>
    )
}

export default Main;