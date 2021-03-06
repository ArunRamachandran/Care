import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    constructor (props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        //Display fallback UI
        this.setState({ hasError: true });
        //error looging to any error reporting service
        logErrorToMyService(error, info);
    }

    render () {
        if (this.state.hasError) {
            return <h1>Oops .. Something went wrong</h1>
        }

        return this.props.children;
    }

}