import React from 'react';
import SearchBar from '../../SearchBar/SearchBar'
import SearchRecipeApi from '../../../Api/SearchRecipeApi';
import CardView from '../../CardView';

class SearchRecipe extends React.Component {
        constructor(props) {
                super(props);
                this.state = { images: [], emptyMsg:false };
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

                       
                        this.setState({images: response.data.results});
                        if(this.state.images.length == 0)
                        {
                                this.setState({emptyMsg: true});  
                        }

                }
               
        }
        render(){
                
                const { path } = this.props.match;
                var data=<div className="w100"><h1 className="center">Sorry!We found no recipe for this food. Please try another!!</h1></div>;
                if(this.state.emptyMsg == false)
                {
                        data= <CardView Data={this.state.images} path={path} type={'id'}/>
                }
                
                return(
                        <div className="pad">
                              <SearchBar label="Search Recipe" onFormSubmit={this.onFormSubmit}/>
                              <div className="ui four column grid pad">
                                       {data}
                                </div>
                        </div>
                );
        }
}

export default SearchRecipe;