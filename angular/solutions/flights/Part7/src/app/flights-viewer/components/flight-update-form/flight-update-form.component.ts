import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Flight} from '../../../model/flight';
import {formatDate} from '@angular/common';
import {createRequiredRegexValidator} from '../../../utility/validators';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {FlightsService} from '../../../service/flights.service';

function airportsDifferentValidator(fg: FormGroup): ValidationErrors | null {
  if (fg.get('origin')?.value === fg.get('destination')?.value) {
    return {identicalAirports: true};
  }

  return null;
}

@Component({
  selector: 'app-flight-update-form',
  templateUrl: './flight-update-form.component.html',
  styleUrls: ['./flight-update-form.component.css']
})
export class FlightUpdateFormComponent implements OnInit {
  @Input() flight: Flight | null = null;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private flightsService: FlightsService,
              private router: Router) {
    this.form = formBuilder.group({
      id: ['', createRequiredRegexValidator(/^[0-9]{3}$/)],
      origin: ['', createRequiredRegexValidator(/^[a-zA-Z ]+$/)],
      destination: ['', createRequiredRegexValidator(/^[a-zA-Z ]+$/)],
      departure: [formatDate(new Date(), 'yyyy-MM-dd', 'en'), Validators.required],
      arrival: [formatDate(new Date(), 'yyyy-MM-dd', 'en'), Validators.required]
    }, {validator: airportsDifferentValidator});
  }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => params.id as number),
        switchMap(id => this.flightsService.get(id))
      )
      .subscribe(flight => this.resetForm(flight));
  }

  updateFlight(): void {
    if (this.flight !== null) {
      this.resetModel(this.form.value);
      const id = this.flight.id;
      this.flightsService.put(this.flight)
        .subscribe(() => {
          console.log('Update of flight complete');
          this.router.navigateByUrl(`/flights/${id}`);
        });
    }
  }

  private resetForm(flight: Flight): void {
    this.flight = flight;
    this.form.setValue({
      ...flight,
      departure: formatDate(flight.departure, 'yyyy-MM-dd', 'en'),
      arrival: formatDate(flight.arrival, 'yyyy-MM-dd', 'en'),
    });
  }

  private resetModel(values: Flight): void {
    this.flight = {
      ...values,
      departure: new Date(values.departure),
      arrival: new Date(values.arrival),
    };
  }
}
