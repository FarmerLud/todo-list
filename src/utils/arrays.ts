// export class Arrays {
//   objects: object[]
//   pk: string

//   constructor(objects: object[], pk: string) {
//     this.objects = objects
//     this.pk = pk
//   }

//   get(pkValue: unknown) {
//     return this.objects.filter((obj) => {
//       if (!Object.keys(obj).includes(this.pk)) return false
//       return obj[this.pk] === pkValue
//     })
//   }
// }
