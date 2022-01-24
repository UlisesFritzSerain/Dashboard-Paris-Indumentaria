import React from 'react';
import LastMovieInDb from './LastProductInDb';
import CategoriesInDB from './CategoriesInDB';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriesInDB />

        </div>
    )
}

export default ContentRowCenter;