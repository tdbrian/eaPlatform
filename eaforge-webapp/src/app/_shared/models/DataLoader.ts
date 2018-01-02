import { Observable } from 'rxjs/Observable';

export class DataLoader<T> {
  isLoading = false;
  loadError = false;
  value: T;

  async handle(result: Observable<T>): Promise<T> {
    this.isLoading = true;
    this.loadError = false;
    try {
      this.value = await result.toPromise();
      this.isLoading = false;
      return this.value;
    } catch (e) {
      console.error(e);
      this.loadError = true;
      this.isLoading = false;
      return e;
    }
  }
}
