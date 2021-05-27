import React from 'react';
import SearchRecipeApi from '../../../Api/SearchRecipeApi';
import CardView from '../../CardView';
import domino from '../../../assets/domino.jpg';
import chilli from '../../../assets/chili.png';
import dunkin from '../../../assets/dunkin_donut.png';
import kfc from '../../../assets/kfc.jpg';
import Mcd from '../../../assets/mcdonald.png';
import starbucks from '../../../assets/starbucks.jpg';
import subway from '../../../assets/subway.png';
import wendy from '../../../assets/wendy.png';
class SearchRecipe extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                    productsData: [
                        {
                                id: 1,
                                title: "Domino's",
                                image: domino
                        },
                        {
                                id: 2,
                                title: "Chilli",
                                image: chilli
                        },
                        {
                                id: 3,
                                title: "Wendy's",
                                image: wendy
                        },
                        {
                                id: 4,
                                title: "KFC",
                                image: kfc
                        },
                        {
                                id: 5,
                                title: "Starbucks",
                                image: starbucks
                        },
                        {
                                id: 6,
                                title: "McDonald's",
                                image: Mcd
                        },
                        
                        {
                                id: 7,
                                title: "Subway",
                                image: subway
                        },
                        {
                                id: 8,
                                title: "Dunkin Donuts",
                                image: dunkin
                        }
                       
                    ]
                }
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

                }
               
        }
        render(){
                const { path } = this.props.match;
                return(
                        <div className="pad">
                                <h1 className="restTitle">Search Menu Items of the given Restraunts</h1>
                              <div className="ui five column grid pad">
                                        <CardView Data={this.state.productsData} path={path} type={'title'}/>
                                </div>
                        </div>
                );
        }
}

export default SearchRecipe;