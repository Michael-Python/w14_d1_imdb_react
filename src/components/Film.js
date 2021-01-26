import react from 'react';

const Film = ({title, children}) => {
    return(
        <>
            <h4><li><a href={children}>{title}</a></li></h4>
        </>
    )
}

export default Film;