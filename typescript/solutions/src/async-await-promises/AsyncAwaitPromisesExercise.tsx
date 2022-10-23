import React, {Component, FC, ReactNode} from 'react';
import {getCount, getPage} from './Api';
import {ReportRefactored} from "./AsyncAwaitPromisesExercise_v2";
import {Link, useRouteMatch} from "react-router-dom";
import {Route} from "react-router";

const PAGE_SIZE = 10;

export class Report extends Component {
    state = {
        count: 0,
        movies: [],
        pageNumber: 0,
        error: null,
        isBusy: false
    };

    async componentDidMount(): Promise<void> {
        this.setState({isBusy: true});

        try {
            const count = await getCount();
            this.setState({count});
            await this.setPage(0);
        } catch (error) {
            this.setState({error});
        }

        this.setState({isBusy: false});
    }

    async setPage(index: number): Promise<void> {
        this.setState({isBusy: true});
        try {
            const movies = await getPage(index, PAGE_SIZE);
            this.setState({
                movies,
                error: null,
                pageNumber: index
            });
        } catch (error) {
            this.setState({error: error.message});
        }
        this.setState({isBusy: false});
    }

    nextPage = () => this.setPage(this.state.pageNumber + 1);
    prevPage = () => this.setPage(this.state.pageNumber - 1);

    render(): ReactNode {
        const error = this.state.error
            ? <div className='alert alert-danger'>
                {this.state.error}
            </div>
            : null;

        return (
            <div>
                <div>Total Itmes: {this.state.count}</div>
                <div>
                    <button className='btn btn-primary mr-2'
                            disabled={this.state.isBusy}
                            onClick={this.prevPage}>Prev
                    </button>
                    Page Number: {this.state.pageNumber + 1}
                    <button className='btn btn-primary ml-2'
                            disabled={this.state.isBusy}
                            onClick={this.nextPage}>Next
                    </button>

                    {this.state.isBusy
                        ? <span className="ml-2 fa fa-circle-o-notch fa-spin"/>
                        : null}
                </div>
                {error}
                <div>
                    <ol start={this.state.pageNumber * PAGE_SIZE + 1}>
                        {this.state.movies.map(x => <li key={x}>{x}</li>)}
                    </ol>
                </div>
            </div>
        );
    }
}

export const AsyncAwaitPromisesExercise: FC = () => {
    const {path} = useRouteMatch();

    return <div>
        <div className="row mt-2">
            <aside className="col-3 bg-light">
                <ol>
                    <li><Link to={`${path}`}>Original</Link></li>
                    <li><Link to={`${path}/refactored`}>Refactored</Link></li>
                </ol>
            </aside>
            <div className="col">
                <Route exact={true} path={`${path}`} component={Report}/>
                <Route path={`${path}/refactored`} component={ReportRefactored}/>
            </div>
        </div>
    </div>
};
