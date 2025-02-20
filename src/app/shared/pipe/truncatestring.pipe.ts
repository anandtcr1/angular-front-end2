import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatestring'
})
export class TruncatestringPipe implements PipeTransform {

  transform(value: string, args: string[]): string {
    let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    let trail = args.length > 1 ? args[1] : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
