import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Tree extends Model {
  @Column
  species: string;

  @Column
  age: number;
}

export default Tree;
