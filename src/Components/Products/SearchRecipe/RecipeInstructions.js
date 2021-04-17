
import React from 'react';

const RecipeInstructions = (props) => {
      
        if(props.data)
        {
                var RecipeSteps = props.data.[0].steps;
                var stepInstruction = RecipeSteps.map(({number,step}) => {
                        return (<div key={step}>
                                <span><b>{number}.</b></span>
                                <span id="step">{step}</span>
                        </div>
                        );
                });

        }
       
        
        return <>{stepInstruction}</>;
}

export default RecipeInstructions;
