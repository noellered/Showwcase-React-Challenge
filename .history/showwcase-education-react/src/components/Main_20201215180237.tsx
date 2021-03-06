import React, {FunctionComponent} from 'react';
import EducationSidebar from './education/EducationSidebar';
import EducationList from './education/EducationList';

const Main:FunctionComponent<{name: string}> = ({name}) => {
    return(
        <div>
            <h4>Welcome to {name}'s education page.</h4>
            <button>Add New Education</button>
            <EducationSidebar/>
            <EducationList/>
            <Educa
        </div>
    )
}

export default Main;