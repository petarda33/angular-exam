import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'max20'
})
export class Max20Pipe implements PipeTransform {
  split: string[];
  splitText = '';
  transform(description: string): string {
    if ( description.length > 20) {
      this.split = description.split(' ');
      for (const iterator of this.split) {
        if (iterator.length + this.splitText.length + 1 < 20) {
          this.splitText = this.splitText.concat(iterator, ' ')
        }
      }
      this.splitText = this.splitText.concat('...');
      return this.splitText;
    }
    return description;
  }
}