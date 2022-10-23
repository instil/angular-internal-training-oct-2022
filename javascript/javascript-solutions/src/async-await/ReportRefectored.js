import React, {Component} from 'react';
import {getCount, getPage} from './Api';

const PAGE_SIZE = 15;

export class ReportRefactored extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            movies: [],
            pageNumber: 0,
            error: null,
            isBusy: false
        }
    }

    async componentDidMount() {
        await this.asyncOperation(async () => {
            const count = await getCount();
            this.setState({count});
            await this.setPage(0);
        });
    }

    async setPage(index) {
        await this.asyncOperation(async () => {
            const movies = await getPage(index, PAGE_SIZE);
            this.setState({
                movies,
                error: null,
                pageNumber: index
            });
        });
    }

    async asyncOperation(operation) {
        this.setState({isBusy: true});
        try {
            await operation();
        } catch (error) {
            this.setState({error});
        }
        this.setState({isBusy: false});
    }

    nextPage = () => this.setPage(this.state.pageNumber + 1);
    prevPage = () => this.setPage(this.state.pageNumber - 1);

    render() {
        const error = this.state.error
            ? <div className='alert alert-danger'>
                {this.state.error}
            </div>
            : null;

        return (
            <div>
                <h3>Refactored</h3>
                <div>Total Items: {this.state.count}</div>
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
