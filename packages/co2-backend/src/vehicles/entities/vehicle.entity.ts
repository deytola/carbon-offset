import { Column, Model, Table, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Vehicle extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    year: number;

    @Column
    make: string;

    @Column
    model: string;

    @Column
    mileage: number;

    @Column
    mttRatio: number;
}

export default Vehicle;
