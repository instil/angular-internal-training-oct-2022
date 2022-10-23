import React, {Component, FC, ReactNode} from 'react';
import {getCount, getPage} from './Api';
import {finalize, debounceTime} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

const PAGE_SIZE = 10;

export class Report extends Component {
    state = {
        count: 0,
        movies: [],
        pageNumber: 0,
        error: null,
        isBusy: false
    };

    searchRequests = new BehaviorSubject('');

    get search(): string {
        return this.searchRequests.getValue();
    }

    set search(value) {
        this.searchRequests.next(value);
    }

    // 3. Update to async / await
    componentDidMount(): void {
        this.refresh();
        this.searchRequests
            .pipe(debounceTime(1000))
            .subscribe(() => this.refresh());
    }

    refresh(): void {
        this.setState({isBusy: true});

        getCount(this.search)
            .pipe(finalize(() => this.setState({isBusy: false})))
            .subscribe(
                count => {
                    this.setState({count});
                    this.setPage(0);
                },
                error => this.setState({error: 'Page not found'})
            );
    }

    // 4. Update to async / await
    setPage(index: number): void {
        this.setState({isBusy: true});
        getPage(index, PAGE_SIZE, this.search)
            .pipe(finalize(() => this.setState({isBusy: false})))
            .subscribe(
                movies =>
                    this.setState({
                        movies,
                        error: null,
                        pageNumber: index
                    }),
                error => this.setState({error: error.message})
            );
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
            <div data-testid="movies-rx">
                <div>Total Items: <span data-testid="total-items">{this.state.count}</span></div>
                <div>
                    <button data-testid="previous-button"
                            className='btn btn-primary mr-2'
                            disabled={this.state.isBusy}
                            onClick={this.prevPage}>Prev
                    </button>
                    Page Number: <span data-testid="page-number">{this.state.pageNumber + 1}</span>
                    <button data-testid="next-button"
                            className='btn btn-primary ml-2'
                            disabled={this.state.isBusy}
                            onClick={this.nextPage}>Next
                    </button>

                    {this.state.isBusy
                        ? <span data-testid="spinner" className="ml-2 fa fa-circle-o-notch fa-spin"/>
                        : null}
                </div>
                {error}
                <div>
                    <ol data-testid="movie-list" start={this.state.pageNumber * PAGE_SIZE + 1}>
                        {this.state.movies.map(x => <li data-testid="movie-item" key={x}>{x}</li>)}
                    </ol>
                </div>
            </div>
        );
    }
}

export const RxExercise: FC = () => {
    return <Report/>
};
