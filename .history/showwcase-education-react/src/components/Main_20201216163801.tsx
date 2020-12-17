import React, {FunctionComponent} from 'react';
import EducationSidebar from './education/EducationSidebar';
import EducationList from './education/EducationList';
import EducationModal from './education/EducationModalContent';

const Main:FunctionComponent<{name: string}> = ({name}) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true);
    }

    return(
        <div>
            <h4>Welcome to {name}'s education page.</h4>
            <button type="button" onClick={handleOpen}>Add New Education</button>
            <EducationSidebar/> 
            <EducationList/>
            <EducationModal/>
        </div>
    )
}

export default Main;