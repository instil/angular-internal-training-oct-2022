import React, {Component, FC, ReactNode} from 'react';
import {getCount, getPage} from './Api';

const PAGE_SIZE = 10;

export class Report extends Component {
    state = {
        count: 0,
        movies: [],
        pageNumber: 0,
        error: null,
        isBusy: false
    };

    // 3. Update to async / await
    componentDidMount(): void {
        this.setState({isBusy: true});
        getCount()
            .then(count => this.setState({count}))
            .then(() => this.setPage(0))
            .catch(error => this.setState({error}))
            .finally(() => this.setState({isBusy: false}));
    }

    // 4. Update to async / await
    setPage(index: number): Promise<void> {
        this.setState({isBusy: true});
        return getPage(index, PAGE_SIZE)
            .then(movies => this.setState({
                movies,
                error: null,
                pageNumber: index
            }))
            .catch(error => this.setState({error}))
            .finally(() => this.setState({isBusy: false}));
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

export const RxExercise: FC = () => {
    return <Report/>
};
