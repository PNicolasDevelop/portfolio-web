import {Component, input, model, output, signal, Signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './modules/common/components/navbar/navbar.component';
import {TerminalContainerComponent} from './modules/common/components/terminal-container/terminal-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TerminalContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
  count: WritableSignal<number> = signal(0);
  testEmitter = output();
  inputTest = input<number>();
  inputTestEditable = model<number>();
  updateCount() {
    this.count.update(value =>  value + 1);
    this.testEmitter.emit();
  }
}
