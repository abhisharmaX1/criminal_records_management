import React from 'react';
import '../CSS/crimeScenePhotography.css'
//import notesCover from '../Images/notesCover.jpeg';

const CrimeScenePhotographs = () => {

    
    return (
        <div className="row">
            <div className="gallery">
                <a href="img_5terre.jpg" target="_blank">
                    <img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492108507/articles/2016/10/31/detective-exposed-corruption-then-was-fired-for-eating-candy-at-a-crime-scene/16106-weill-crime-scene-candy-tease_kfquri" alt="Crime Scene 1" width="600" height="400" />
                </a>
                <div className="desc">Evidence - 1 : Crime Scene</div>
            </div>
    
            <div className="gallery">
                <a href="img_forest.jpg" target="_blank">
                    <img src="https://ra.ac.ae/wp-content/uploads/2016/06/crime-scene.jpg" alt="Weapon" width="600" height="400" />
                </a>
                <div className="desc">Exhibit - 1 : Potential Murder Weapon</div>
            </div>
    
            <div className="gallery">
                <a href="img_lights.jpg" target="_blank">
                    <img src="https://www.crime-scene-investigator.net/images/index-evidence-collection.jpg" alt="Evidence" width="600" height="400" />
                </a>
                <div className="desc">Exhibit - 2 : Victim's Shoe</div>
            </div>
    
            <div className="gallery">
                <a href="img_mountains.jpg" target="_blank">
                    <img src="https://img-aws.ehowcdn.com/340x221p/photos.demandstudios.com/getty/article/88/64/87676734.jpg" alt="Biological Evidence" width="600" height="400" />
                </a>
                <div className="desc">Biological Evidence of Suspect</div>
            </div>
        </div>
    )
    
    }


export default CrimeScenePhotographs;