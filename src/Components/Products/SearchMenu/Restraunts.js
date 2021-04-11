import React from 'react';
import SearchRecipeApi from '../../../Api/SearchRecipeApi';
import CardView from '../../CardView';

class SearchRecipe extends React.Component {
        state = { restraunts: [] };
    
        onFormSubmit = async term => {

                if(term)
                {
                        const response = await SearchRecipeApi.get('recipes/complexSearch',{
                                params : {
                                        query : term,
                                        apiKey:'4a198ccf7baa405daf80d2f3ec3ea508'
                                }
                        });
                        this.setState({images: response.data.results});

                }
               
        }
        render(){
                return(
                        <React.Fragment>
                              {/* <SearchBar label="Search Recipe" onFormSubmit={this.onFormSubmit}/> */}
                              <div className="ui four column grid">
                                        <CardView Data={this.state.images} />
                                </div>
                        </React.Fragment>
                );
        }
}

export default SearchRecipe;