export class Order {
    id?: number;
    carId: string;
    requestedDate: Date;
    receivedDate: Date;
    extractionStart: Date;
    extractionEnd: Date;
    releaseDate: Date;
    userId: number;         
    rawMaterialId: number;   
  
    constructor(
      carId: string,
      requestedDate: Date,
      receivedDate: Date,
      extractionStart: Date,
      extractionEnd: Date,
      releaseDate: Date,
      userId: number,
      rawMaterialId: number,
      id?: number
    ) {
      this.carId = carId;
      this.requestedDate = requestedDate;
      this.receivedDate = receivedDate;
      this.extractionStart = extractionStart;
      this.extractionEnd = extractionEnd;
      this.releaseDate = releaseDate;
      this.userId = userId;
      this.rawMaterialId = rawMaterialId;
      this.id = id;
    }
  }
  