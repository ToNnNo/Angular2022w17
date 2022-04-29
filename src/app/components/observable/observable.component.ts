import {Component, OnDestroy, OnInit} from '@angular/core';
import {NumberService} from "../../services/number.service";
import {BehaviorSubject, ReplaySubject, Subject, Subscription} from "rxjs";
import {Title} from "@angular/platform-browser";
import {PageTitleService} from "../../services/page-title.service";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  numbers: number[] = [];
  state?: string; // == state: string|undefined
  disabled = false;

  /**
   * "!" => Aura tout le temps un Subscription comme valeur,
   * doit obligatoirement être initialisé
   */
  // subscription!: Subscription;

  subscription?: Subscription;

  constructor(
    private numberService: NumberService,
    private title: Title,
    private pageTitle: PageTitleService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Les Observables :: Angular 13 CFA CDA');
    this.pageTitle.setTitle('Les Observables');

    // initialiser des valeurs
    // faire appel à une api automatiquement

    /*this.disabled = true;

    this.subscription = this.numberService.getNumbers().subscribe({
      next: (response: number[]) => {
        this.numbers = response;
      },
      complete: () => {
        this.state = `Synchronisation terminée`;
        this.disabled = false;
      }
    });*/
  }

  public synchroniser(): void {
    this.disabled = true;
    this.state = undefined;
    this.numbers = [];

    this.subscription = this.numberService.getNumbers().subscribe({
      next: (response: number[]) => {
        this.numbers = response;
      },
      complete: () => {
        this.state = `Synchronisation terminée`;
        this.disabled = false;
      }
    });

  }

  public subject(): void {
    const subject = new Subject<string>();
    subject.next('1er valeur');

    const subscription = subject.subscribe({
      next: (value) => console.log(`La valeur de subject est ${value}`)
    });

    subject.next('2e valeur');
    subject.next('3e valeur');

    subscription.unsubscribe();

    subject.next('4e valeur');

    subject.subscribe({
      next: (value) => console.log(`Réabonnement: La valeur de subject est ${value}`)
    });

    subject.next('5e valeur');
    subject.next('6e valeur');

    subject.complete();
  }

  public behaviorSubject(): void {
    const subject = new BehaviorSubject<string>('valeur initiale');
    subject.next('1ere valeur');

    subject.subscribe({
      next: value => console.log(`La valeur du behaviorSubject est ${value}`),
      complete: () => console.log('behaviorSubject Terminé !')
    });

    subject.next('2e valeur');
    subject.next('3e valeur');
    subject.next('4e valeur');
    subject.complete();
  }

  public replaySubject(): void {
    const subject = new ReplaySubject<string>(3);
    subject.next('1ere valeur');
    subject.next('2e valeur');
    subject.next('3e valeur');
    subject.next('4e valeur');

    subject.subscribe({
      next: value => console.log(`La valeur du replaySubject est ${value}`),
      complete: () => console.log('replaySubject Terminé !')
    });

    subject.next('5e valeur');
    subject.next('6e valeur');
    subject.complete();
  }

  ngOnDestroy(): void {
    console.log("Close");
    this.subscription?.unsubscribe(); // ? = safe operator
  }
}
