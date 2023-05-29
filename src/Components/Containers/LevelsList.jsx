import React from 'react';
import Level from '../Basic/Level';
import '../../App.css';

const LevelsList = (props) => {      

    return (
        <ul className='levelsList'>        
            {props.dataLevels.map((level)=>
                <Level 
                    key={level.id} 
                    src={level.src} 
                    levelName={level.levelName} 
                    pasarFuncion={() => props.daleLaFuncion(level.levelName, level.id)}
                    isActive={props.active ===level.id}
                />
                )
            }
        </ul>
    );
}

export default LevelsList;
