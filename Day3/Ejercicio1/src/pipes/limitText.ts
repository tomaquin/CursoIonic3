import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
  name: 'limitText'
})

export class LimitTextPipe implements PipeTransform {

  transform(description: string, type: string): string {
    if (type == "fruit") {
      return description.substr(0, 40) + '...';
    }
    if (type == "recomendation") {
      return description.substr(0, 50) + '...';
    }
  }

}
