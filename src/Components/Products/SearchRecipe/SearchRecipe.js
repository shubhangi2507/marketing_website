import React from 'react';
import SearchBar from '../../SearchBar/SearchBar'
import SearchRecipeApi from '../../../Api/SearchRecipeApi';
import CardView from '../../CardView';

class SearchRecipe extends React.Component {
        constructor(props) {
                super(props);
                this.state = { images: [] };
        }
       
        onFormSubmit = async term => {

                if(term)
                {
                        const response = await SearchRecipeApi.get('recipes/complexSearch',{
                                params : {
                                        query : term,
                                        apiKey:'4a198ccf7baa405daf80d2f3ec3ea508'
                                }
                        });
                        console.log(response.data.results);
                        this.setState({images: response.data.results});

                }
               
        }
        render(){
                
                const { path } = this.props.match;
                return(
                        <React.Fragment>
                              <SearchBar label="Search Recipe" onFormSubmit={this.onFormSubmit}/>
                              <div className="ui four column grid pad">
                                        <CardView Data={this.state.images} path={path} type={'id'}/>
                                </div>
                        </React.Fragment>
                );
        }
}

export default SearchRecipe;