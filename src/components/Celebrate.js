import React from 'react';
import party from 'party-js';
import {defaults, mergeOptions} from '../default';

class Celebrate extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.ref = this.props.ref
        mergeOptions(this.props.config)
    }

    componentDidUpdate() {
        if (this.props.celebrate) {
            party.confetti(this.ref, {
                count: party.variation.range(defaults.Count, defaults.Size)
            })
        }
    }

    render() {
        return <div> {
            this.props.children
        } </div>;
    }
}

export default Celebrate;
