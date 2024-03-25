import { Column, Model, Table, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Tree extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  species: string;

  @Column
  age: number;

  @Column
  unitPrice: number;
}

export default Tree;
