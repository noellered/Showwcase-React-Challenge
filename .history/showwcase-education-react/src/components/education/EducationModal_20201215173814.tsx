import React, { useEffect } from 'react';
const EducationModal = () => {

    useEffect( async () => {
        fetch(`http://universities.hipolabs.com/search?name=${query}`)
    });

    return(
        <div>Modal</div>
    )
}
export default EducationModal;