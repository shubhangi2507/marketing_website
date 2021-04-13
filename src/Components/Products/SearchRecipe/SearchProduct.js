import React from 'react';
import SearchRecipeApi from '../../../Api/SearchRecipeApi';
import './SearchProduct.css';
import RecipeInstructions from './RecipeInstructions';

class SearchProduct extends React.Component {
        constructor(props) {
                super(props);   
                this.state = { RecipeData: [] };
        }

        componentDidMount()
        {
                var productId = this.props.match.params.id;
                this.getProductData(productId);
        }

        getProductData = async (productId) =>{
                const response = await SearchRecipeApi.get('recipes/'+productId+'/information',{
                        params : {
                                apiKey:'4a198ccf7baa405daf80d2f3ec3ea508'
                        }
                });
                // console.log(response.data);
                this.setState({RecipeData: response.data});
        }
        render(){
                return(
                        <React.Fragment>
                        <div className="ui segment">
                                <div className="ui two column very relaxed grid">
                                        <div className="column">
                                                <img className="ui fluid image" alt={this.state.RecipeData.title} src={this.state.RecipeData.image} />
                                        </div>
                                        <div className="column">
                                                <h1 className="grey" id="propductRecipe">{this.state.RecipeData.title} </h1>
                                                <h3>Instructions</h3>
                                                <RecipeInstructions data={this.state.RecipeData.analyzedInstructions}/>
                                        </div>
                                </div>
                                <div className="ui vertical divider">
                                        Recipe
                                </div>
                        </div>
                        </React.Fragment>
                );
        }
}

export default SearchProduct;