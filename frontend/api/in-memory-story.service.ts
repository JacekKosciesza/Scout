export class InMemorySymbolService {
  /**
  * Creates fresh copy of data each time.
  * Safe for consuming service to morph arrays and objects.
  */
  createDb() {
    let symbols = [
      {
        "id": 1,
        "name": "74469"    
      },
      {
        "id": 2,
        "name": "74471"
      },
    ]

    return {symbols};
  }
}