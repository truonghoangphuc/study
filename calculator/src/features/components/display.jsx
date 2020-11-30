import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const AppDisplay = (props) => {    

    return (
        <div className="calculator-monitor">
            <div className="calculator-math">{props.history}</div>
            <div className="calculator-output"></div>
        </div>
    );
};

const mapStateToProps = (state) => {
    // ... computed data from state and optionally ownProps
    const { allInputs } = state;
    const history = allInputs;
    console.log(history);
    return { history };
}

const mapDispatchToProps = {
// ... normally is an object full of action creators
}


export default connect(
    mapStateToProps,
    null
  )(AppDisplay);