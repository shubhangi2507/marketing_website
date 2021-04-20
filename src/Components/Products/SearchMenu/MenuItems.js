import React from 'react';
import SearchRecipeApi from '../../../Api/SearchRecipeApi';
import CardView from '../../CardView';

class SearchProduct extends React.Component {
        constructor(props) {
                super(props);   
                this.state = { menuItems: [] };
        }

        componentDidMount()
        {
                 var restrauntName = this.props.match.params.title;
                this.getProductData(restrauntName);
        }

        getProductData = async (restrauntName) =>{
                const response = await SearchRecipeApi.get('/food/menuItems/search',{
                        params : {
                                query: restrauntName,
                                apiKey:'4a198ccf7baa405daf80d2f3ec3ea508'
                        }
                });
                console.log(response.data);
                this.setState({menuItems: response.data.menuItems});
        }
        render(){
                return(
                        <React.Fragment>
                                <div className="container">
                                <h1 className="restTitle">Menu Item for {this.props.match.params.title} </h1>
                                <div className="ui five column grid pad">
                                 <CardView Data={this.state.menuItems} /></div>
                                 </div>
                        </React.Fragment>
                );
        }
}

export default SearchProduct;