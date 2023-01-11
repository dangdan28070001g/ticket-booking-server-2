import { TicketDetail } from './ticket-detail.entities';
import { Vehicle } from './vehicle.entities';
import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'seat' })
export class Seat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ name: 'type', type: 'varchar', length: 255, nullable: true })
  type: string;

  @Column({ name: 'floor', type: 'int', nullable: true, default: 1 })
  floor: number;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.seats)
  vehicle: Vehicle;

  @OneToMany(() => TicketDetail, (ticketDetail) => ticketDetail.seat)
  ticketDetails: TicketDetail[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
  public createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    nullable: true,
    select: false,
  })
  public updatedAt?: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    select: false,
  })
  public deletedAt?: Date;
}
