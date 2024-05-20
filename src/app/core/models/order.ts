import { DecimalPipe } from "@angular/common";

export class Order {

id!: number;
car_id!: string
requested_date?: Date;
received_date?: Date;
extraction_start?: Date;
extraction_end?: Date;
release_date?: Date;
user_id!: number;
raw_material_id!: number;
created_at!: Date;
updated_at!: Date;
weight?: DecimalPipe;

}
