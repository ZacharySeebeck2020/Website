import React from 'react';

function ExperienceItem(props) {
    return (
        <div className={props.className}>
          <h1 className="mx-auto font-semibold text-lg">
            {props.name}
          </h1>
          <h6 className="mx-auto text-xs">
            {props.timeframe}
          </h6>
        </div>
    );
}

export default ExperienceItem;