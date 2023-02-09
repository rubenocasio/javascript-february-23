import React, { Component } from 'react';

class Andres extends Component {
        constructor(props){
        super(props)
    }

    render() {
        const { episodes, title, isRecommended, hashTags} = this.props
        return (
            <div>
            <h1>Andres Component</h1>
                Title: {title}
                Total Episodes: {episodes}
                <h6>Recommended? {isRecommended ? "Yes" : "No"}</h6>
                {/* <h3>{hashTags}</h3> */}

                <ul>
                    {
                        hashTags.map((tag, i) => {
                            return(
                                <li key={i}>{tag}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Andres;